//toiminto - Avaa Sidebar//

function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  document.addEventListener('click', handleOutsideClick);
}
//toiminto Sulkea Sidebar //
function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
  document.removeEventListener('click', handleOutsideClick);
}
// toiminto Sulkea Sidebar klikkamalla mualla//
function handleOutsideClick(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      closeSidebar();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      openSidebar();
  });
});



  //reseptit//
  
 //kalenteri//

 //blogi//