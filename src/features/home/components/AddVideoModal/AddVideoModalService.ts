import { useState, useEffect } from "react";
import { useVideoStore } from "@shared/store/videoStore.ts";
import isValidYoutubeUrl from "@shared/utils/isValidYoutubeUrl.ts";
import { shallow } from "zustand/vanilla/shallow";

export function useAddVideoLogic(setIsOpen: (isOpen: boolean) => void, onClose: () => void) {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const videos = useVideoStore((state) => state.videos, shallow);
  const addVideo = useVideoStore((state) => state.addVideo);

  // Effect to open modal when no videos exist
  useEffect(() => {
    if (!videos.length) {
      setIsOpen(true);
    }
  }, [videos, setIsOpen]);

  // Save video logic
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
    onClose();
  };

  return {
    videoUrl,
    setVideoUrl,
    error,
    handleSave,
  };
}
