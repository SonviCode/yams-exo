import ErrorAuth from "../pages/ErrorAuth";
import Loading from "../pages/Loading";

const useDisplay = (isLoading: boolean, isError: boolean) => {
  console.log(isLoading);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorAuth />;
  }
};

export default useDisplay;
