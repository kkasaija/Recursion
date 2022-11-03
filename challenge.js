module.exports = function sum(number) {
  // write your code here
  function sum(num) {
    if(num > 0) {
      return num + sum(num - 1);
    }
    else {
      return num;
    }
  }
const result = sum(number);
return result;
}
