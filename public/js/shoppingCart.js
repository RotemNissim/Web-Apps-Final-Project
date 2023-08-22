const CART_KEY = 'myCart';

const getCart = () => {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  return cart;
};

const addToCart = (product) => {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const removeFromCart = (productId) => {
  const cart = getCart();
  const updatedCart = cart.filter((product) => product.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};

export { getCart, addToCart, removeFromCart };
