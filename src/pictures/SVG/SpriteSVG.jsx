import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'heart':
      return (
        <svg //для зміни кольору використовувати fill (fill="black")
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path //для зміни кольору використовувати (stroke="black")
            d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1706 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.795 3.4575L9 4.2525L8.205 3.4575C7.43123 2.68373 6.38177 2.24903 5.2875 2.24903C4.19322 2.24903 3.14377 2.68373 2.37 3.4575C1.59623 4.23127 1.16153 5.28072 1.16153 6.375C1.16153 7.46927 1.59623 8.51873 2.37 9.2925L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3173 8.45461 16.5247 7.95402C16.7321 7.45342 16.8389 6.91687 16.8389 6.375C16.8389 5.83313 16.7321 5.29658 16.5247 4.79598C16.3173 4.29539 16.0132 3.84057 15.63 3.4575Z"
            strokeOpacity="0.8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'close':
      return (
        //fill = "red"
        <svg id="icon-x" viewBox="0 0 32 32" stroke="red">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M24 8l-16 16"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M8 8l16 16"
          ></path>
        </svg>
      );
    case 'burger':
      return (
        <svg
          id="icon-burger"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          stroke="currentColor"
        >
          <path
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2.56"
            d="M28.8 16h-25.6"
          ></path>
          <path
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2.56"
            d="M28.8 6.4h-25.6"
          ></path>
          <path
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2.56"
            d="M3.2 25.6h25.6"
          ></path>
        </svg>
      );
    default:
      return 'SVG not found';
  }
};
