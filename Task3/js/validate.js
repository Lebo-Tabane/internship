function validateform (form)
{
    var firstname = document.preScreening.firstname.value;
    var lastname = document.preScreening.lastname.value;
    var tel = document.preScreening.tel.value;
    var id = document.preScreening.id.value;
    var email = document.preScreening.email.value;

    //email address format
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    var address1 = document.preScreening.address1.value;
    var address2 = document.preScreening.address2.value;
    var city = document.preScreening.city.value;
    var state = document.preScreening.state.value;
    var zip = document.preScreening.zip.value;
    var textarea = document.preScreening.textarea.value;

    //checks the date format 
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var group = document.preScreening.checkbox;

if (firstname == null || firstname == "") 
{
  alert("name required, please provide details");
  return false;
}
else if (lastname == null || lastname == "")
{
  alert("surname required, please provide details");
  return false;
}

else if (tel == null || tel == "")
{
  alert("Phone number required, please provide details");
  return false;
}

//phone numbers must not be less or more than 10
else if (tel.length <10) 
{ 
  alert("Phone number must be 10 numbers");
  return false;
}

else if (id == null || id == "") 
{
  alert("ID number required, please provide details");
  return false;
}

//id number must not be less or more than 13
else if (id.length <13) 
{
  alert("ID number must be 13 numbers");
  return false;
}

else if (email == null || email == "") 
{
  alert("email required, please provide details");
  return false;
}

//checks if the email is a valid format 
else if (email.value.match(mailformat)) 
{
  alert("Valid email address");
  return false;
}

else if (address1 == null || address1 == "") 
{
  alert("Address required, please provide details");
  return false;
}

else if (address2 == null || address2 == "") 
{
  alert("Address required, please provide details");
  return false;
}

else if (city == null || city == "") 
{
  alert("City required, please provide details");
  return false;
}

else if (zip == null || zip == "") 
{
  alert("Zip required, please provide details");
  return false;
}

else if (document.getElementById("textarea").value == "") 
{
  alert("Textarea required, please provide details");
  document.getElementById("textarea").focus();
  return false;
}

else if (isDateSelected() === false) 
{
alert("Please enter a valid date");
preScreening.date.focus();
return false;
} 

for (var i=0; i<group.length; i++) 
{
  if (group[i].checked)
  break;
  }
  if (i==group.length)
  return alert("No Checkbox is checked");
  alert("Radio Button " + (i+1) + " is checked.");
  }


