window.onload = function() {

  movMeId=document.getElementById("ImgMov");
  movMeId.style.top = "80px";
  movMeId.style.left = "80px";
  movMeId.style.position = "absolute";

  document.onmousedown = coordinates;
  document.onmouseup=mouseup;

  function coordinates(e) {
    if (e == null) { e = window.event;}
    var sender = (typeof( window.event ) != "undefined" ) ? e.srcElement : e.target;

    if (sender.id=="ImgMov") {
      mouseover = true;
      pleft = parseInt(movMeId.style.left);
      ptop = parseInt(movMeId.style.top);
      xcoor = e.clientX;
      ycoor = e.clientY;
      document.onmousemove=moveImage;
      return false;
    } else { 
        return false;
    }
  }

  function moveImage(e) {
    if (e == null) { e = window.event; }
    movMeId.style.left = pleft+e.clientX-xcoor+"px";
    movMeId.style.top = ptop+e.clientY-ycoor+"px";
    return false;
  }

  function mouseup(e) {
    document.onmousemove = null;
  }
}