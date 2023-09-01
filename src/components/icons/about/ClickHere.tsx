import React from 'react';

interface SVGProps {
    width?: number;
    height?: number;
    className: string;
}

const ClickHere: React.FC<SVGProps> = ({ width = 50, height = 50, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 154" width={width} height={height} className={className}>
        <circle cx="77" cy="77" r="76.5" stroke="white" fill="transparent"/>
        <circle cx="76.5" cy="76.5" r="62" stroke="white" fill="transparent"/>
    </svg>
);

export default ClickHere;
