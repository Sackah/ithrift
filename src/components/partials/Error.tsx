import { ErrorProps } from "../../types/types";

/**
 * Renders a full page with an error message passed as props
 * @param {string} props.message - any error message to be displayed
 * @returns {JSX.Element}
 */

const Error = (props: ErrorProps) => {
  return <div className="error-page">{props.message}</div>;
};

export default Error;
