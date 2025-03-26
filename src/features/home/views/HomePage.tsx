import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import VideoPlayer from "@shared/components/VideoPlayer";
import { useVideoStore } from "@shared/store/VideoStore.ts";

const HomePage: React.FC = () => {
  const removeVideo = useVideoStore((state) => state.removeVideo);

  useEffect(() => {
    removeVideo();
  }, [removeVideo]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Video player component initial state example</h1>
      <VideoPlayer />
    </div>
  );
};

export default HomePage;
