
var reverseString = function(str){
  var answer = "";
  for (var i = str.length -1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}

module.exports = reverseString;