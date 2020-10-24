firebase.auth().onAuthStateChanged(user =>{
  	if (user) {
  		console.log('User Logged In: ', user);
  		setupUI(user);
  	}
  	else{
  		console.log('User Logged Out');
  		setupUI();
  	}
});