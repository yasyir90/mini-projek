const gallery = document.querySelector('.gallery');
const jumbo = document.querySelector('.jumbo');

gallery.addEventListener('click', function(e){
  if(e.target.className == 'tumb'){

    jumbo.scr = e.target.src;
  }
});