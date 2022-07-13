// Form Validation

function contactClick(event) {
  event.preventDefault();
  var firstName = document.querySelector(".firstname").value;
  var lastName = document.querySelector(".lastname").value;
  var email = document.getElementById("floatingEmail").value;

  if (firstName.length < 2) {
    alert("Your first name is too short, Let's try agian!");
  } else if (lastName.length < 2) {
    alert("Your last name is too short, Let's try agian!");
  } else if (email.indexOf("@") == -1) {
    alert("Please enter valid email!");
  } else if (email.indexOf(".") == -1) {
    alert("Please enter valid email!");
  } else {
    alert("Form Sent Succsesfuly!");
  }
}
