interface PropsTypes {
  width?: number;
  height?: number;
  className?: string;
}

const DarkBlueDot2Icon = (props: PropsTypes) => {
  const { width = 24, height = 24, className } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10.5" stroke="#20477C" strokeWidth="3" />
      <circle cx="12" cy="12.5" r="6" fill="#20477C" />
    </svg>
  );
};

export default DarkBlueDot2Icon;
