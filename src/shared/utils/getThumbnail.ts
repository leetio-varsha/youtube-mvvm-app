const getThumbnail = (videoId: string) => {
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''
}

export default getThumbnail