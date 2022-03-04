const cart = () => {
  const cartBtn = document.querySelector('.button-cart');
  //console.dir(cartBtn);
  const cart = document.getElementById('modal-cart');
  //console.log(cart);
  const closeBtn = cart.querySelector('.modal-close')

  cartBtn.addEventListener('click', () => {
    cart.style.display = 'flex';
  })

  closeBtn.addEventListener('click', () => {
    cart.style.display = '';
  })
}

cart();