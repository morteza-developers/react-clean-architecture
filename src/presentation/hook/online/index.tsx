import { useSyncExternalStore } from "react";

const useOnline = () => {
  const getSnapShot = () => navigator.onLine;

  const subscribe = (callback: () => void) => {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);

    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  };
  const isOnline = useSyncExternalStore(subscribe, getSnapShot);
  return isOnline;
};

export default useOnline;
