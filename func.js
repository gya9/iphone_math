/*==== 関数：結果を計算して表示 ====*/
function setResult(){

/*---- セレクトボックスの値を取得 ----*/
var model_chosen = document.myForm.model_chosen;
var options = model_chosen.options;
var model;
for( var i=0 ; i<options.length ; i++ ){
    if( options[i].selected ){
    model = options[i].value;
    break;
    }
}

/*---- セレクトボックスの値を取得 ----*/
var axis_chosen = document.myForm.axis_chosen;
var options = axis_chosen.options;
var axis;
for( var i=0 ; i<options.length ; i++ ){
    if( options[i].selected ){
    axis = options[i].value;
    break;
    }
}

/*---- テキストボックスの値を取得 ----*/
var myText = document.myForm.myText;
var ratio = parseFloat(myText.value);

/*---- iphoneの長さを決定 ----*/
var length;
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

/*---- 結果を返す ----*/
document.getElementById("length").innerHTML = length;
document.getElementById("ratio").innerHTML = ratio;
document.getElementById("result").innerHTML = length * ratio;

return;
}