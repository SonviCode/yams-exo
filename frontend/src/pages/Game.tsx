import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getUserInfo } from "../utils/api/users";
import ErrorAuth from "./ErrorAuth";
import { startGame } from "../utils/game";
import { User } from "../types/user";
import { useNavigate } from "react-router-dom";
import { Pastry } from "../types/pastry";
import { getAllPastries } from "../utils/api/pastries";
import { Participant } from "../types/participant";
import GameSkeleton from "../components/skeleton/GameSkeleton";
// import useDisplay from "../hooks/useDisplay";

const Game = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number[]>([]);
  const [pastries, setPastries] = useState<Pastry[]>([]);

  const [userData, setUserData] = useState<User>();
  const [participant, setParticipant] = useState<Participant>();

  console.log(participant);

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(setUserData, setIsError, setParticipant);
    getAllPastries(setPastries, setIsLoading);
  }, []);

  // useDisplay(isLoading, isError);

  if (isError) {
    return <ErrorAuth />;
  }

  return (
    <>
      <NavBar />
      <div className="p-10 text-center">
        <h1 className="font-bold text-3xl">Chocol'Yams : Le jeux !</h1>
        {participant?.canPlay && (
          <h2>
            C'est à ton tour {userData?.firstname} ! Attention, tu ne peux jouer
            qu'une fois
          </h2>
        )}
      </div>

      <div className="flex  flex-col">
        <ul className="px-20 font-bold italic text-xl flex gap-20 justify-between">
          <li>Yams : 🍰 🍰 🍰</li>
          <li>Carré : 🍰 🍰</li>
          <li>Double paire : 🍰 </li>
        </ul>
        {isLoading ? (
          <GameSkeleton />
        ) : (
          <>
            <div className="flex flex-col px-20 pt-10">
              <h3 className="font-bold text-xl underline">
                Liste des patisseries à gagner{" "}
              </h3>

              {pastries.map((pastry: Pastry, index: React.Key) => (
                <ul key={index} className="flex list-disc">
                  <li>
                    <p className=" mr-5">
                      {pastry.name} : {pastry.number}
                    </p>
                  </li>
                </ul>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center">
              {userData && (
                <button
                  disabled={!participant?.canPlay}
                  onClick={() =>
                    startGame(
                      randomNumber,
                      setRandomNumber,
                      pastries,
                      userData,
                      setParticipant
                    )
                  }
                  className="group relative h-12 w-48 overflow-hidden rounded bg-green-500 text-lg font-bold text-white mb-5 disabled:cursor-not-allowed disabled:bg-gray-200"
                >
                  Jouer!
                </button>
              )}
            </div>
            <div className="flex gap-5 justify-center ">
              {randomNumber.map((number: number, index: React.Key) => (
                <div key={index} className="border p-10 rounded bg-gray-100">
                  <p>{number}</p>
                </div>
              ))}
            </div>
            {!participant?.canPlay && (
              <>
                {randomNumber.length === 0 && (
                  <p className="text-center">
                    Tu as déjà jouer ! Mais tu peux toujours suivre l'évolution
                    des gagnants{" "}
                    <span
                      className="cursor-pointer underline italic text-blue-500"
                      onClick={() => navigate("/report")}
                    >
                      ici
                    </span>
                  </p>
                )}
                <div className="px-20 mb-20 pt-10">
                  <h2 className="text-2xl underline mb-5">Résultats :</h2>
                  {participant?.pastry.length === 0 ? (
                    <p className="text-xl">
                      Oh non{" "}
                      <span className="italic font-bold">
                        {participant?.user.firstname}
                      </span>
                      , Tu as perdu :( mais tu peux toujours venir au magasin
                      acheter de bonnes patisseries !
                    </p>
                  ) : (
                    <>
                      <p className="text-xl">
                        Bravo {participant?.user.firstname}, Tu as gagné !
                      </p>
                      <ul>Voici ce que tu as gagné : </ul>
                      {participant?.pastry.map(
                        (pastry: Pastry, i: React.Key) => (
                          <li key={i}>🍰 {pastry.name}</li>
                        )
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Game;
