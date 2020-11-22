var user = firebase.auth().currentUser;
var cartRef = db.collection('users').doc(user.uid).collection('cart').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCart(doc);
    });
});


const cartList = document.querySelector('#cart-list');
// create element & render cafe
function renderCart(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    image.textContent = doc.data().image;

    li.appendChild(name);
    li.appendChild(image);

    cartList.appendChild(li);
}