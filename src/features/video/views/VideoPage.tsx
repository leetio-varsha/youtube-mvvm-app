import { useNavigate } from "react-router-dom";
import VideoPlayer from "shared/components/VideoPlayer";
import styles from "./VideoPage.module.scss";
import Button from "@shared/components/Button";
import { useVideoStore } from "@shared/store/VideoStore.ts";

const VideoPage = () => {
  const navigate = useNavigate();
  const video = useVideoStore((state) => state.video);
  console.log(video);
  if (!video) {
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
      <VideoPlayer />
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
