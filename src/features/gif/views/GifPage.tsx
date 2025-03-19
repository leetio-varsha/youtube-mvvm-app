import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@shared/components/Button";
import styles from "./GifPage.module.scss";

const GifPage: React.FC = () => {
  const navigate = useNavigate();
  const funnyGif = "https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Enjoy this Funny GIF 😆</h2>
      <img src={funnyGif} alt="Funny GIF" className={styles.gif} />
      <Button onClick={() => navigate(-1)} variant="primary">
        Back
      </Button>
    </div>
  );
};

export default GifPage;
