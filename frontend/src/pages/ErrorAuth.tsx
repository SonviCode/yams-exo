import { useNavigate } from "react-router-dom";

const ErrorAuth = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-20">
      <h1 className="text-xl font-bold">
        Vous devez d'abord vous connecter ! Retour à la connexion :
      </h1>
      <button
        className="group relative h-12 w-48 overflow-hidden rounded bg-green-500 text-lg font-bold text-white mb-20"
        onClick={() => navigate("/")}
      >
        Connexion
      </button>
    </div>
  );
};

export default ErrorAuth;
