import NavBar from "../components/NavBar";

const Loading = () => {
  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div className="items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-green-500 animate-spin">
          <div className="h-9 w-9 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
