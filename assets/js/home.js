function displayCurrentDate(){
    const today = new Date();
    let time = today.toLocaleTimeString();
    let date = today.toDateString();
    let current = date+", "+time;
    document.getElementById('current-time').innerHTML = current;
    setTimeout(displayCurrentDate, 1000);
}
function changeTheme(){
    if(lightTheme){
        document.body.style.backgroundColor = "rgb(170, 170, 170)";
        document.body.style.color = "white";
        document.getElementById('app').style.backgroundColor = "rgb(80, 80, 80)";
        themeButton.innerHTML = "Light mode";
    }
    else{
        document.getElementById('app').style.backgroundColor = "rgb(170, 170, 170)";
        document.body.style.backgroundColor = "rgb(80, 80, 80)";
        document.body.style.color = "black";
        themeButton.innerHTML = "Dark mode";
    }
    lightTheme = !lightTheme;
}
const themeButton = document.getElementById('change-theme');
let lightTheme = true;
themeButton.addEventListener('click', changeTheme);

displayCurrentDate();
