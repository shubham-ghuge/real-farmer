export type OptionType = {
  text: string;
  isSelected?: boolean;
  isRight: boolean;
};

export type QuestionType = {
  text: string;
  options: OptionType[];
  points: number;
  note?: string;
};

export type Quiz = {
  quizId: string;
  quizName: string;
  questions: QuestionType[];
};

export type QuizDataType = {
  quizDb: Quiz;
};
