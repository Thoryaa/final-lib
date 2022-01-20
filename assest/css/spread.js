const nextBTN = document.getElementById('next-btn');
const prevBTN = document.getElementById('prev-btn');
const progress = document.getElementById('progress');
const steps = document.querySelectorAll(".circle");
let index = 0;
nextBTN.addEventListener("click", function() {
    index++;
    if (index >= steps.length) {
        index = steps.length;
    }

    changeStatus();





});
prevBTN.addEventListener("click", function() {
    index--;

    if (index <= 0) {
        index = 0;
    }
    changeStatus();
    apperdiv();


})

function changeStatus() {
    steps.forEach((item, i) => {

        if (i < index) {

            item.classList.add('active');



        } else {

            item.classList.remove('active');



        }




    });

    const active_steps = document.querySelectorAll('.active');


    progress.style.width = ((active_steps.length - 1) / (steps.length - 1)) * 100 + "%";
}

function apperdiv() {
    if (steps == 1) {
        document.getElementById('st1').style.visibility = 'visible';
        document.getElementById('st2').style.visibility = 'hidden';
        document.getElementById('st3').style.visibility = 'hidden';
        document.getElementById('st4').style.visibility = 'hidden';

    } else if (steps == 2) {
        document.getElementById('st2').style.visibility = 'visible';
        document.getElementById('st1').style.visibility = 'hidden';
        document.getElementById('st3').style.visibility = 'hidden';
        document.getElementById('st4').style.visibility = 'hidden';

    } else if (steps == 3) {
        document.getElementById('st3').style.visibility = 'visible';
        document.getElementById('st1').style.visibility = 'hidden';
        document.getElementById('st2').style.visibility = 'hidden';
        document.getElementById('st4').style.visibility = 'hidden';
    } else if (steps == 4) {
        document.getElementById('st4').style.visibility = 'visible';
        document.getElementById('st1').style.visibility = 'hidden';
        document.getElementById('st2').style.visibility = 'hidden';
        document.getElementById('st3').style.visibility = 'hidden';
    }
}

function disapper() {
    if (steps == 1) {
        document.getElementById('st1').style.visibility = 'hidden';


    } else if (steps == 2) {
        document.getElementById('st2').style.visibility = 'hidden';
    } else if (steps == 3) {
        document.getElementById('st3').style.visibility = 'hidden';
    } else if (steps == 4) {
        document.getElementById('st4').style.visibility = 'hidden';
    }
}