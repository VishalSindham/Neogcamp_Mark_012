var a = document.getElementById("a");
var b = document.getElementById("b");
var hypo = document.getElementById("hypo");
var hypoOutput = document.getElementById("hyporesult")


hypo.addEventListener("click",()=>{
    var inputA =a.value;
    var inputB = b.value;
    if (inputA == "" || inputB ==""){
        hypoOutput.innerHTML = "Please enter both the input's"
    }
    else {
    var sol = Math.sqrt(((inputA*inputA)+(inputB*inputB))).toFixed(2);
    hypoOutput.innerHTML = "c = " + sol;
}
})

