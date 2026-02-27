
const headings = document.querySelectorAll(".heading");

headings.forEach((heading) => {
    const accRight = heading.querySelector(".heading-acc-right");
    accRight.addEventListener("click", () => {
        accRight.classList.toggle("roticon");
        toggleNestedBottoms(heading);
    });
});

function toggleNestedBottoms(heading) {
    const bottoms = heading.querySelectorAll(".heading-bottom");
    bottoms.forEach(bottom => {
        bottom.classList.toggle("afteracc");
        if (!bottom.classList.contains("afteracc")) {
            bottom.style.maxHeight = bottom.scrollHeight + "px";
        } else {
            bottom.style.maxHeight = "0";
        }
        // Recursively toggle nested .heading-bottom elements 


       
            toggleNestedBottoms(bottom);          
    });
}


const lcClick = document.querySelector(".lc-icon-container");
const lcRot = document.querySelector(".lcrot");
const leftCon = document.querySelector(".content-left");
const rightCon = document.querySelector(".content-right");
const innercontentright = document.querySelector(".inner-content-right")

lcClick.addEventListener("click", () => {
    lcRot.classList.toggle("lefthide");
    leftCon.classList.toggle("hidecontleft");
    rightCon.classList.toggle("expand");
    innercontentright.classList.toggle("changepadding")
});
const clickLn = document.querySelector(".ln-list-js");
const showlnList = document.querySelector(".onhover-ln-list");
const lnchoosed = document.querySelectorAll(".ln-list-containers");
const toChngln = document.querySelector(".Lnselected");

clickLn.addEventListener("mouseover", () => {
    showlnList.style.display = "block";
})
clickLn.addEventListener("mouseout", () => {
    showlnList.style.display = "none";
})

lnchoosed.forEach((item, index) => {
    item.addEventListener("click", () => {
        lnchoosed.forEach(content => {
            content.style.display = "block";
        })
        lnchoosed[index].style.display = "none"
        const lntext = lnchoosed[index].innerText;
        if (index == 0){
            document.getElementById("english").style.display = "block";
            document.getElementById("hindi").style.display = "none";
        }
        else if(index == 1){
            document.getElementById("english").style.display = "none";
            document.getElementById("hindi").style.display = "block";

        }
        toChngln.innerText = lntext.substring(0, 2).toLowerCase();
    })
})
const inputdiv = document.querySelector(".input-div");
const searchtxt = document.querySelector("#searchinput");
const counttxt = document.querySelector(".counts");
const contenttxt = document.querySelector(".content-design");
const highlight = contenttxt.getElementsByTagName("p");
const btntotop = document.querySelector(".totop");
const btntobottom = document.querySelector(".tobottom");
const tocasesecsitive = document.querySelector(".case-sensitive");
const outof = document.querySelector(".out-of");
const clssrch = document.querySelector(".close-search");
const whilesearching = document.querySelector(".whilesearching");
let initial = document.querySelector(".initialcount");
let caps = false;
tocasesecsitive.addEventListener("click",()=>{
    caps = true ;
    tocasesecsitive.classList.toggle("oncaps");

})
searchtxt.addEventListener("input", () => {
    const inputtxt = searchtxt.value.trim();
    let regex ;
    if(caps){
        regex = new RegExp(inputtxt, 'g');
    }
    else{
        regex = new RegExp(inputtxt, 'gi');
    }
    let count = 0;
    if (!(inputtxt == "")) {
        for (let i = 0; i < highlight.length; i++) {
            highlight[i].innerHTML = highlight[i].textContent.replace(regex, match => {
                count++;                
                return '<span class="highlight-txt">' + match + '</span>';
            });
        }
        if (count != 0) {
            counttxt.textContent = count;
            initial.style.display = "block";
            outof.style.display = "block";
        } else {
            counttxt.textContent = "No result";
            initial.style.display = "none";
            outof.style.display = "none";
        }
    } else {
        for (let i = 0; i < highlight.length; i++) {
            highlight[i].innerHTML = highlight[i].textContent;
        }
        counttxt.textContent = "No result";
        initial.style.display = "none";
        outof.style.display = "none";
    }

    const highlighted = document.querySelector(".highlight-txt");

    if (highlighted) {
        window.scrollTo({
            top: highlighted.offsetTop,
            behavior: 'smooth'
        });
    }
});
let currentIndex = 0;

btntotop.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--; 
        scrollToHighlightedElement();
        console.log(currentIndex)

    }
    initial.innerText = (currentIndex + 1).toString();
});

btntobottom.addEventListener("click", () => {
    const highlightedElements = document.querySelectorAll(".highlight-txt");
    if (currentIndex < highlightedElements.length - 1) { 
        currentIndex++; 
        scrollToHighlightedElement();
        console.log(currentIndex)
        initial.innerText = (currentIndex + 1).toString();

    }
});

