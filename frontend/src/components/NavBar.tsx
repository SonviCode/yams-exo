import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500">
            <div className="container px-4 mx-auto flex  items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                  Chocol'Yams
                </p>
              </div>
              <div
                className={"lg:flex flex-grow items-center flex"}
                id="example-navbar-info"
              >
                <ul className="flex flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <button
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      onClick={() => navigate("/game")}
                    >
                      Jeux
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      onClick={() => navigate("/report")}
                    >
                      Statistiques
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
