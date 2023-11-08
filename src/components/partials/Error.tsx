type ErrorProps = {
  message: string;
};

const Error = (props: ErrorProps) => {
  return <div className="error-page">{props.message}</div>;
};

export default Error;
