function printNumbers(n, current) {
    
    if (current > n) {
      return;
    }

    var numberBox = document.createElement("div");
    numberBox.className = "number-box";
    numberBox.innerText = current;
    
    document.getElementById("output").appendChild(numberBox);

    printNumbers(n, current + 1);
  }

  function startPrinting() {
    
    var n = parseInt(document.getElementById("numberInput").value);
 
    document.getElementById("output").innerHTML = "";

    if (!isNaN(n) && n > 0) {
      printNumbers(n, 1); 
    } else {
      alert("Enter a valid positive number."); 
    }
  }