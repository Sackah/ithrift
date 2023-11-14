/**
 * Renders a full page with a loading circle for use with pending states
 * @returns {JSX.Element}
 */

const Loading = () => {
  return (
    <div className="loading-page">
      <i className="fa-solid fa-spinner fa-spin"></i>
    </div>
  );
};

export default Loading;
