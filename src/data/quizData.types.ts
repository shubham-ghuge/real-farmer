export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  text: string;
  options: Option[];
  points: number;
  note?: string;
};

export type Quiz = {
  quizId: string;
  quizName: string;
  question: Question[];
};

export type QuizData = {
  quizDb: Quiz[];
};
