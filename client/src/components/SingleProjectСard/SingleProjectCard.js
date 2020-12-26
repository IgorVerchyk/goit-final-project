import React from 'react';

import styles from './SingleProjectCard.module.scss';

export default function SingleProjectCard({ id, color }) {
  return (
    <li className={styles.el} style={{ backgroundColor: color }}>
      <h2 className={styles.title}>Project name</h2>
      <p className={styles.text}>lorem</p>
      <div className={styles.trash}>
        <svg
          width="30"
          height="30"
          viewBox="26 20 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41 20C32.7157 20 26 26.7157 26 35C26 43.2843 32.7157 50 41 50C49.2843 50 56 43.2843 56 35C56 26.7157 49.2843 20 41 20ZM42.3724 27.8059H39.6376V28.2661H38.6498V27.7415C38.6498 27.2324 39.0638 26.8181 39.5727 26.8181H42.4373C42.9462 26.8181 43.3602 27.2324 43.3601 27.7415V28.2661H42.3724V27.8059ZM45.6409 32.1795H36.369C36.1149 32.1795 35.9149 32.3962 35.9354 32.6495L36.7106 42.2346C36.7538 42.7697 37.2001 43.1818 37.7363 43.1818H44.2735C44.8097 43.1818 45.2561 42.7697 45.2992 42.2345L46.0744 32.6495C46.095 32.3962 45.895 32.1795 45.6409 32.1795ZM38.6141 42.1594C38.6037 42.16 38.5933 42.1604 38.5831 42.1604C38.3242 42.1604 38.1068 41.9588 38.0907 41.6969L37.6049 33.828C37.5882 33.5558 37.7953 33.3214 38.0675 33.3047C38.3388 33.2882 38.5741 33.4948 38.5908 33.7672L39.0765 41.6361C39.0933 41.9084 38.8862 42.1426 38.6141 42.1594ZM41.5043 41.6665C41.5043 41.9392 41.2832 42.1603 41.0105 42.1603C40.7377 42.1603 40.5166 41.9392 40.5166 41.6665V33.7976C40.5166 33.5248 40.7377 33.3037 41.0105 33.3037C41.2831 33.3037 41.5043 33.5248 41.5043 33.7976V41.6665ZM44.405 33.8267L43.9412 41.6955C43.9258 41.9579 43.7081 42.1603 43.4487 42.1603C43.4456 42.1603 43.4426 42.1603 43.4396 42.1602C43.4328 42.1601 43.426 42.1599 43.4192 42.1595C43.1469 42.1434 42.9392 41.9097 42.9553 41.6374L43.419 33.7685C43.4349 33.4962 43.6679 33.2885 43.9409 33.3046C44.2132 33.3205 44.421 33.5544 44.405 33.8267ZM47.0246 29.6831L47.3489 30.6554C47.4115 30.8428 47.3301 31.034 47.1781 31.1294C47.1163 31.1684 47.0429 31.1917 46.9624 31.1917H35.0477C34.9672 31.1917 34.8939 31.1684 34.832 31.1295C34.68 31.0341 34.5987 30.8429 34.6612 30.6554L34.9855 29.6831C35.0709 29.4268 35.311 29.2539 35.5812 29.2539H46.4288C46.6991 29.2539 46.939 29.4268 47.0246 29.6831Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="82"
              height="82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="13" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.0176944 0 0 0 0 0.379167 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </li>
  );
}
