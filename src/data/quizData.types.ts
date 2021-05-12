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
  question: Question[];
};
