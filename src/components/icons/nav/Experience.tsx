import React from 'react';

interface ExperienceProps {
    width?: number;
    height?: number;
    fill?: string;
}

const Experience: React.FC<ExperienceProps> = ({ width = 50, height = 50, fill = '#000000' }) => (
    <svg
        fill={fill}
        width={width}
        height={height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        data-name="Layer 1"
    >
        <rect height="1" width="12" x="10" y="29" />
        <rect height="1" width="12" x="10" y="2" />
        <rect height="1" width="9" x="13" y="20" />
        <rect height="1" width="2" x="10" y="20" />
        <rect height="1" width="9" x="13" y="23" />
        <rect height="1" width="2" x="10" y="23" />
        <rect height="1" transform="translate(9.5 41.5) rotate(-90)" width="20" x="15.5" y="15.5" />
        <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z" />
        <rect height="1" transform="translate(-9.5 22.5) rotate(-90)" width="20" x="-3.5" y="15.5" />
        <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z" />
        <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,3.8,3.8,0,0,1,.17-1.07,4,4,0,0,1,7.66,0A3.8,3.8,0,0,1,20,16.93a7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2Z" />
        <path d="M16,8a2,2,0,1,0,2,2A2,2,0,0,0,16,8Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z" />
        <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,8,8,0,0,0,8,0,7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2ZM16,17a7,7,0,0,1-3.83-1.14,4,4,0,0,1,7.66,0,A7,7,0,0,1,16,17Z" />
        <path d="M20.67,15.2a6,6,0,0,1-.84.66,4,4,0,0,0-7.66,0,6,6,0,0,1-.84-.66,5,5,0,0,1,9.34,0Z" />
    </svg>
);

export default Experience;
