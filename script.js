document.getElementById("alertButton").addEventListener("click", function() {
    alert("This is an alert!");
});

document.getElementById("confirmButton").addEventListener("click", function() {
    var result = confirm("Are you sure?");
    if (result) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
});

document.getElementById("promptButton").addEventListener("click", function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        alert("Hello, " + name + "!");
    }
});

const fruits = ["Banana", "Orange", "Apple","Mango"];
const another=["Papaya"];
let res1 = fruits.length;
document.getElementById("Length").textContent = res1;

const res2=fruits.concat(another);
document.getElementById("Concat").textContent=res2;

const res3=fruits.reverse();
document.getElementById("reverse").textContent=res3;

const res4=fruits.push("PineAplle");
document.getElementById("Push").textContent=fruits;

const res5=fruits.pop();
document.getElementById("Pop").textContent=fruits;

const res6=fruits.sort();
document.getElementById("Sort").textContent=res6;

const form = document.getElementById('myForm');
form.addEventListener('form_button', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  if (nameInput === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  if (emailInput === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Email is invalid');
  } else {
    showSuccess(emailInput);
  }

  if (passwordInput === '' || passwordInput.length<8) {
    showError(passwordInput, 'Password is required');
  } else {
    showSuccess(passwordInput);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}
