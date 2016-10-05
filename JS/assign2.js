

function checkComplete(){

  if (document.form.first.value == "") {
    alert("First name must be filled out");
    return false;    
  }

  if (document.form.last.value == "") {
    alert("Last name must be filled out");
    return false;
  }

  if (document.form.email.value == "") {
    alert("Email address must be filled out");
    return false;
  }

  if (document.form.cell.value == "") {
    alert("Phone number must be filled out");
    return false;
  }

  var radTest = document.getElementsByName("gender");
  var gender = -1;
  for(var i=0; i < radTest.length; i++){
  if (radTest[i].checked) {
    gender = i; 
  }
  }

  if (gender == -1){
    alert("Please select a gender.");
    return false;
  }
  
  document.getElementById("formId").innerHTML="Congratulations!\nYour form was submitted successfully."
  return false;
}

