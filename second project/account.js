//account slider
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".account-container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// signup
const signupForm = document.querySelector('#sign-up-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['newEmail'].value;
  const password = signupForm['newPassword'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      company: signupForm['newCompany'].value,
      number: signupForm['newNumber'].value
    });
  }).then(() => {
  	window.location = 'main.html';
  });
});

// login
const loginForm = document.querySelector('#sign-in-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['userEmail'].value;
  const password = loginForm['userPassword'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    window.location = 'main.html';
  });

});

