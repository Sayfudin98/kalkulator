function hitung() {
  var angka1 = parseInt(document.getElementById("angka1").value);
  var angka2 = parseInt(document.getElementById("angka2").value);
  var operator= document.getElementById("operator").value;
  var hasil;
  
  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      hasil = angka1 / angka2;
      break;
      default:
      hasil = 0;
      
  }
  
  // hasil
  document.getElementById("hasil").innerHTML = hasil;
}