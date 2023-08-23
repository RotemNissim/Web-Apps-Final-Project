function loadCommonComponents() {
// Fetch header content
 fetch('/partials/header.html')  // Remove the dot before /partials
 .then(response => response.text())
 .then(headerContent => {
   const headerElement = document.querySelector('header');
   headerElement.innerHTML = headerContent;
 });

// Fetch footer content
fetch('/partials/footer.html')  // Remove the dot before /partials
 .then(response => response.text())
 .then(footerContent => {
   const footerElement = document.querySelector('footer');
   footerElement.innerHTML = footerContent;
 });

// Fetch menu content
fetch('/partials/menu.html')  // Remove the dot before /partials
 .then(response => response.text())
 .then(menuContent => {
   const menuElement = document.querySelector('.menu');
   menuElement.innerHTML = menuContent;
 });
}

document.addEventListener('DOMContentLoaded', loadCommonComponents);