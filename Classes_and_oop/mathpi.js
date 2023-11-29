// object related
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter.value);

const obj = {
  name: "name",
  price: 123,
  isAvailable: true,
  orderChai: function () {
    console.log("order chai");
  },
};

Object.defineProperty(obj, "name", {
  //   writable: false,
  enumerable: false, // not iterable the name into loop => name
});
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// iteration object

for (let [key, value] of Object.entries(obj)) {
  if (typeof value != "function") {
    console.log(key, value);
  }
}

// Math.PI = 5;
// console.log(Math.PI);
