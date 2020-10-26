
  var widthSlide = document.getElementById('myRange1');
  var heightSlide = document.getElementById('myRange2');
  var outW = document.getElementById('imgW');
  var outH = document.getElementById('imgH');
  var img = document.getElementById('myImg')
  var load = false;

  widthSlide.oninput = function resize1() {
    outW.innerHTML = 'Ширина: '+widthSlide.value;
    if (load) {
      img.width = widthSlide.value
      img.height = heightSlide.value
    }
  }

  heightSlide.oninput = function resize2() {
    outH.innerHTML = 'Высота '+heightSlide.value;
    if (load) {
      img.width = widthSlide.value
      img.height = heightSlide.value
    }
  }

  img.onload = function setOut() {
    load = true;
  widthSlide.value = img.width;
  outW.innerHTML = 'Ширина: '+img.width;
  heightSlide.value = img.height;
  outH.innerHTML = 'Высота '+img.height;
}

function select() {
  var sel=document.getElementById('selector').selectedIndex;
  var options=document.getElementById('selector').options;
  var newimg = new Image();
  newimg.src = 'images/'+options[sel].value;
  
  newimg.onload = function setter() {
    img.src = 'images/'+options[sel].value;
    img.alt = 'images/'+options[sel].value;
    img.width = newimg.width;
    img.height = newimg.height;
  }

    load = false;
}
