import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> { }

const Rocket: React.FC<SvgProps> = (props) => (
    <svg
        width="175"
        height="175"
        viewBox="0 0 175 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_12_114)">
            <path d="M5.89581 168.546C7.13479 165.064 8.74768 160.636 10.5526 156.049C17.3456 138.74 20.9453 133.566 22.494 132.022C24.8116 129.699 27.685 128.134 30.8038 127.488L31.8825 127.264L43.9626 115.045L58.4242 131.75L47.1774 142.521L46.9423 143.627C46.3014 146.746 44.7313 149.619 42.4136 151.948C40.865 153.486 35.6955 157.096 18.3922 163.884C13.8 165.683 9.36699 167.307 5.89581 168.546Z" fill="#131E40" />
            <path d="M44.1444 109.694L30.0669 123.926C26.4033 124.685 22.8464 126.527 19.92 129.454C12.4434 136.93 0 174.436 0 174.436C0 174.436 37.5008 161.998 44.9879 154.516C47.9037 151.595 49.7518 148.033 50.5098 144.364L63.4335 131.984L44.1444 109.694ZM45.4794 139.109L43.8454 140.679L43.386 142.895C42.8839 145.314 41.6559 147.558 39.84 149.373C39.2418 149.971 35.3219 153.33 17.0897 160.487C15.3486 161.165 13.6397 161.822 11.995 162.436C12.6143 160.792 13.2661 159.083 13.9497 157.352C21.106 139.114 24.4596 135.194 25.0683 134.596C26.8842 132.775 29.1274 131.552 31.5411 131.056L33.6984 130.607L35.247 129.042L43.7811 120.402L53.4044 131.515L45.4794 139.109Z" fill="#0F1426" />
            <path d="M68.3261 144.711C70.3663 143.755 72.4064 142.74 74.4356 141.678L115.963 112.017C117.661 110.431 119.338 108.807 120.994 107.163C121.944 106.202 122.895 105.24 123.824 104.268C123.664 123.189 114.991 143.889 98.5212 160.364C93.0315 165.849 87.082 170.468 80.8765 174.201C80.8338 174.228 80.5877 174.372 80.5877 174.372C79.21 175.12 77.4474 174.911 76.2833 173.747C75.8988 173.357 75.6209 172.903 75.45 172.423C75.45 172.423 75.3218 172.044 75.2897 171.878L67.7916 144.957C67.9738 144.877 68.1447 144.791 68.3261 144.711Z" fill="#0F1426" />
            <path d="M70.9323 51.3599C69.9602 52.2943 68.9991 53.2452 68.0377 54.2008C66.3927 55.8509 64.7692 57.5277 63.1884 59.2261C55.9149 60.2514 33.5173 100.759 33.5173 100.759C32.4598 102.788 31.4454 104.823 30.4839 106.869C30.3985 107.045 30.3236 107.221 30.2382 107.397L3.31123 99.899C3.15093 99.8668 2.76642 99.7387 2.76642 99.7387C2.28587 99.5678 1.8371 99.2903 1.442 98.9003C0.277875 97.7362 0.0748536 95.979 0.822682 94.5958C0.822682 94.5958 0.961447 94.3555 0.993575 94.3128C4.7211 88.107 9.33521 82.1579 14.8253 76.6681C31.3059 60.1875 52.0055 51.5147 70.9323 51.3599Z" fill="#0F1426" />
            <path d="M67.3329 51.6268C46.6863 72.2782 31.7974 95.8669 23.4982 118.719C23.0603 120.001 23.3379 121.464 24.3632 122.484L52.6997 150.831C53.725 151.846 55.1882 152.129 56.4699 151.691C79.3272 143.392 102.911 128.508 123.557 107.857C155.643 75.7819 173.651 37.0794 174.997 4.07512C175.039 3.09249 174.687 2.00834 173.939 1.25539C173.181 0.50243 172.102 0.150049 171.109 0.192772C138.105 1.53838 99.4079 19.5519 67.3329 51.6268Z" fill="#E6E9ED" />
            <path d="M108.551 81.1862C104.663 81.1862 101.01 79.6693 98.2649 76.9244C95.52 74.1741 94.0032 70.5211 94.0032 66.6333C94.0032 62.7454 95.52 59.0924 98.2649 56.3421C101.01 53.5972 104.673 52.0804 108.551 52.0804C112.438 52.0804 116.091 53.5972 118.847 56.3421C124.519 62.0192 124.519 71.2525 118.847 76.9244C116.091 79.6693 112.438 81.1862 108.561 81.1862C108.551 81.1862 108.551 81.1862 108.551 81.1862Z" fill="#434A54" />
            <path d="M77.6825 112.054C73.7947 112.054 70.142 110.543 67.3968 107.793C64.6516 105.048 63.1347 101.389 63.1347 97.5065C63.1347 93.6187 64.6516 89.9605 67.3968 87.2102C70.1417 84.4653 73.7947 82.9484 77.6825 82.9484C81.5707 82.9484 85.2234 84.4653 87.9792 87.2102C93.6508 92.8872 93.6508 102.121 87.9792 107.793C85.2234 110.543 81.5707 112.054 77.6825 112.054Z" fill="#434A54" />
            <path d="M121.421 53.7736C117.982 50.3396 113.41 48.4438 108.551 48.4438C103.701 48.4438 99.1303 50.3396 95.6909 53.7736C92.2625 57.2075 90.3611 61.7789 90.3611 66.6333C90.3611 71.4931 92.2621 76.0594 95.6909 79.4984C99.13 82.932 103.702 84.8228 108.551 84.8228C113.41 84.8228 117.982 82.9324 121.421 79.4984C128.513 72.4064 128.513 60.866 121.421 53.7736ZM116.273 74.3505C114.137 76.4812 111.349 77.5492 108.551 77.5492C105.763 77.5492 102.964 76.4812 100.839 74.3505C96.5775 70.0887 96.5775 63.1782 100.839 58.9164C102.965 56.7857 105.763 55.7228 108.551 55.7228C111.349 55.7228 114.137 56.7854 116.273 58.9164C120.534 63.1782 120.534 70.0887 116.273 74.3505Z" fill="#CCD1D9" />
            <path d="M77.6825 79.3173C72.8227 79.3173 68.2622 81.2077 64.8225 84.6416C61.3834 88.0752 59.4927 92.647 59.4927 97.5068C59.4927 102.362 61.3831 106.927 64.8225 110.367C68.2619 113.801 72.8227 115.697 77.6825 115.697C82.5427 115.697 87.1141 113.801 90.5535 110.367C97.6456 103.275 97.6456 91.7337 90.5535 84.6416C87.1141 81.2077 82.5427 79.3173 77.6825 79.3173ZM85.4052 105.219C83.269 107.355 80.4811 108.417 77.6825 108.417C74.8949 108.417 72.0964 107.355 69.9712 105.219C65.7091 100.956 65.7091 94.0462 69.9712 89.7845C72.0967 87.6535 74.8949 86.5908 77.6825 86.5908C80.4811 86.5908 83.269 87.6535 85.4052 89.7845C89.6669 94.0459 89.6669 100.956 85.4052 105.219Z" fill="#CCD1D9" />
            <path d="M163.792 49.8379L125.352 11.4023C141.01 4.59327 156.615 0.785429 171.109 0.192772C172.102 0.150049 173.181 0.50243 173.939 1.25539C174.687 2.00834 175.039 3.09249 174.997 4.07512C174.409 18.5798 170.596 34.1796 163.792 49.8379Z" fill="#0F1426" />
        </g>
        <defs>
            <clipPath id="clip0_12_114">
                <rect width="175" height="175" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default Rocket;
