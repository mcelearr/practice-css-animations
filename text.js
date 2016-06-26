(function(){
  var para = document.createElement("p");
  var text = document.createTextNode("This is how it all ends");
  var pTextNode = para.appendChild(text);
  var col1 = document.getElementById("column-left");
  var col2 = document.getElementById("column-right");

  for (var i = 0; i < 28; i ++) {
    if (i % 2 === 0) {
      col1.appendChild(pTextNode);
    } else {
      col2.appendChild(pTextNode);
    }
    i++;
  }

})()
