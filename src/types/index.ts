export type Progress = {
  current: number;
  sum: number;
  percent: number;
  image: string;
};

export type Record = {
  image: string;
  title: string;
  category: string;
};

export type ExcerciseRecord = {
  title: string;
  enegy: string;
  time: string;
};

export type Excercise = {
  date: string;
  records: ExcerciseRecord[];
};

export type DiaryRecord = {
  date: string;
  time: string;
  content: string;
};

export type ColumnRecord = {
  date: string;
  time: string;
  content: string;
  category: string;
  image: string;
  tags: string[];
};
