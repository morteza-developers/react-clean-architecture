export const registerServiceWorker = () => {
  if (!window.navigator.serviceWorker) {
    console.error(
      "%c Service workers are not supported.",
      "color:  #E8271B;font-size: 18px;font-weight:600"
    );
    return null;
  }
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "%c you are development mode and service worker is not registered",
      "color: #ff822d;font-size: 18px;font-weight:600"
    );
    return null;
  }

  navigator.serviceWorker
    .register("/sw.js")
    .then(function (reg) {
      console.log(
        "%c Service workers Registration succeeded. Scope is " + reg.scope,
        "color: #00A707;font-weight:600"
      );
    })
    .catch(function (error) {
      console.error("Service workers Registration failed with ", error);
    });
};
