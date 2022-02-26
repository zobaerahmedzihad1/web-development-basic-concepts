// JavaScript has 3 types of scope:

// Block scope
// Function scope
// Global scope

// Block scope
{
  var x = 2;
}
// x CAN be used here

//    local scope
// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
