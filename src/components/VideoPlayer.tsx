import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleProgress = (progress: { playedSeconds: number }) => {
        setShowOverlay(progress.playedSeconds > 10 && progress.playedSeconds < 15);
    };

    return (
        <div style={{ position: 'relative' }}>
            <ReactPlayer
                url="/video.mp4"
                playing
                onProgress={handleProgress}
            />
            {showOverlay && (
                <div style={{ position: 'absolute', top: '20%', left: '20%', background: 'white' }}>
                    <h3>Special Offer!</h3>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
