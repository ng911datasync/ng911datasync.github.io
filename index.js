var form = document.getElementById("email-form");
function handleForm(event) { 
  event.preventDefault(); 
  var xhr = new XMLHttpRequest();
  xhr.open("POST","https://ng911-emailer.herokuapp.com/sendEmail", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message:document.getElementById("message").value
  }));
} 
form.addEventListener('submit', handleForm);