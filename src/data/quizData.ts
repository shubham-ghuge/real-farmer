import "./quizData.types";
import { Quiz } from "./quizData.types";

const quizData: { success: boolean; quiz: Quiz } = {
  success: true,
  quiz: {
    quizId: "1",
    quizName: "Plant Breeding and Genetics",
    questions: [
      {
        text: "Which of the following is not an insecticide? ",
        options: [
          {
            text: "Parathion",
            isRight: false,
          },
          {
            text: " Aldrin",
            isRight: false,
          },
          {
            text: "Triazines",
            isRight: true,
          },
          {
            text: "Baygon",
            isRight: false,
          },
        ],
        points: 5,
      },
      {
        text: "Which of the following is not a micro irrigation system?",
        options: [
          {
            text: "Drip Irrigation ",
            isRight: false,
          },
          {
            text: "Sprinklers ",
            isRight: false,
          },
          {
            text: "Flow drip emitters ",
            isRight: false,
          },
          {
            text: "Surface irrigation ",
            isRight: true,
          },
        ],
        points: 5,
      },
      {
        text: "Which of the following is a commercial crop?",
        options: [
          {
            text: "Paddy ",
            isRight: false,
          },
          {
            text: " Wheat",
            isRight: false,
          },
          {
            text: "Soyabean ",
            isRight: true,
          },
          {
            text: "Tur",
            isRight: false,
          },
        ],
        points: 5,
      },
      {
        text: "Agricultural census is conducted after every - ",
        options: [
          {
            text: "2 years",
            isRight: false,
          },
          {
            text: "3 years ",
            isRight: false,
          },
          {
            text: "4 years  ",
            isRight: false,
          },
          {
            text: "5 years ",
            isRight: true,
          },
        ],
        points: 5,
        note: "Agriculture Census is conducted after five years. So far ten Agriculture Censuses at five year intervals, starting from 1970-71 have been completed. The last one was in 2015-16. ",
      },
    ],
  },
};

const { quiz: quizDb } = quizData;
const { questions } = quizDb;
export { quizData, quizDb, questions };
