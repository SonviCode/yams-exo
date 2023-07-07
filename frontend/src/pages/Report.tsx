import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getAllParticipants } from "../utils/api/participants";
import { Participant } from "../types/participant";
import { handleDate } from "../utils/report";
import { Pastry } from "../types/pastry";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReportSkeleton from "../components/skeleton/ReportSkeleton";

const Report = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllParticipants(setParticipants, setIsLoading);
  }, []);

  return (
    <>
      <NavBar />
      <div className="px-20 py-10">
        <h1 className="text-3xl uppercase mb-10 text-center">
          Statistiques des participants{" "}
        </h1>
        <div>
          {!isLoading ? (
            <>
              <h2 className="text-xl mb-10 ">
                Total des participants :{" "}
                <span className="ml-4 font-bold">{participants.length}</span>
              </h2>
              <h2 className="text-xl underline mb-5 ">
                Participants ayant gagné :
              </h2>
            </>
          ) : (
            <>
              <Skeleton className="mb-10" />
              <Skeleton className="mb-5" />
            </>
          )}
          <div className="flex flex-col gap-2">
            {isLoading && <ReportSkeleton />}
            {participants
              .sort((a, b) => {
                return (
                  new Date(b.createdDate).valueOf() -
                  new Date(a.createdDate).valueOf()
                );
              })
              .filter((part: Participant) => part.winner)
              .map((part: Participant, index: React.Key) => (
                <div
                  key={index}
                  className="border rounded p-5 flex pl-20 gap-28 shadow-md text-left"
                >
                  <div>
                    <h3>
                      {part.user.firstname || <Skeleton />} {part.user.name}
                    </h3>
                    <p className="italic">{handleDate(part.createdDate)}</p>
                  </div>
                  <div>
                    {part.pastry.map((pastry: Pastry, index: React.Key) => (
                      <p className="" key={index}>
                        🍰 {pastry.name || <Skeleton />}
                      </p>
                    ))}
                  </div>
                </div>
              )) || <Skeleton />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
