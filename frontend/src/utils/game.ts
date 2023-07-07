import { Participant } from "../types/participant";
import { Pastry } from "../types/pastry";
import { User } from "../types/user";
import { addParticipant } from "./api/participants";
import { updatePastry } from "./api/pastries";

export const startGame = (
  randomNumber: number[],
  setRandomNumber: React.Dispatch<React.SetStateAction<number[]>>,
  pastries: Pastry[],
  user: User,
  setParticipant:React.Dispatch<React.SetStateAction<Participant | undefined>>
) => {
  if (randomNumber.length > 1) {
    return;
  }

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const result = [];

  for (let i = 0; i < 5; i++) {
    const random = getRandomNumber(1, 6);
    result.push(random);
  }

  setRandomNumber(result);
  checkIfWin(result, pastries, user, setParticipant);
};

export const checkIfWin = (
  randomNumber: number[],
  pastries: Pastry[],
  user: User,
  setParticipant:React.Dispatch<React.SetStateAction<Participant | undefined>>
) => {
  const firstNumber = randomNumber[0];
  const pastryWon: Pastry[] = [];
  let nbPastry = 0;
  const yams = checkYams(randomNumber, firstNumber);
  const square = checkSquare(randomNumber, firstNumber);
  const double = checkDouble(randomNumber);

  const win = yams || square || double;

  if (win) {
    yams
      ? (nbPastry = 3)
      : square
      ? (nbPastry = 2)
      : double
      ? (nbPastry = 1)
      : 0;

    for (let i = 0; i < nbPastry; i++) {
      pastryWon.push(pastries[Math.floor(Math.random() * pastries.length)]);
    }

    pastryWon.forEach((pastry) => {
      updatePastry(pastry);
    });
  }

  addParticipant(user, pastryWon, win, setParticipant);
};

const checkYams = (randomNumber: number[], firstNumber: number) => {
  let yams = true;
  for (let i = 1; i < randomNumber.length; i++) {
    if (randomNumber[i] !== firstNumber) {
      yams = false;
    }
  }

  return yams;
};

const checkSquare = (randomNumber: number[], firstNumber: number) => {
  let countSquare = 0;
  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === firstNumber) {
      countSquare++;
    }
  }
  return countSquare == 4;
};

const checkDouble = (randomNumber: number[]) => {
  const countMap: { [key: string]: number } = {};
  for (let i = 0; i < randomNumber.length; i++) {
    const number: number = randomNumber[i];
    countMap[number] = countMap[number] ? countMap[number] + 1 : 1;
  }

  let pairCount = 0;
  for (const number in countMap) {
    if (countMap[number] === 2 || countMap[number] === 3) {
      pairCount++;
    }
  }
  return pairCount >= 2;
};
