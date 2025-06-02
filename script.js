document.querySelector('body').addEventListener("mousemove",eyeball);
function eyeball(event){
    const eye = document.querySelectorAll('.eyes');
    eye.forEach(function(eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth;
        let y = eye.getBoundingClientRect().top + eye.clientHeight;
        let radian = Math.atan2(event.pageX - x, event.pageY -y);
        let rotate = radian *(100/ Math.PI) * -1 +270;
        eye.style.transform = "rotate(" + rotate + "deg)";
    })
}