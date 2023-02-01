
document.querySelector('#hide').onclick =

    function hideButton() {

        const El = document.querySelector(".content").style.visibility = 'hidden';

        console.log('Paragraph are hide');
    }

document.querySelector('#visible').onclick =

    function visibleButton() {

        const El = document.querySelector(".content").style.visibility = 'visible';

        console.log('Paragraph are visible on the screen');
    }

document.getElementById("background").style.color = "orange";

document.getElementById("background").style.backgroundColor = "black";

document.getElementById('body').style.backgroundColor = "white"
