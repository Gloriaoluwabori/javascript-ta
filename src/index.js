// complete the function
function prime (num) {
  // code goes here
if
(num === 1){
  console.log(`${num} is not a prime number. `)
}else if(num > 1){
  for ( let no= 2; no < num; no++){
    if (num % no === 0){
      console.log(`${num} is not a prime number.`);
    }else{
      console.log(`${num} is a prime number.`)
    }

  }
}
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
