import { useVideoStore } from '../store/videoStore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useVideoService = () => {
    const { videos, updatePlaybackTime } = useVideoStore()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const videoId = queryParams.get('id')

    const [currentVideo, setCurrentVideo] = useState(() =>
        videos.find((video) => video.id === videoId) || null
    )

    useEffect(() => {
        setCurrentVideo(videos.find((video) => video.id === videoId) || null)
    }, [videos, videoId])

    return { currentVideo, updatePlaybackTime }
}
