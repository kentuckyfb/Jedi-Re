import './style.css'


let prevScrollPos = window.pageYOffset;
const section = document.querySelectorAll("#sec")
// Get references to the buttons and slides
const RightBtn = document.getElementById('sliderbtnright');
const LeftBtn = document.getElementById('sliderbtnleft');
const slides = document.getElementsByClassName('slides');

let currentIndex = 0;

var web = document.getElementById('secW');
var app = document.getElementById('secA');
var game = document.getElementById('secG');

var webs = document.getElementById('webP');
var apps = document.getElementById('appP');
var games = document.getElementById('gameP');


// Function to show the current slide and hide others
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      slides[index].classList.add('show');
    } else {
      if (slides[i].classList.contains("show")) {
        slides[i].classList.remove('show');
      }
    }
  }
}



document.addEventListener('mousemove', function (e) {
  var circle = document.getElementById('circle');
  var x = e.pageX;
  var y = e.pageY;

  // Update circle position
  circle.style.left = x - 25 + 'px';
  circle.style.top = y - 25 + 'px';


});

// Event listener for the next button
LeftBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

// Event listener for the previous button
RightBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});
// Show the initial slide
showSlide(currentIndex);


function update() {
  const currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  if (currentScrollPos > prevScrollPos) {
    animateLinesUp();
  } else if (currentScrollPos < 50) {
    animateLinesDown();
  }
  

  // prevScrollPos = currentScrollPos;
  // var scrollY = window.scrollY;
  // if (scrollY >= 2100) {
  //   if (section[5] instanceof HTMLElement) {
  //     section[5].classList.add("show");
  //   }
  // }
  // else if (scrollY > 1800) {

  //   if (section[4] instanceof HTMLElement) {
  //     section[4].classList.add("show");
  //   }
  // }
  // else if (scrollY > 1300) {

  //   if (section[3] instanceof HTMLElement) {
  //     section[3].classList.add("show");
  //   }
  // } else if (scrollY > 700) {
  //   if (section[2] instanceof HTMLElement) {
  //     section[2].classList.add("show");
  //   }
  // }
  // else if (scrollY >= 300) {
  //   if (section[1] instanceof HTMLElement) {
  //     section[1].classList.add("show");
  //   }
  // }

  // if (scrollY < 300) {
  //   section[1].classList.remove("show");
  // }

  // else if (scrollY < 700) {
  //   section[2].classList.remove("show");
  // }

  // else if (scrollY < 1300) {
  //   section[3].classList.remove("show");
  // }
  // else if (scrollY < 1800) {
  //   section[4].classList.remove("show");
  // } else if (scrollY < 2100) {
  //   section[5].classList.remove("show");
  // }


}




function animateLinesUp() {
  const lines = document.querySelectorAll('.vl, .vl1, .vl2');
  lines.forEach(function (line) {
    line.style.animationName = 'lineUp';
    line.style.animationDuration = '0.5s';
    line.style.animationFillMode = 'forwards';
  });


  const clouds1 = document.querySelectorAll('#IT2');
  const clouds2 = document.querySelectorAll('#IT3');

  clouds1.forEach(function (cloud) {
    cloud.style.animationName = 'slideInBackLeft';
    cloud.style.animationDuration = '0.5s';
    cloud.style.animationFillMode = 'forwards';
  });

  clouds2.forEach(function (cloud) {
    cloud.style.animationName = 'slideInBackRight';
    cloud.style.animationDuration = '0.5s';
    cloud.style.animationFillMode = 'forwards';
  });
}

function animateLinesDown() {
  const lines = document.querySelectorAll('.vl, .vl1, .vl2');
  lines.forEach(function (line) {
    line.style.animationName = 'lineDown';
    line.style.animationDuration = '0.5s';
    line.style.animationFillMode = 'forwards';
  });


  const clouds1 = document.querySelectorAll('#IT2');
  const clouds2 = document.querySelectorAll('#IT3');

  clouds1.forEach(function (cloud) {
    cloud.style.animationName = 'slideInLeft';
    cloud.style.animationDuration = '0.5s';
    cloud.style.animationFillMode = 'forwards';
  });

  clouds2.forEach(function (cloud) {
    cloud.style.animationName = 'slideInRight';
    cloud.style.animationDuration = '0.5s';
    cloud.style.animationFillMode = 'forwards';
  });
}

document.body.onscroll = update;

webs.addEventListener('mouseenter', function () {
  if (webs instanceof HTMLElement) {
    webs.classList.add('hovered');
    web.classList.add('showbox');
  }

});

webs.addEventListener('mouseleave', function () {
  if (webs instanceof HTMLElement) {
    webs.classList.remove('hovered');
    web.classList.remove('showbox');
  }
});



apps.addEventListener('mouseenter', function () {
  if (webs instanceof HTMLElement) {
    apps.classList.add('hovered');
    app.classList.add('showbox');
  }

});

apps.addEventListener('mouseleave', function () {
  if (webs instanceof HTMLElement) {
    apps.classList.remove('hovered');
    app.classList.remove('showbox');
  }
});


games.addEventListener('mouseenter', function () {
  if (webs instanceof HTMLElement) {
    games.classList.add('hovered');
    game.classList.add('showbox');
  }
});

games.addEventListener('mouseleave', function () {
  if (webs instanceof HTMLElement) {
    games.classList.remove('hovered');
    game.classList.remove('showbox');
  }
});