function scrollToHighlightedElement() {
    const highlightedElements = document.querySelectorAll(".highlight-txt");
    const targetElement = highlightedElements[currentIndex];
    if (targetElement) {
        const targetOffset = targetElement.offsetTop;
        const duration = 1000; // Adjust duration as needed (in milliseconds)
        const startTime = performance.now();
        const startOffset = window.pageYOffset || document.documentElement.scrollTop;

        function scrollFunction(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scrollTop = startOffset + (targetOffset - startOffset) * progress;
            window.scrollTo(0, scrollTop);

            if (elapsed < duration) {
                window.requestAnimationFrame(scrollFunction);
            }
        }

        window.requestAnimationFrame(scrollFunction);
    }
}

inputdiv.addEventListener("click",()=>{
    whilesearching.classList.remove("hidesearchbar");
    searchtxt.focus();
})

clssrch.addEventListener("click",()=>{
    whilesearching.classList.add("hidesearchbar");
})
document.addEventListener("keydown", function(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        inputdiv.click();
        event.preventDefault();
    }
});

const maxhead = document.querySelectorAll(".max-head");
const maxheadtrigger = document.querySelectorAll(".maxheadtrigger");

maxheadtrigger.forEach((item, index) => {
    item.addEventListener("click", () => {
        const targetOffset = maxhead[index].offsetTop;
        const duration = 1000;
        const startTime = performance.now();
        const startOffset = window.pageYOffset || document.documentElement.scrollTop;

        function scrollToTarget(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scrollTop = startOffset + (targetOffset - startOffset) * progress;
            window.scrollTo(0, scrollTop);
            
            if (elapsed < duration) {
                window.requestAnimationFrame(scrollToTarget);
            }
        }

        window.requestAnimationFrame(scrollToTarget);
    });
});

const subheadtrigger = document.querySelectorAll(".subheadtrigger")
const tobescrollsubhead = document.querySelectorAll(".tobescroll-subhead");
subheadtrigger.forEach((item, index) =>{
    item.addEventListener("click", () => {
        const targetOffset = tobescrollsubhead[index].offsetTop;
        const duration = 1000;
        const startTime = performance.now();
        const startOffset = window.pageYOffset || document.documentElement.scrollTop;

        function scrollToTarget(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scrollTop = startOffset + (targetOffset - startOffset) * progress;
            window.scrollTo(0, scrollTop);
            
            if (elapsed < duration) {
                window.requestAnimationFrame(scrollToTarget);
            }
        }

        window.requestAnimationFrame(scrollToTarget);
    });
})


const body = document.querySelector("body");
const contentdesign = document.querySelectorAll(".content-design");
const headpage = document.querySelectorAll(".head-page");
const ldbtn = document.querySelector(".ldbtn");
const contentleft = document.querySelectorAll(".content-left");
const headingtextleft = document.querySelectorAll(".heading-text-left");
const uls = document.querySelectorAll(".uls");
const headingleft = document.querySelectorAll(".heading-left");
const headingaccright= document.querySelectorAll(".heading-acc-right");
const borderline= document.querySelectorAll(".border-line");
const contentheading = document.querySelectorAll(".content-heading");
const footercol = document.querySelectorAll(".footer-col")
const darkicon = document.querySelector(".darkicon");
const darktext = document.querySelector(".darktext");

ldbtn.addEventListener("click", ()=>{
    if(darkicon.textContent.trim()== "Light_mode"){
        darkicon.textContent = "dark_mode";
        darktext.textContent = "Dark"
    }
    else{
        darkicon.textContent = "Light_mode";
        darktext.textContent = "Light"
    }
    
    body.classList.toggle("light");
    contentleft.forEach(item =>{
        item.classList.toggle("light");
    })
    contentheading.forEach(item =>{
        item.classList.toggle("light");
    })

    contentdesign.forEach(item =>{
        item.classList.toggle("light");
    })
    headpage.forEach(item =>{
        item.classList.toggle("light");
    })
    headingtextleft.forEach(item =>{
        item.classList.toggle("light");
    })
    uls.forEach(item =>{
        item.classList.toggle("light");
    })
    headingleft.forEach(item =>{
        item.classList.toggle("light");
    })
    headingaccright.forEach(item =>{
        item.classList.toggle("light");
    })
    borderline.forEach(item =>{
        item.classList.toggle("light");
    })
    footercol.forEach(item =>{
        item.classList.toggle("light");
    })
})
const navtopopt =document.querySelector(".nav-top-opt");
navtopopt.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0
    })
})

