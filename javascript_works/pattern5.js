
let str = "";
for (let row = 1; row <= 4; row++) {
  for (let col = 0; col < row; col++) {
    str+="*";
  }
  str+="\n";
}
console.log(str);