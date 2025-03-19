import React from "react";
import { useVideoStore } from "shared/store/videoStore";
import styles from "./VideoList.module.scss";
import { shallow } from "zustand/vanilla/shallow";
import VideoThumbnail from "@features/home/components/VideoList/VideoThumbnail.tsx";

const VideoList: React.FC = () => {
  const videos = useVideoStore((state) => state.videos, shallow);

  return (
    <div className={styles.listContainer}>
      {videos.length === 0 ? (
        <p className={styles.emptyMessage}>No videos added yet.</p>
      ) : (
        <ul className={styles.videoList}>
          {videos.map((video) => (
            <VideoThumbnail video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default VideoList;
