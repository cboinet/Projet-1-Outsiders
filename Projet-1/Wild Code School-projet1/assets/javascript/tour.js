const button = document.querySelectorAll('.buy_btn');
button.forEach(item => item.addEventListener('click', () => {
  window.location.href="404.html";
  console.log("bouton cliqué");
}));
// test commit