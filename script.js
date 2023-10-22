let currentOpenDiv = null;

function showOrHideDiv(divNumber) {
    const div = document.getElementById('div' + divNumber);

    if (div === currentOpenDiv) {
        // Clicked on the same button again, hide the div
        div.classList.remove('visible');
        document.getElementById('info').classList.remove('hidden')
        currentOpenDiv = null;
    } else {
        // Clicked on a different button, hide the currently open div (if any)
        if (currentOpenDiv) {
            currentOpenDiv.classList.remove('visible');
            document.getElementById('info').classList.remove('hidden')
        }

        // Show the selected div
        div.classList.add('visible');
        document.getElementById('info').classList.add('hidden')
        currentOpenDiv = div;
    }
}

function hideinfo(){
    
}