import doSomethingElse from "./test";
import "./styles/index.less"

console.log("Hurray");

export const doSomething = () => {
  console.log('DO SOMETHING');
}

for (let i=0; i < 10; i++) {
  doSomething();
  doSomethingElse();
}