export const isValidYoutubeUrl = (url: string): boolean => {
  const youtubeUrlRegex = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?[a-zA-Z0-9_-]{11}(&.*)?$/;
  return youtubeUrlRegex.test(url.trim());
};

export default isValidYoutubeUrl;
