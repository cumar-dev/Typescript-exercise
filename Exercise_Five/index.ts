function generics<T>(data: T): T {
  return data;
}

const stringNames = generics<string>("omar");
console.log(stringNames);

const numbers = generics<number>(100);
console.log(numbers);

const arrayNames = generics<string[]>(["Ali", "Omar", "Ahmed"]);
console.log(arrayNames);

const userInfo = generics<{ name: string; age: number; gender: string }>({
  name: "omar",
  age: 21,
  gender: "male",
});

console.log(userInfo);

interface apiResult<T> {
  status: string;
  data: T;
}

const responseApi: apiResult<string> = {
  status: "active",
  data: "omar",
};

console.log(responseApi);

const responseApiObject: apiResult<{ id: number; name: string }> = {
  status: "completed",
  data: {
    id: 12465,
    name: "omar",
  },
};

console.log(responseApiObject);

function generic<T>(items: T[]): T[] {
  return items;
}

const names = generic(["Omar", "Ali", "Ahmed"]);
console.log(names);

const number = generic([187, 76845, 798803247]);
console.log(number[0]);

const arraysObject = generic<{
  id: number;
  name: string;
  completed: boolean;
}>([
  {
    id: 1,
    name: "Learn TypeScript",
    completed: false,
  },
  {
    id: 2,
    name: "Build a Project",
    completed: true,
  },
]);

console.log(arraysObject);
