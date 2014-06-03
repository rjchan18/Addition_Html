function add(){
    var y = document.getElementById("num1").value;
    var z = document.getElementById("num2").value;
    var x = +y + +z;
    document.getElementById("sum").innerHTML = "The answer is equal to " + x + ".";
} 
