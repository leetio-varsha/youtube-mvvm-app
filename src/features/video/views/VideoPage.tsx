import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "shared/components/VideoPlayer";
import styles from "./VideoPage.module.scss";
import { useVideoService } from "shared/services/videoService.ts";
import Button from "@shared/components/Button";

const VideoPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentVideo } = useVideoService();

  if (!currentVideo) {
    return (
      <div className={styles.container}>
        <h2>Video not found</h2>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Now Playing</h2>
      <VideoPlayer videoUrl={currentVideo.url} videoId={currentVideo.id} playbackTime={currentVideo.playbackTime} />
      <div className={styles.buttons}>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
        <Button variant={"secondary"} onClick={() => navigate("/gif")}>
          Check your GIF!
        </Button>
      </div>
    </div>
  );
};

export default VideoPage;
