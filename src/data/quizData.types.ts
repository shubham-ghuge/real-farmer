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

export type BaseFormResponse = {
  success: boolean;
  message?: string;
};

export type UserInfo = BaseFormResponse & {
  data?: {
    name: string;
    email: string;
  };
};

export type QuizDataResponse = BaseFormResponse & {
  quiz?: Quiz;
};
export type AuthFormResponse = BaseFormResponse & {
  token?: string;
  name?: string;
};

export type QuizNameAndId = BaseFormResponse & {
  listOfQuizzes?: {
    id: string;
    name: string;
  };
};

export type QuizResultResponse = BaseFormResponse & {
  quizCertificateData?:
    | [
        {
          name: string;
          score: number;
        }
      ]
    | [];
};
