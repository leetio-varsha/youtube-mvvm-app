import React, { useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer, YouTubeProps } from "react-youtube";
import { useVideoService } from "@shared/services/videoService";
import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
  videoUrl: string;
  videoId: string;
  options?: {
    [key: string]: unknown;
  };
  playbackTime?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, videoId, options = {}, playbackTime = 0 }) => {
  const { updatePlaybackTime } = useVideoService();
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);

  const videoIdParam = new URL(videoUrl).searchParams.get("v") || "";

  const handleStateChange = (event: YouTubeEvent) => {
    if (event.data === 2 && player) {
      updatePlaybackTime(videoId, player.getCurrentTime());
    }
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    setPlayer(event.target);

    if (playbackTime > 0) {
      event.target.seekTo(playbackTime, true);
    }

    event.target.playVideo();
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
    ...options,
  };

  return (
    <div className={styles.playerContainer}>
      {React.createElement(YouTube as React.ElementType, {
        videoId: videoIdParam || "",
        opts: opts,
        onReady: (event: YouTubeEvent) => onPlayerReady(event),
        onStateChange: handleStateChange,
      })}
    </div>
  );
};

export default VideoPlayer;
