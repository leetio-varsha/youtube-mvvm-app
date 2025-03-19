import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./features/home/views/HomePage";
import VideoPage from "./features/video/views/VideoPage";
import GifPage from "./features/gif/views/GifPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/gif" element={<GifPage />} />
    </Routes>
  );
};

export default App;
