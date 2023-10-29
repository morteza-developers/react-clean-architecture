import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";

function useLocationEffect(callback: (l: Location) => void = () => null) {
  const location = useLocation();

  useEffect(() => {
    callback(location);
  }, [location]);
}

export default useLocationEffect;
