import { createJSONStorage, persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

export interface IVideo {
  id: string;
  url: string;
  playbackTime: number;
}

interface VideoState {
  videos: IVideo[];
  addVideo: (url: string) => void;
  updatePlaybackTime: (id: string, time: number) => void;
  removeVideo: (id: string) => void;
  updateVideoUrl: (id: string, newUrl: string) => void;
}

export const useVideoStore = createWithEqualityFn<VideoState>()(
  persist(
    (set) => ({
      videos: [],
      addVideo: (url) => {
        set((state) => {
          const videoId = new URL(url).searchParams.get("v") || crypto.randomUUID();
          const videoExists = state.videos.some((video) => video.id === videoId);

          if (videoExists) {
            alert("This video is already in your list.");
            return state;
          }
          return {
            videos: [...state.videos, { id: videoId, url, playbackTime: 0 }],
          };
        });
      },
      updatePlaybackTime: (id, time) => {
        set((state) => ({
          videos: state.videos.map((video) => (video.id === id ? { ...video, playbackTime: time } : video)),
        }));
      },
      removeVideo: (id) => {
        set((state) => ({
          videos: state.videos.filter((video) => video.id !== id),
        }));
      },
      updateVideoUrl: (id, newUrl) => {
        set((state) => {
          const newVideoId = new URL(newUrl).searchParams.get("v") || id; // Generate new ID if needed
          const updatedVideos = state.videos.map((video) =>
            video.id === id ? { id: newVideoId, url: newUrl, playbackTime: video.playbackTime } : video
          );
          return { videos: updatedVideos };
        });
      },
    }),
    {
      name: "videos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
