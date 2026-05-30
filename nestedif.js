    let userName = "rahul";
let password = "secret";

// 1. username & password check 
if (userName ==  "rahul" && password == "secret") {
  // user roles => based on activity / operation
  let isUserAdmin = true;
  if (isUserAdmin) {
    console.log("You are authorised to access this page")
  } else {
    console.log("nested else")
  }
  console.log("test")
} else {
  console.log("Credentials incorrect")
}