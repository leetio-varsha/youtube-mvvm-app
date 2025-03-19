import React from "react";
import styles from "./AddVideoModal.module.scss";
import Modal from "@shared/components/Modal";
import Button from "@shared/components/Button";
import Input from "@shared/components/Input";
import { useAddVideoLogic } from "@features/home/components/AddVideoModal/AddVideoModalService.ts";

interface AddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const AddVideoModal: React.FC<AddVideoModalProps> = ({ isOpen, onClose, setIsOpen }) => {
  const { videoUrl, setVideoUrl, error, handleSave } = useAddVideoLogic(setIsOpen, onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Add YouTube Video</h2>
        <form title={"Add Video"} name={"addVideo"} onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Enter YouTube URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.buttonContainer}>
            <Button onClick={handleSave}>Save</Button>
            <Button variant={"secondary"} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddVideoModal;
