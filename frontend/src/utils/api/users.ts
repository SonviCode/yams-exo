import axios from "axios";
import { USER_API } from "../../constants/constants";
import { User } from "../../types/user";
import { getParticipantByUser } from "./participants";
import { Participant } from "../../types/participant";

export const signUpUser = (userData: User) => {
  axios
    .post(`${USER_API}signup`, userData)
    .then(() => {
      loginUser(userData.email, userData.password);
    })
    .catch((err) => console.log(err));
};

export const loginUser = (email: string, password: string) => {
  axios
    .post(`${USER_API}login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("userId", res.data.userId),
        localStorage.setItem("token", `Bearer ${res.data.token}`);

      window.location.href = "/game";
    })
    .catch((err) => console.log(err));
};

export const getUserInfo = (
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setParticipant: React.Dispatch<React.SetStateAction<Participant | undefined>>
) => {
  axios
    .get(`${USER_API}user/${localStorage.getItem("userId")}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setUserData(res.data),
        // setIsLoading(false),
        getParticipantByUser(res.data, setParticipant);
    })
    .catch(() => (setIsError(true)));
};
