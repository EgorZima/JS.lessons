function Singleton(value) {
 
  this.num = value;

  if (!Singleton.instance) {
     Singleton.instance = this;
  }
   return Singleton.instance; 
}


let obj = new Singleton('fd');
let obj1 = new Singleton(2);
let obj2 = new Singleton(3);


console.log(obj === obj1)
console.log(obj1.num)
console.log(obj2.num)
