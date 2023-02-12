const endDate = "18 Feb 2023 12:00 AM"
document.getElementById("end-date").innerText = endDate;
// selcting all inputs from html we can also do document.getElementsByTagNamedocument.het
const inputs = document.querySelectorAll("input")



function clock(){
    // here time is in milliseconds
    const end = new Date(endDate);
    const now = new Date()
    //time will be now in seconds
    const diff = (end - now)/1000;
    // after completin time stamp to prevent itin goingminus
    if(diff < 0) return;
    //convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    // calculate remaining hours after days
    inputs[1].value = Math.floor(diff/3600)%24;
    // calculate remaining minutes after hours
    inputs[2].value = Math.floor(diff/60)%60;
    // calculate remaining seconds after minutes
    inputs[3].value = Math.floor(diff)%60;
    
}

//initial call
clock();

// seconds are changinge every second
setInterval(
   () =>  {
    clock()
   },
   1000
)