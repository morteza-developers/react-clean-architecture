import { ReactNode, useMemo, useState, useEffect } from "react";
import styles from "./styles.module.css";

type StepItemType = {
  title: string;
  content?: ReactNode;
};
type Props = {
  steps: StepItemType[];
  activeStep?: number;
};

type StepProps = {
  item: StepItemType;
  onClick: () => void;
  count: number;
  active: number;
  totalItem: number;
  nextTitle?: string;
};
const StepItem = ({
  totalItem,
  count,
  item,
  active,
  nextTitle,
  onClick = () => null,
}: StepProps) => {
  const isActive = active == count - 1;
  const isPass = active >= count;
  return (
    <li
      className={`${styles.step} ${isActive ? styles.current : ""}
       ${isPass ? styles.complete : ""}`}
    >
      <div className={styles.step_label} onClick={onClick}>
        <div className={styles.counter}>
          <span className={styles.indicator}>{count}</span>
          <span className={styles.total_item}>از {totalItem}</span>
        </div>
        <span className={styles.label_text}>
          {item.title}
          {nextTitle && (
            <span className={styles.text_sronly}>بعدی : {nextTitle} </span>
          )}
        </span>
      </div>
    </li>
  );
};

const Stepper = ({ steps = [], activeStep = 0 }: Props) => {
  const [active, setActive] = useState(0);
  const totalItem = steps.length;
  const handleActive = (index: number) => {
    if (active != index) {
      setActive(index);
    }
  };

  useEffect(() => {
    if (activeStep < totalItem && activeStep >= 0) {
      setActive(activeStep);
    }
  }, [activeStep]);
  return (
    <div className={styles.main}>
      <ol className={styles.stepper}>
        {steps.map((item, index) => {
          return (
            <StepItem
              nextTitle={steps[index + 1]?.title}
              totalItem={totalItem}
              active={active}
              count={index + 1}
              item={item}
              onClick={() => handleActive(index)}
            />
          );
        })}
      </ol>

      <div>{steps[active].content}</div>
    </div>
  );
};

export default Stepper;
