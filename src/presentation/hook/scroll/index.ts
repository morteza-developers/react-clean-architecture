const { useEffect, useRef, useState } = require("react");

const useArriveScroll = ({
  from = "top",
  triggerAction = 1.5,
  disableIsArrived = false,
} = {}) => {
  const scrollElementRef = useRef(null);
  const onArriveRef = useRef(null);
  const [isArrived, setIsArrived] = useState(false);
  const lengthTrigger = window?.innerHeight / triggerAction || 400;
  const scrollEvent = () => {
    if (!scrollElementRef.current) return;
    if (
      scrollElementRef.current?.getBoundingClientRect()[from] < lengthTrigger
    ) {
      !disableIsArrived && setIsArrived(true);
      onArriveRef.current && onArriveRef.current();
      document.removeEventListener("scroll", scrollEvent);
    }
  };

  const onArrive = (callBAck: () => void): void => {
    if (typeof callBAck == "function") {
      onArriveRef.current = callBAck;
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
    return () => document.removeEventListener("scroll", scrollEvent);
  }, []);

  return { ref: scrollElementRef, isArrived, onArrive: onArrive };
};

export default useArriveScroll;
