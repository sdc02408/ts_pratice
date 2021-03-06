let count = 0;
count += 1;

const message: string = 'hellog world';
const done: boolean = true;

const numbers: number[] = [1,3,3];
const messages: string[] = ['hellog','world'];



let mightBeUndefinded: string | undefined = undefined;
let nullableNumber: number | null = 19;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow'

function sum(x: number,y: number): number {
  return x + y;
}

const rusult = sum(1,2,);

function sumArray(numbers: number[]): number{
  return numbers.reduce((acc, current) => acc + current , 0);
}

const total = sumArray([1,2,3,4,5])
console.log(total)

function returnNothying(): string | number {
  console.log('ddddd')
  return 4;

}
returnNothying();

 interface Person {
   name: string;
   age?: number;

 }

 interface Developer extends Person {

   skills: string[];
 }

 const person: Person = {
   name: 'kim',
   age:20,
 }
 
 const expert: Developer = {
   name: 'yang',
   age:23,
   skills:['yang','chan', 'seok']
 }

 // interface 나 type allias를 써라

 //제네릭 여러종류의 타입을 맞출때 써 <T>

 function merge<A,B>(a: A, b:B){
  return{
    ...a,
    ...b
  }
 }

const merged = merge({foo: 1}, {bar: 2})
// merged.bar나 merged.foo 가 나오면서 자료형을 유추할 수 있어 
//w제넥릭을 쓰면 type을 지켜줄 수 있아
function wrap<T>(param: T ){
  return{
    param
  }
}

const wrapped = wrap(100)

interface Items<T, V>{
  list: T[];
  value: V
} 

const items: Items<number, string> = {
  list:[1,2,3],
  value: 'abc'
}

type Items1<T> = {
  list1: T[];
}

const items1: Items1<number> = {
  list1: [1,2,3]
}

//class에서 generic
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;

  }

  enqueue(item: T) {
    this.list.push(item)
  }

  dequeue(){
    return this.list.shift();
  }
}


const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

while(queue.length > 0){
  console.log(queue.dequeue())
}