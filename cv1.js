var monImage = document.querySelector('img');

monImage.onclick = function() {
    var maSrc = monImage.getAttribute('src');
    if(maSrc === './matrix1.jpg') {
      monImage.setAttribute ('src','./matrix2.jpg');
    } else {
      monImage.setAttribute ('src','./matrix1.jpg');
    }
}