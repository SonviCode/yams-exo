import axios from "axios";
import { PASTRY_API } from "../../constants/constants";
import { Pastry } from "../../types/pastry";
import { headerAuth } from "./global";

export const updatePastry = (pastry: Pastry) => {
  axios
    .put(PASTRY_API + pastry._id, pastry, headerAuth)
    .catch((err) => console.log(err));
};

export const getAllPastries = (
  setPastries: React.Dispatch<React.SetStateAction<Pastry[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios
    .get(PASTRY_API, headerAuth)
    .then((res) => {
      setPastries(res.data), setIsLoading(false);
    })
    .catch((err) => console.log(err));
};
