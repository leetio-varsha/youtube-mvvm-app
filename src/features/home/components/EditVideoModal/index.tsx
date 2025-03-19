import React, { useState } from "react";
import Modal from "@shared/components/Modal";
import Input from "@shared/components/Input";
import Button from "@shared/components/Button";
import { useVideoStore } from "@shared/store/videoStore";
import styles from "./EditVideoModal.module.scss";

interface EditVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  onSave: (newUrl: string) => void;
}

const EditVideoModal: React.FC<EditVideoModalProps> = ({ isOpen, onClose, videoId, onSave }) => {
  const { videos } = useVideoStore();
  const video = videos.find((v) => v.id === videoId);
  const [newUrl, setNewUrl] = useState(video?.url || "");

  const handleSave = () => {
    onSave(newUrl);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Edit Video</h2>
        <Input
          type="text"
          placeholder="Enter new YouTube URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={handleSave} variant="primary">
            Save
          </Button>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditVideoModal;
