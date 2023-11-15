const myObject={
   js:"Javscript",
   cpp:"C++",
   rb:"ruby",
   swift:"swift by apple"
}

for (const key in myObject) {
   // console.log(key); // for key
}
for (const key in myObject) {
   // console.log(`${key} shortcut for ${myObject[key]}`);
}

// now for array

const arr=["arr","arr2","arr3","arr4"]
// in key they will show me index 0,1,2,3,4
for (const key in arr) {
//  console.log(arr[key]);
}

// now for map
const map=new Map()
map.set('Pak',"Pakistan")
map.set('Afg',"Afghanistan")
map.set('Fra',"France")
map.set('Pak',"Pakistan")

for (const key in map) {
//  console.log(key);
}
// do not show me output bcz map is not iterable 

