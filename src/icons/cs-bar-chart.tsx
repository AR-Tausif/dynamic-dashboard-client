import { FC } from "react";

interface IconProps {
  className?: "stirng";
  width?: number | string;
  height?: number | string;
  fill?: string;
}
export const CSBarChart: FC<IconProps> = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
    >
      <path
        fill="#ff7500"
        d="M6 23H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1"
        opacity={0.25}
      ></path>
      <path
        fill="#ff7500"
        d="M14 23h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1"
      ></path>
      <path
        fill="#ff7500"
        d="M22 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1"
        opacity={0.8}
      ></path>
    </svg>
  );
};
