let cartItems = [
    { id: 1, name: 'Article 1', quantity: 1, price: 10, liked: false },
    { id: 2, name: 'Article 2', quantity: 2, price: 20, liked: false }
  ];
  
  function updateQuantity(itemId, action) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      if (action === 'increase') {
        cartItems[itemIndex].quantity++;
      } else if (action === 'decrease' && cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
      }
      updateCart();
    }
  }
  
  function removeItem(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    updateCart();
  }
  
  function toggleLike(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      cartItems[itemIndex].liked = !cartItems[itemIndex].liked;
      updateCart();
    }
  }
  
  function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
  
    let totalPrice = 0;
  
    cartItems.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.className = 'item';
  
      const itemName = document.createElement('span');
      itemName.className = 'item-name';
      itemName.innerText = item.name;
      itemContainer.appendChild(itemName);
  
      const increaseBtn = document.createElement('button');
      increaseBtn.className = 'quantity-btn';
      increaseBtn.innerText = '+';
      increaseBtn.addEventListener('click', () => updateQuantity(item.id, 'increase'));
      itemContainer.appendChild(increaseBtn);
  
      const quantity = document.createElement('span');
      quantity.className = 'quantity';
      quantity.innerText = item.quantity;
      itemContainer.appendChild(quantity);
  
      const decreaseBtn = document.createElement('button');
      decreaseBtn.className = 'quantity-btn';
      decreaseBtn.innerText = '-';
      decreaseBtn.addEventListener('click', () => updateQuantity(item.id, 'decrease'));
      itemContainer.appendChild(decreaseBtn);
  
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.innerText = 'Supprimer';
      removeBtn.addEventListener('click', () => removeItem(item.id));
      itemContainer.appendChild(removeBtn);
  
      const likeBtn = document.createElement('button');
      likeBtn.className = 'like-btn' + (item.liked ? ' active' : '');
      likeBtn.innerText = '❤️';
      likeBtn.addEventListener('click', () => toggleLike(item.id));
      itemContainer.appendChild(likeBtn);
  
      const price = document.createElement('span');
      price.className = 'price';
      const itemPrice = item.quantity * item.price;
      price.innerText = itemPrice + '€';
      itemContainer.appendChild(price);
  
      cartContainer.appendChild(itemContainer);
  
      totalPrice += itemPrice;
    });
  
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = 'Prix total : ' + totalPrice + '€';
  }
  updateCart();
  