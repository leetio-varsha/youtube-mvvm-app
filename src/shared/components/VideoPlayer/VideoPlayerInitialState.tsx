import styles from "./VideoPlayer.module.scss";
import Input from "@shared/components/Input";
import Button from "@shared/components/Button";
import { useAddVideoService } from "@shared/services/AddVideoService.ts";

interface IVideoPlayerInitialStateProps {
  defaultValue?: string;
  isEdit?: boolean;
  onSave?: () => void;
}

const VideoPlayerInitialState = ({ defaultValue, isEdit, onSave }: IVideoPlayerInitialStateProps) => {
  const { videoUrl, setVideoUrl, error, handleSave } = useAddVideoService(defaultValue);

  const saveVideo = () => {
    handleSave();
    if (onSave) {
      onSave();
    }
  };

  return (
    <div className={styles.initialStateContainer}>
      <h2 className={styles.initialStateTitle}>{isEdit ? "Edit" : "Save"} Video</h2>
      <form title={"Add Video"} name={"addVideo"} onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="Enter new YouTube URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        {error && <p className={styles.initialStateError}>{error}</p>}
        <div className={styles.initialStateButtonContainer}>
          <Button onClick={saveVideo} variant="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VideoPlayerInitialState;
