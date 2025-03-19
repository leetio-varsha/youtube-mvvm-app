import React, { useState } from "react";
import VideoList from "../components/VideoList";
import AddVideoModal from "../components/AddVideoModal";
import styles from "./HomePage.module.scss";
import Button from "@shared/components/Button";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My YouTube Videos</h1>
      <Button onClick={() => setIsModalOpen(true)}>+ Add Video</Button>
      <VideoList />
      <AddVideoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;
