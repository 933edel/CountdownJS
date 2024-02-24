const endDate = "January 23, 2025 10:30:00";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate); //converts the date to milliseconds

    const now = new Date();

    

    const diff = (end - now) / 1000; //this gives the difference in seconds

    if(diff < 0){
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24);

    inputs[1].value = Math.floor(diff / 3600) % 24;

    inputs[2].value = Math.floor(diff / 60) % 60;

    inputs[3].value = Math.floor(diff) % 60;

}


setInterval(
    () => {
        clock();
    }, 1000
);