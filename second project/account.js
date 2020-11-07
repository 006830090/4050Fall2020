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

//auth state change
firebase.auth().onAuthStateChanged(user =>{
  	if (user) {
  		console.log('User Logged In: ', user);
  		window.location = 'main.html';
  	}
  	else{
  		console.log('User Logged Out');
  	}
});

