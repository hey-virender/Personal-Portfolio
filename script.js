function showDiv(divNumber) {
    const divs = document.querySelectorAll('.content');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('visible');
    }
    document.getElementById('div' + divNumber).classList.add('visible');
}
function rotateimg(imgno){
    const img = document.querySelectorAll('.images')
    for (let i=0; i<img.length; i++){
        img[i].classList.remove('visible')
    }
}