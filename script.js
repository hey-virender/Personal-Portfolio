/** 
let currentOpenDiv = null;
let currentLabel = null;

function showOrHideDiv(divNumber,labelNo) {
    const div = document.getElementById('div' + divNumber);
    const label = document.getElementById('l' + labelNo);

    if (div === currentOpenDiv && label === currentLabel) {
        // Clicked on the same button again, hide the div
        div.classList.remove('visible');
        label.classList.remove('active');
        document.getElementById('info').classList.remove('hidden');
        currentOpenDiv = null;
        currentLabel = null;
    } else {
        // Clicked on a different button, hide the currently open div (if any)
        if (currentOpenDiv && currentLabel) {
            currentOpenDiv.classList.remove('visible');
            label.classList.remove('active');
            document.getElementById('info').classList.remove('hidden');
        }

        // Show the selected div
        div.classList.add('visible');
        label.classList.add('active');
        document.getElementById('info').classList.add('hidden')
        currentOpenDiv = div;
        currentLabel = label;
    }
}*/
let currentOpenDiv = null;
let currentLabel = null;

function showOrHideDiv(divNumber, labelNo) {
    const div = document.getElementById('div' + divNumber);
    const label = document.getElementById('l' + labelNo);

    if (div === currentOpenDiv && label === currentLabel) {
        // Clicked on the same button again, hide the div
        div.classList.remove('visible');
        label.classList.remove('active');
        document.getElementById('info').classList.remove('hidden');
        currentOpenDiv = null;
        currentLabel = null;
    } else {
        // Clicked on a different button, hide the currently open div (if any)
        if (currentOpenDiv && currentLabel) {
            currentOpenDiv.classList.remove('visible');
            currentLabel.classList.remove('active');
            document.getElementById('info').classList.remove('hidden');
        }

        // Show the selected div
        div.classList.add('visible');
        label.classList.add('active');
        document.getElementById('info').classList.add('hidden');
        currentOpenDiv = div;
        currentLabel = label;
    }
}
 
