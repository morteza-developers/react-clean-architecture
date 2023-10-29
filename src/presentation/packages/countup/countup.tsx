import { useCountUp } from "./useCountUp";
import type { Props } from "./CountUp.type";

export const CountUp: React.FC<Props> = ({ children, ...props }) => {
  const countUpProps = useCountUp(props);

  return typeof children === "function"
    ? children(countUpProps)
    : countUpProps.value;
};

CountUp.displayName = "CountUp";
