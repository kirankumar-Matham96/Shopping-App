import { ToastContainer, toast } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

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
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <ToastContainer position="top-right" closeOnClick draggable />
    </ErrorBoundary>
  );
};
