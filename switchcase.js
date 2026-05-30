let num = Number(process.argv[1]);

switch (num) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("T");
    break;
  case 3:
    console.log("W");
    break;
  case 4:
    console.log("TH");
    break;

  case 5:
    console.log("F");
    break;
  
  default:
    console.log("Saturday or Sunday")
}