
type="text/javascript"
var isOriginalText = true;
function funcClick(){
  var x = document.getElementById("h_txt");
  if(isOriginalText){
    x.innerHTML = "THE CUTIE";
  } else {
    x.innerHTML = "THE BEAUTY";
  }
  isOriginalText = !isOriginalText;
}

function showSideBar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSideBar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
// change text