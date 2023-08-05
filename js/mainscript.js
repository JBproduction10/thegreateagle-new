const nav = document.querySelector('.nav');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const toggle = document.querySelector('.toggle');
let currentPage = 1;
const imgPerPage = 4;

/*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/
  function initParallax(){
    $('#home').parallax("50%", 0.3);
  }
  initParallax();


  /* Back top
  -----------------------------------------------*/
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.go-top').fadeIn(200);
    }else{
        $('.go-top').fadeOut(200);
    }
  });
  //Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
  })

//---- dark mode----//

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Darkmode';
        localStorage.setItem('darkMode', 'false');
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
        localStorage.setItem('darkMode', 'true');
    }
});

// close navbar
$(document).ready(function(){
    $('.navbar-nav li a').on('click', function(){
        //close the navbar
        $(".navbar-collapse").collapse('hide');
    })
})


function showPage(page){
    const galleryItems = document.querySelectorAll('.gallery-thumb');
    const startIndex = (page -1) * imgPerPage;
    const endIndex = startIndex + imgPerPage;

    galleryItems.forEach((item, index) =>{
        if(index >= startIndex && index < endIndex){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

function prevPage(){
    if(currentPage > 1){
        currentPage--;
        showPage(currentPage);
    }
}

prev.addEventListener('click', (e) => {
    e.preventDefault();
    prevPage();
});

function nextPage(){
    const totalItems = document.querySelectorAll('.gallery-thumb').length;
    const totalPages = Math.ceil(totalItems / imgPerPage);
    if(currentPage < totalPages){
        currentPage++;
        showPage(currentPage);
    }
}

next.addEventListener('click', (e) => {
    e.preventDefault();
    nextPage();
});

showPage(currentPage);

