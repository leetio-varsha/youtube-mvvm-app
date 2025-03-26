import React, { useEffect, useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer, YouTubeProps } from "react-youtube";
import styles from "./VideoPlayer.module.scss";
import VideoPlayerInitialState from "./VideoPlayerInitialState.tsx";
import { useVideoStore } from "@shared/store/VideoStore.ts";
import Button from "@shared/components/Button";

interface VideoPlayerProps {
  options?: {
    [key: string]: unknown;
  };
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options = {} }) => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const video = useVideoStore((state) => state.video);
  const updatePlaybackTime = useVideoStore((state) => state.updatePlaybackTime);
  const playbackTime = video?.playbackTime || 0;

  const opts = {
    playerVars: {
      autoplay: 1,
    },
    ...options,
  };

  useEffect(() => {
    const handlePageLeave = () => {
      if (player) {
        const currentTime = player.getCurrentTime();
        updatePlaybackTime(currentTime);
      }
    };
    window.addEventListener("beforeunload", handlePageLeave);
    return () => {
      window.removeEventListener("beforeunload", handlePageLeave);
    };
  }, [player, updatePlaybackTime]);

  const handleStateChange = (event: YouTubeEvent) => {
    if (event.data === 2 && player) {
      updatePlaybackTime(player.getCurrentTime());
    }
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    setPlayer(event.target);
    if (playbackTime > 0) {
      event.target.seekTo(playbackTime, true);
    }
    event.target.playVideo();
  };

  return (
    <div className={styles.playerContainer}>
      {video?.id && !isEditMode ? (
        <div className={styles.player}>
          {React.createElement(YouTube as React.ElementType, {
            videoId: video?.id || "",
            opts: opts,
            onReady: (event: YouTubeEvent) => onPlayerReady(event),
            onStateChange: handleStateChange,
          })}
          <Button onClick={() => setIsEditMode(true)} variant="primary">
            Edit
          </Button>
        </div>
      ) : (
        <VideoPlayerInitialState defaultValue={video?.url} isEdit={isEditMode} onSave={() => setIsEditMode(false)} />
      )}
    </div>
  );
};

export default VideoPlayer;
