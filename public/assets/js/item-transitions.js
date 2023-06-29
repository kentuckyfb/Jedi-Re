addInteractivity('transition-1', 'img_one.jpg', 'img_two.jpg');
addInteractivity('transition-2', 'img_three.jpg', 'img_four.jpg');
addInteractivity('transition-3', 'img_five.jpg', 'img_six.jpg');
addInteractivity('transition-4', 'img_seven.jpg', 'img_eight.jpg');
addInteractivity('transition-5', 'img_nine.jpg', 'img_ten.jpg');
addInteractivity('transition-6', 'img_eleven.jpg', 'img_twelve.jpg');

function addInteractivity(selector, imageOne, imageTwo){
    var hoverDisort = new hoverEffect({
        parent: document.querySelector('#' + selector),
        intensity: 0.2,
        image1: './assets/img/collection/' + imageOne,
        image2: './assets/img/collection/' + imageTwo,
        displacementImage: './assets/img/collection/4.png'
    });

    return hoverDisort;
}