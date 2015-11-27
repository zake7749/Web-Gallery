/*****************************************************************

                        Global variable

*****************************************************************/
var showflag = 0;
var FocusedImage = 0;
var showRate = 3000;
var musicList = ["res/1.mp3","res/2.mp3","res/3.mp3"];
var musicflag = 0;
var st = setInterval(slideShow, showRate);
/*****************************************************************

                  On right flow and left flow

*****************************************************************/

function flow(flag){

  for(dotimes= 1;dotimes<9;dotimes++){
    var grid = document.getElementById(dotimes);
    var index = grid.style.backgroundImage.substring(9,11);
    var iindex = parseInt(index);
    if(flag==1){
    //that's no matter if 'index' is a string or integer.
        iindex = (index==19) ? 0 : iindex+1;
    }else{
        iindex = (index==0) ? 19 : iindex-1;
    }
    if(iindex<10){
      iindex = "0" + iindex;//restroe as the string type.
    }
    var str = "url('img/" + iindex + ".jpg')";
    grid.style.backgroundImage = str;
  }
}

/*****************************************************************

Change the main image as clicking the pictures on surveyBar.

*****************************************************************/


$(document).ready(function() {
  $(".grid").click(function(){
    var filename = $(this).css("background-image");
    var l = filename.length;
    //the path get by Jquery is a absolute path.
    var index = filename.substring(l-8,l-6);
    FocusedImage = parseInt(index);
    //alert(FocusedImage);
    $("#img").css("background-image",filename);

    var sFI = FocusedImage;
    if(sFI<10){
      sFI = "0" + sFI;
    }
    var ref = "img/" + sFI + ".jpg";
    $("#download").attr("href",ref);
  });
});

/*****************************************************************

Change the main image as clicking the pictures on sidebar.

*****************************************************************/
function change(flag){
  var grid = document.getElementById("img");
  var iindex = FocusedImage;
  if(flag==-1){
    iindex = (iindex==0) ? 19 : iindex-1;
  }else{
    iindex = (iindex==19) ? 0 : iindex+1;
  }
  FocusedImage = iindex;
  if(iindex<10)
    iindex = "0" + iindex;
  var ref = "img/" + iindex + ".jpg";
  var str = "url('img/" + iindex + ".jpg')";
  grid.style.backgroundImage = str;
  $("#download").attr("href",ref);
}

/*****************************************************************

                          Slide show

*****************************************************************/
function startshow(){
  showflag = (showflag==0) ? 1 : 0;
  btn = document.getElementById("slide");
  if(showflag){
    btn.innerHTML = "Show-OFF";
  }else{
    btn.innerHTML = "Show-ON"
  }
  //alert(showflag);
}

function slideShow(){
  if(showflag==1){
    FocusedImage = (FocusedImage==19) ? 0 : FocusedImage+1;
    if(FocusedImage<10){
      str = "0" + FocusedImage;
    }else{
      str = FocusedImage;
    }
    path = "url('img/" + str + ".jpg')";
    //alert(path);
    var ref = "img/" + str + ".jpg";
    $("#img").css("background-image",path);
    $("#download").attr("href",ref);
  }
}

/*****************************************************************

                          Music Player

*****************************************************************/

function changeMusic(){
  musicflag = (musicflag==2) ? 0 : musicflag+1;
  $("#musicplayer").attr("src",musicList[musicflag]);
  $("#CGM").html("BGM - 0" + musicflag);
}
