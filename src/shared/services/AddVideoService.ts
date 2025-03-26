import { useState } from "react";
import { useVideoStore } from "@shared/store/VideoStore.ts";
import isValidYoutubeUrl from "@shared/utils/isValidYoutubeUrl.ts";

export function useAddVideoService(defaultValue: string = "") {
  const [videoUrl, setVideoUrl] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);
  const addVideo = useVideoStore((state) => state.setVideo);

  const handleSave = () => {
    if (!videoUrl.trim()) {
      setError("Video URL cannot be empty.");
      return;
    }

    if (!isValidYoutubeUrl(videoUrl)) {
      setError("Please enter a valid YouTube video URL.");
      return;
    }

    setError(null);
    addVideo(videoUrl);
    setVideoUrl("");
  };

  return {
    videoUrl,
    setVideoUrl,
    error,
    handleSave,
  };
}
