"use strict";

var search = function search() {
  var input = document.querySelector('.search-block > input'); //console.log(input);

  var searchBtn = document.querySelector('.search-block > button'); //console.log(searchBtn);

  var renderGoods = function renderGoods(goods) {
    //console.log(goods);
    var goodsContainer = document.querySelector('.long-goods-list');
    goodsContainer.innerHTML = '';
    goods.forEach(function (good) {
      var goodBlock = document.createElement('div');
      goodBlock.classList.add('col-lg-3');
      goodBlock.classList.add('col-sm-6');
      goodBlock.innerHTML = "\n        <div class=\"goods-card\">\n          <span class=\"label ".concat(good.label ? null : 'd-none', "\">").concat(good.label, "</span>\n          <img src=\"db/").concat(good.img, "\" alt=\"").concat(good.name, "\" class=\"goods-image\">\n          <h3 class=\"goods-title\">").concat(good.name, "</h3>   \n          <p class=\"goods-description\">").concat(good.description, "</p>   \n          <button class=\"button goods-card-btn add-to-cart\" data-id=\"").concat(good.id, "\">\n            <span class=\"button-price\">$").concat(good.price, "</span>\n          </button>\n        </div>\n      ");
      goodsContainer.append(goodBlock);
    });
  };

  var getData = function getData(value) {
    fetch('/db/db.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      var array = data.filter(function (good) {
        return good.name.toLowerCase().includes(value.toLowerCase());
      });
      localStorage.setItem('goods', JSON.stringify(array));

      if (window.location.pathname !== '/goods.html') {
        window.location.href = '/goods.html';
      } else {
        renderGoods(array);
      }
    });
  };

  searchBtn.addEventListener('click', function () {
    console.log();
    getData(input.value);
  });
};

search();