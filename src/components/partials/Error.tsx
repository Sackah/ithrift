import { ErrorProps } from "../../types/types";

const Error = (props: ErrorProps) => {
  return <div className="error-page">{props.message}</div>;
};

export default Error;
