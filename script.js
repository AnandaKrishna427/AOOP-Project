// Vendor Registration
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const vendor = {
    name: document.getElementById('vendorName').value,
    mobile: document.getElementById('vendorMobile').value,
    address: document.getElementById('vendorAddress').value,
    category: document.getElementById('vendorCategory').value
  };

  console.log('Vendor Registered:', vendor);
  alert('Vendor registered successfully!');
  registerForm.reset();
});

// Product Management
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const product = {
    name: document.getElementById('productName').value,
    price: document.getElementById('productPrice').value,
    category: document.getElementById('productCategory').value
  };

  const productDiv = document.createElement('div');
  productDiv.innerText = `${product.name} - $${product.price} (${product.category})`;
  productList.appendChild(productDiv);

  console.log('Product Added:', product);
  alert('Product added successfully!');
  productForm.reset();
});