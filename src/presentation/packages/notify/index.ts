import NotifyObserver from "./notifyObserver";
const notifyObserver = new NotifyObserver();
const toast = notifyObserver.toast;
const confirm = notifyObserver.confirm;
const closeToast = notifyObserver.closeToast;
const closeConfirm = notifyObserver.closeConfirm;
import NotifyContainer from "./components/NotifyContainer"
export { NotifyObserver, toast, confirm, closeToast, closeConfirm ,NotifyContainer };
