
function showdetail(itemID){
  var grid = document.getElementById(itemID);
  grid.style.display = "flex";
}

function closedetail(itemID){
  var grid = document.getElementById(itemID);
  grid.style.display = "none";
}

function changeBackground(str){
  var cover = document.getElementById("Cover");
  str = "url(img/" + str+ ")";
  cover.style.backgroundImage = str;
}
