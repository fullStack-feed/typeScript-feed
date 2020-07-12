// 数组
const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined];

// todo: 类型别名？

type User = { name: string; age: number };

class lessonFour {
  name: string;
  id: number;
}

const objectArr: lessonFour[] = [
  new lessonFour(),
  {
    name: 'lesson4',
    id: 4,
  }
]

// todo: 为什么需要元祖？

const lessonInfo: [string,string,number] = ['TS','Sup',1];

// csv应用
// hint: 这里是二维数组，表示每个item应该是满足元祖的规则
const lessonList: [string,string,number][] = [
  ['ts','sup',1],
  ['graphQL','sup',2],
  ['express','sup',3],
]