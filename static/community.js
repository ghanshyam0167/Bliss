const joinon = document.querySelector(".joinon");
const join = document.querySelector(".join");
const joindate = document.querySelector(".joindate");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const currentMonthIndex = currentDate.getMonth();
const currentMonthAbbreviation = monthNames[currentMonthIndex];
const currentDay = currentDate.getDate();
const userinputright = document.querySelector(".userinputright");
const chatmessage = document.querySelector("#chatmessage");
const messageinput = document.querySelector(".messageinput");

join.addEventListener("click", () => {
    joindate.textContent = currentDay + " "+ currentMonthAbbreviation;
    joinon.style.display = "flex";
    join.style.display = "none";
    messageinput.style.display="flex";
    
});
const container = document.querySelector(".container");

function enableScroll() {
    container.scrollTop = container.scrollHeight;
}

setTimeout(enableScroll, 2000);
