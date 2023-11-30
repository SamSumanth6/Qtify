import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import './card.css';

const Card = ({
    imgSrc,
    followersCount,
    label,
    numSongs
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='card-wrapper'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Tooltip title={`${numSongs} Songs`} arrow>
                <div className='card'>
                    <div className='card-img-frame'>
                        <img className='card-img' src={imgSrc} alt={label} />
                    </div>
                    <div className='card-content-container'>
                        <div className='card-content'>
                            <span className='card-content-pill'>
                                {followersCount} Follows
                            </span>
                        </div>
                        <p className='card-label'>{label}</p>
                    </div>
                </div>
            </Tooltip>
        </div>
    );
};

export default Card;
