
function setResult(){

/*---- セレクトボックスの値を取得 ----*/
var model = document.model.select
var axis = document.axis.select;
var ratio = parseFloat(document.ratio.value);

var length = 0;
if (axis == "height") {
  if (model == "6s") {length = 13.83;}
  else if (model == "6sP") {length = 15.82;}
  else if (model == "7") {length = 13.83;}
  else if (model == "7P") {length = 15.82;}
  else if (model == "8") {length = 13.84;}
  else if (model == "8P") {length = 15.84;}
  else if (model == "X") {length = 14.36;}
  else if (model == "XR") {length = 15.09;}
  else if (model == "XS") {length = 14.36;}
  else if (model == "XSM") {length = 15.75;}
}
else if (axis == "width") {
  if (model == "6s") {length = 6.71;}
  else if (model == "6sP") {length = 7.79;}
  else if (model == "7") {length = 6.71;}
  else if (model == "7P") {length = 7.79;}
  else if (model == "8") {length = 6.73;}
  else if (model == "8P") {length = 7.81;}
  else if (model == "X") {length = 7.09;}
  else if (model == "XR") {length = 7.57;}
  else if (model == "XS") {length = 7.09;}
  else if (model == "XSM") {length = 7.74;}
}

/*---- 結果を表示 ----*/
document.getElementById("length").innerHTML
= length
document.getElementById("ratio").innerHTML
= ratio
document.getElementById("result").innerHTML
= length * ratio

return;
}
