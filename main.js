var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


/* Looping through images */

  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images\\drawing2.jpg');
  thumbBar.appendChild(newImage);

  var newImage2 = document.createElement('img');
  newImage2.setAttribute('src', 'images\\Drawing3.jpg');
  thumbBar.appendChild(newImage2);

  var newImage3 = document.createElement('img');
  newImage3.setAttribute('src', 'images\\freelance1.jpg');
  thumbBar.appendChild(newImage3);

  var newImage4 = document.createElement('img');
  newImage4.setAttribute('src', 'images\\SQUARE1_Final.jpg');
  thumbBar.appendChild(newImage4);

  var newImage5 = document.createElement('img');
  newImage5.setAttribute('src', 'images\\typography.jpg');
  thumbBar.appendChild(newImage5);

  thumbBar.onclick = function(eventArg) {
    var imageSrc = eventArg.target.getAttribute('src');
    displayedImage.setAttribute('src', imageSrc);
  }
