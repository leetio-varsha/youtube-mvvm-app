import { createJSONStorage, persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

export interface IVideo {
  id: string;
  url: string;
  playbackTime: number;
}

interface VideoState {
  video: IVideo | null;
  setVideo: (url: string) => void;
  updatePlaybackTime: (time: number) => void;
  updateVideoUrl: (newUrl: string) => void;
  removeVideo: () => void;
}

export const useVideoStore = createWithEqualityFn<VideoState>()(
  persist(
    (set) => ({
      video: null,

      setVideo: (url) => {
        set(() => {
          const videoId = new URL(url).searchParams.get("v") || crypto.randomUUID();
          return {
            video: { id: videoId, url, playbackTime: 0 },
          };
        });
      },

      updatePlaybackTime: (time) => {
        set((state) => {
          if (!state.video) return state;
          return {
            video: { ...state.video, playbackTime: time },
          };
        });
      },

      updateVideoUrl: (newUrl) => {
        set((state) => {
          if (!state.video) return state;

          const newVideoId = new URL(newUrl).searchParams.get("v") || state.video.id;
          return {
            video: { id: newVideoId, url: newUrl, playbackTime: state.video.playbackTime },
          };
        });
      },

      removeVideo: () => {
        set(() => ({ video: null }));
      },
    }),
    {
      name: "video",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
