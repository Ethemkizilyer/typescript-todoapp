interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

interface ITodoList{
    todo:TodoType[],
}

type AddFn = (text: string) => void;