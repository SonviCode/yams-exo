import axios from "axios";
import { PARTICIPANT_API } from "../../constants/constants";
import { User } from "../../types/user";
import { Pastry } from "../../types/pastry";
import { Participant } from "../../types/participant";
import { headerAuth } from "./global";

export const getAllParticipants = (
  setParticipants: React.Dispatch<React.SetStateAction<Participant[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios
    .get(PARTICIPANT_API, headerAuth)
    .then((res) => {
      setParticipants(res.data), setIsLoading(false);
    })
    .catch((err) => console.log(err));
};

export const getParticipantByUser = (
  user: User,
  setParticipant: React.Dispatch<React.SetStateAction<Participant | undefined>>
) => {
  axios
    .get(PARTICIPANT_API + JSON.stringify(user), headerAuth)
    .then((res) => {
      setParticipant(res.data);
    })
    .catch((err) => console.log(err));
};

export const addParticipant = (
  user: User,
  pastry: Pastry[],
  winner: boolean,
  setParticipant:React.Dispatch<React.SetStateAction<Participant | undefined>>
) => {
  axios
    .post(PARTICIPANT_API, { user, pastry, winner }, headerAuth)
    .then((res) => {
      setParticipant(res.data);
    })
    .catch((err) => console.log(err));
};
