"use strict";

var cart = function cart() {
  var cartBtn = document.querySelector('.button-cart'); //console.dir(cartBtn);

  var cart = document.getElementById('modal-cart'); //console.log(cart);

  var closeBtn = cart.querySelector('.modal-close');
  cartBtn.addEventListener('click', function () {
    cart.style.display = 'flex';
  });
  closeBtn.addEventListener('click', function () {
    cart.style.display = '';
  });
};

cart();