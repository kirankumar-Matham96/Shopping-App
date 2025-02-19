import { ToastContainer, toast } from "react-toastify";

// functions to display different toast notification
export const notifySuccess = (message) => toast.success(message);
export const notifyInfo = (message) => toast.info(message);
export const notifyDanger = (message) => toast.error(message);
export const notifyWarning = (message) => toast.warn(message);

/**
 * JSX component for displaying toast notifications.
 * @returns JSX - ToastContainer component
 */
export const Notification = () => {
  return (
    <div>
      <ToastContainer position="top-right" closeOnClick draggable />
    </div>
  );
};
