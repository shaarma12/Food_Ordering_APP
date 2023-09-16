import { isRouteErrorResponse, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div>
        <h2>
          {error.status}! {error.statusText}
        </h2>
        <hr />
        <h3>Error! Something Went Wrong.</h3>
      </div>
    </>
  );
};
export default Error;
