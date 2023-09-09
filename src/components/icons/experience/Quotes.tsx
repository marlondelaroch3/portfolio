import React from 'react';

interface SVGProps {
    width?: number;
    height?: number;
    className: string;
}

const Quotes: React.FC<SVGProps> = ({ width = 10, height = 10, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#EDF9FE" viewBox="0 0 18 14" width={width} height={height} className={className} aria-hidden="true">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);

export default Quotes;
