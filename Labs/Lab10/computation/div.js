let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

for ( var i = 0; i < objects.length; i++) {
    var curObject = objects[i];

    var newEl = document.createElement("div");

    newEl.innerHTML = "color:" + curObject.color + " height:" + curObject.height + " width:" + curObject.width;

    document.body.appendChild(newEl);
}