import React from 'react'

const Validation = (inputs) => {
  let errors={};
  let c=0;

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
  let str = inputs.fname;

  if (regex.test(str)) {
    console.log("it matched");
  } else {
    errors.fname = "Firstname is required and can't start with a digit";
    c++;
  }
  let regex2 = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
  let str2 = inputs.lname;

  if (regex2.test(str2)) {
    console.log("it matched");
  } else {
    errors.lname = "Lastname is required and can't start with a digit";
    c++;
  }
  if (!inputs.email) {
    errors.email = "Email is required.";
    c++;

  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "Invalid email.";
    c++;

  }
  let regex3 = /^([0-9]){10}$/;
  let str3 = inputs.phone;
  if (regex3.test(str3)) {
    console.log("it matched");
  } else {
    errors.phone = "Enter correct number";
    c++;
  }
  let regex4=  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  let str4=inputs.password;
  if (regex4.test(str4)) {
    console.log("it matched");
  } else {
    errors.password = "Password should have at least one Upper Case, one Digit and one Special Character";
    c++;
 
  }


  // if(inputs.cpassword ==inputs.password)
  // {
  //   errors.cpassword="Does not match";
  //   c++;
  // }
  // else
  // {
  //   console.log("it matched");
  // }
  
  let value= inputs.gender;
  if(!value){
    errors.gender="Select gender"
    c++;
}
let value2= inputs.date;
if(!value2){
  errors.date="Select date"
  c++;
}

  if(c==0){
    alert("Success! You have registered.")
   }
  return errors;
}

export default Validation;