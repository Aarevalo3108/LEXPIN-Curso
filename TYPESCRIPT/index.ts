let fname : string = "Angel";
let result : number = 0;
let isTrue : boolean = true;
let names : string[] = ["Angel","Manuel"];
let x : any = 10;
let z: null = null;
let y: undefined = undefined;
let graph: [x: number, y: number] = [10,20];
let object: object = {name:"Angel", age:20};
const car: {name: string,color: string, year: number,mileage?: number} = {
  name: "Toyota",
  color: "red",
  year: 2020,
  mileage: 0
}

type CarYear = number
type CarName = string
type CarModel = string
type Car = {
  name: CarName,
  model: CarModel,
  year: CarYear
}

const CarYear: CarYear = 2020
const CarName: CarName = "Toyota"
const CarModel: CarModel = "Corolla"
const Car: Car = {
  name: CarName,
  model: CarModel,
  year: CarYear
}

// Datos variables
function printStatusCode(code: number | string): void {
  console.log(`The status code is: ${code}`)
}

// HTML element
const element: Node | null = document.querySelector('#app')!;

// Void function
function log(message: string | number): void {
  console.log(message);
}