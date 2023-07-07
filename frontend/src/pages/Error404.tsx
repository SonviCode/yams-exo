import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        ERROR 404
      </p>
    </div>
  );
};

export default Error404;
