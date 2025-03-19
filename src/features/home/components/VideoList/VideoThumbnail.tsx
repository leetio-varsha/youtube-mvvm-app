import styles from "./VideoList.module.scss";
import getThumbnail from "@shared/utils/getThumbnail.ts";
import Button from "@shared/components/Button";
import { IVideo, useVideoStore } from "@shared/store/videoStore.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "@shared/components/Loader";
import EditVideoModal from "@features/home/components/EditVideoModal";

interface IVideoThumbnail {
  video: IVideo;
}

const VideoThumbnail = ({ video }: IVideoThumbnail) => {
  const navigate = useNavigate();
  const updateVideoUrl = useVideoStore((state) => state.updateVideoUrl);
  const removeVideo = useVideoStore((state) => state.removeVideo);
  const [isLoadingThumbnail, setLoadingThumbnail] = useState<boolean>(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(getThumbnail(video.id));

  const handleEdit = (newUrl: string) => {
    const newID = new URL(newUrl).searchParams.get("v") || "";
    updateVideoUrl(video.id, newUrl);
    setThumbnail(getThumbnail(newID));
    setIsEditModalOpen(false);
  };

  return (
    <li key={video.id} className={styles.videoItem}>
      {isLoadingThumbnail && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      <div className={styles.thumbNail}>
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className={styles.thumbnail}
          onLoad={() => setLoadingThumbnail(false)}
          onClick={() => navigate(`/video?id=${video.id}`)}
        />
      </div>
      <div className={styles.videoInfo}>
        <span className={styles.videoTitle}>{new URL(video.url).searchParams.get("v")}</span>
        <div className={styles.videoButtons}>
          <Button variant="secondary" onClick={() => setIsEditModalOpen(true)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => removeVideo(video.id)}>
            ✖
          </Button>
        </div>
      </div>
      {isEditModalOpen && (
        <EditVideoModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          videoId={video.id}
          onSave={handleEdit}
        />
      )}
    </li>
  );
};

export default VideoThumbnail;
