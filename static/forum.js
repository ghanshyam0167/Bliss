
document.addEventListener("DOMContentLoaded", function () {

    const Title = document.querySelector("#Title");
    const Description = document.querySelector("#Description");
    const forumForm = document.querySelector("#forumForm");
    const forumsubmit = document.querySelector("#forumsubmit");
    forumForm.addEventListener("keyup", () => {

        if (Title.value.length > 0 || Description.value.trim().length > 0) {


            forumsubmit.classList.add("active");
        } else {

            forumsubmit.classList.remove("active");
        }
    });
    forumsubmit.addEventListener("click", () => {
        forumForm.submit();
    })
});

const startopic = document.querySelector(".startopic");
const foruminput = document.querySelector(".foruminput");
const designforuminput = document.querySelector(".designforuminput");

startopic.addEventListener("click", () => {
    var t1 = gsap.timeline();
    t1.to(
        foruminput,
        {
            duration: 0.3,
            opacity: 1,
            display: "flex",
        },
        
    )
    .to(designforuminput, {
        duration: 0.3,
        opacity: 1,
        display: "flex",
    }, "-=0.5")
    

})
foruminput.addEventListener("click", function(event)  {
    if(event.target.classList.contains("foruminput")) {
        var t1 = gsap.timeline();
        t1.to(
            foruminput,
            {
                duration: 0.3,
                opacity: 0,
                display: "none",
            },
            
        )
        .to(designforuminput, {
            duration: 0.3,
            opacity: 0,
            display: "none",
        }, "-=0.5")
    }
})
const headingfeed = document.querySelectorAll(".headingfeed");
const onsearch = document.querySelector(".onsearch");
const srchforum = document.querySelector("#srchforum");
const tosearch = document.querySelectorAll(".searchcontent");

srchforum.addEventListener("keyup", () => {
    const searchValue = srchforum.value.trim().toUpperCase();
    if(searchValue.length>0){
        onsearch.style.display= "flex";
    }
    else{
        onsearch.style.display= "none";
    }

    tosearch.forEach(item => {
        const itemText = item.textContent.trim().toUpperCase();
        if (itemText.includes(searchValue)) {
            item.style.display = "flex";
            
        }
        else{
            item.style.display = "none";
        }
    });
});

const inputdiv = document.querySelector(".input-div");

document.addEventListener("click", function(e){
    if(!(e.target.classList.contains("searchcontent")) && !(e.target.classList.contains("srchforum"))){
        onsearch.style.display = "none";
        srchforum.value='';
    }
})