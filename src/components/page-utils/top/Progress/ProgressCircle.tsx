type Props = {
  percentage?: number;
  className?: string;
};

const size = 200;

const ProgressCircle = ({ percentage = 100, className }: Props) => {
  const radius = size / 2 - 10;
  const circumference = 3.14 * radius * 2;
  const percentageStr = Math.round(circumference * ((100 - percentage) / 100)) + 'px';

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`-${size * 0.125} -${size * 0.125} ${size * 1.25} ${size * 1.25}`}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      style={{ rotate: '-90deg' }}
    >
      <circle
        r={`${size / 2 - 10}`}
        cx={`${size / 2}`}
        cy={`${size / 2}`}
        stroke='#ffffff'
        strokeWidth='3px'
        strokeLinecap='round'
        strokeDashoffset={percentageStr}
        fill='transparent'
        strokeDasharray={circumference + 'px'}
      ></circle>
    </svg>
  );
};

export default ProgressCircle;
