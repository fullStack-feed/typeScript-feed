let lessonThree: number;

lessonThree = 3;

const lessonNumber = 3;
const prevLessonNumber = 2;

const total = lessonThree + prevLessonNumber;



function getTotal(lessonNumber: number, prevLessonNumber: number) {
  return lessonNumber + prevLessonNumber;
}

const _total = getTotal(1,2);

// 函数解构定义类型

function defArgs ({first} : {first : number})  {
  return first;
}
defArgs({first: 1});
