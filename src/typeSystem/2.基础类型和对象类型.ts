// 基础类型 null, undefined, symbol, boolean, void，number,string...

const count: number = 123;
const Name: string = 'Supy';


// 对象类型：

const my: {
  name: string,
  age: number
} = {
  name: 'Su',
  age: 100
};

// 接口定义对象

interface Person {
  x: number,
  y: number
}

const Sup:Person = {
  x:3,
  y:4
}

class Person {};

// 数组的每一项保存的是xx基础类型
const numbers: number [] = [1,2,3];
const strNumber: string [] = ['1','2','3'];

// 实例的类型是Person
const sup: Person = new Person();

// 返回值为number类型的函数
const getSum: () => number = () => {
  return 1 + 2;
}