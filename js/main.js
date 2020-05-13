document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', ()=> {
    const accordiancontent = button.nextElementSibling;
    button.classList.toggle('button--active');
    if (button.classList.contains('button--active')){
      accordiancontent.style.display = "block";
      }
    else {
      accordiancontent.style.display = 'none';
    }
  });
});