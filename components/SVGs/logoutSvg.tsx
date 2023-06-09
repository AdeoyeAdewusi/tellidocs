import React from "react";

const LogoutSvg = ({ active }: { active: any }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_424_5044)">
        <path
          d="M12.2996 2.1867C11.92 2.02086 11.4779 2.19415 11.312 2.57373C11.1462 2.95332 11.3195 3.39545 11.6991 3.56128C14.1394 4.62737 15.7501 7.04097 15.7501 9.75006C15.7501 13.4778 12.7276 16.5001 9.00004 16.5001C5.27197 16.5001 2.24999 13.4781 2.24999 9.75006C2.24999 7.04157 3.86016 4.62797 6.29974 3.56118C6.67925 3.39524 6.8524 2.95304 6.68643 2.57352C6.52049 2.19401 6.07829 2.02086 5.69877 2.18684C2.71789 3.49026 0.75 6.44011 0.75 9.75003C0.75 14.3065 4.44358 18.0001 9.00008 18.0001C13.5561 18.0001 17.2502 14.3063 17.2502 9.75003C17.2502 6.43933 15.2815 3.48935 12.2996 2.1867Z"
          fill={active === "white" ? "#fff" : "#1E3354"}
        />
        <path
          d="M8.99999 8.25008C9.41421 8.25008 9.74999 7.9143 9.74999 7.50008V0.750029C9.75002 0.33578 9.41421 0 8.99999 0C8.58578 0 8.25 0.33578 8.25 0.749994V7.50005C8.25 7.91426 8.58578 8.25008 8.99999 8.25008Z"
          fill={active === "white" ? "#fff" : "#1E3354"}
        />
      </g>
      <defs>
        <clipPath id="clip0_424_5044">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoutSvg;
