const child = document.querySelector('.iconsdiv');
const parent = document.querySelector('.leftcolumn');

if (document.querySelector('.iconsdiv')) {
    child.addEventListener('mouseover', function () {
        parent.style.setProperty('--after-opacity', '1');
    });

    child.addEventListener('mouseout', function () {
        parent.style.setProperty('--after-opacity', '0');

    });
}


function scrolll(n) {
    var left = document.getElementsByClassName("scroll-images");
    left[n].scrollBy(-554, 0);

}
function scrollr(n) {
    var right = document.getElementsByClassName("scroll-images");
    right[n].scrollBy(554, 0);

}


function hideleftbar() {
    leftbar.style.display = 'none';
}

function search() {
    const tomatch = document.querySelectorAll(".searchcards");
    tomatch.forEach(item => {
        var value = item.getAttribute("data-value");
        var filter = document.getElementById("search-input").value.toUpperCase();

        if (value.trim().toUpperCase().indexOf(filter) > -1) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";

        }
    })

}
function shhi() {
    var lop = document.getElementById("search-input").value;
    if (lop.length > 0) {
        document.getElementById("popular-div").style.display = "none";
        document.getElementById("onsearchdiv").style.display = "grid";

    }
    else {
        document.getElementById("popular-div").style.display = "block";
        document.getElementById("onsearchdiv").style.display = "none";

    }
}
function clearsearch() {
    document.getElementById("search-input").value = "";
    document.getElementById("popular-div").style.display = "block";
    document.getElementById("onsearchdiv").style.display = "none";
}

var scrollButtons = document.querySelectorAll(".cover");

scrollButtons.forEach(function (scrollButton) {
    var contentContainer = scrollButton.parentElement.querySelector(".scroll-images");

    contentContainer.addEventListener("scroll", function () {
        // Check if there is scrollable content exceeding the container's width on the left side
        if (contentContainer.scrollLeft > 0) {
            // If there is, show the left button
            scrollButton.querySelector(".btn-child-1").style.display = "block";
        } else {
            // If not, hide the left button
            scrollButton.querySelector(".btn-child-1").style.display = "none";
        }

        // Check if there is scrollable content exceeding the container's width on the right side
        if (contentContainer.scrollWidth > contentContainer.clientWidth + contentContainer.scrollLeft) {
            // If there is, show the right button
            scrollButton.querySelector(".btn-child-2").style.display = "block";
        } else {
            // If not, hide the right button
            scrollButton.querySelector(".btn-child-2").style.display = "none";
        }
    });

    // Initially check if there is scrollable content on page load
    if (contentContainer.scrollLeft > 0) {
        scrollButton.querySelector(".btn-child-1").style.display = "block";
    } else {
        scrollButton.querySelector(".btn-child-1").style.display = "none";
    }

    if (contentContainer.scrollWidth > contentContainer.clientWidth) {
        scrollButton.querySelector(".btn-child-2").style.display = "block";
    } else {
        scrollButton.querySelector(".btn-child-2").style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.slider-image');
    const container = document.querySelector('.scroll-images');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const cardRect = this.getBoundingClientRect();
            const cardPosition = cardRect.left - container.getBoundingClientRect().left;
            if (cardPosition <= 40) {
                this.style.transformOrigin = 'left';
            } else if (cardPosition > 600) {
                this.style.transformOrigin = 'right';
            } else {
                this.style.transformOrigin = 'center';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-type-2');
    const container = document.querySelector('.popular-cards');


    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const cardRect = this.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(container);
            if (computedStyle.getPropertyValue('display') === 'grid') {
                const cardPosition = cardRect.left - container.getBoundingClientRect().left;
                if (cardPosition <= 10) {
                    this.style.transformOrigin = 'left';
                } else if (cardPosition > 650) {
                    this.style.transformOrigin = 'right';
                } else {
                    this.style.transformOrigin = 'center';
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const searchcards = document.querySelectorAll(".searchcards");
    const onsearchdiv = document.querySelector(".onsearchdiv");


    searchcards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const cardRect = this.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(onsearchdiv);
            if (computedStyle.getPropertyValue('display') === 'grid') {
                const cardPosition = cardRect.left - onsearchdiv.getBoundingClientRect().left;
                if (cardPosition <= 20) {
                    this.style.transformOrigin = 'left';
                } else if (cardPosition > 650) {
                    this.style.transformOrigin = 'right';
                } else {
                    this.style.transformOrigin = 'center';
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll('.video');
    const descript = document.querySelectorAll('.innerdescribe-left');
    const vcard = document.querySelectorAll('.videoscrollar-bar-child-content');
    const clickvcard = document.querySelectorAll('.videoscrollar-bar-child');
    const numVideos = videos.length;
    let currentVideoIndex = 0; // Keep track of the currently active video

    clickvcard.forEach((clickvcard, index) => {
        clickvcard.addEventListener('click', () => {
            // Pause the currently playing video
            videos[currentVideoIndex].pause();

            // Remove active classes from all elements
            descript.forEach(item => item.classList.remove('showcontent'));
            videos.forEach(item => item.classList.remove('activevideo'));
            vcard.forEach(item => item.classList.remove('highlightborder'));

            // Set active classes to the clicked video and related elements
            vcard[index].classList.add('highlightborder');
            descript[index].classList.add('showcontent');
            videos[index].classList.add('activevideo');
            currentVideoIndex = index; // Update the current video index
            videos[index].play(); // Play the clicked video
        });
    });

    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            // Pause the currently ended video
            video.pause();

            // Remove active classes from all elements
            descript.forEach(item => item.classList.remove('showcontent'));
            videos.forEach(item => item.classList.remove('activevideo'));
            vcard.forEach(item => item.classList.remove('highlightborder'));

            // Calculate the next index
            currentVideoIndex = (currentVideoIndex + 1) % numVideos;

            // Set active classes to the next video and related elements
            vcard[currentVideoIndex].classList.add('highlightborder');
            descript[currentVideoIndex].classList.add('showcontent');
            videos[currentVideoIndex].classList.add('activevideo');
            videos[currentVideoIndex].play(); // Play the next video
        });
    });
    try {
        // Set initial active classes for the first video
        videos[0].classList.add('activevideo');
        descript[0].classList.add('showcontent');
        vcard[0].classList.add('highlightborder');
    }
    catch (error) {
        console.log(error)
    }
});

window.addEventListener('scroll', function () {
    scrollFunction();
});

function scrollFunction() {
    const videoback = document.querySelector(".videoback");
    if (videoback) {
        var scrollTopValue = window.scrollY || document.documentElement.scrollTop;

        if (scrollTopValue <= 7815) {
            var calc = scrollTopValue * 0.001 + 0.1;

            var gradientString = "linear-gradient(45deg, " +
                "rgba(2,13,25," + minof(1, calc + 0.98) + ") 0%, " +
                "rgba(2,13,25," + minof(1, calc + 0.98) + ") 5%, " +
                "rgba(2,13,25," + minof(1, calc + 0.95) + ") 10%, " +
                "rgba(2,13,25," + minof(1, calc + 0.9) + ") 15%, " +
                "rgba(2,13,25," + minof(1, calc + 0.85) + ") 20%, " +
                "rgba(2,13,25," + minof(1, calc + 0.8) + ") 25%, " +
                "rgba(2,13,25," + minof(1, calc + 0.75) + ") 30%, " +
                "rgba(2,13,25," + minof(1, calc + 0.70) + ") 35%, " +
                "rgba(2,13,25," + minof(1, calc + 0.65) + ") 40%, " +
                "rgba(2,13,25," + minof(1, calc + 0.6) + ") 45%, " +
                "rgba(2,13,25," + minof(1, calc + 0.55) + ") 50%, " +
                "rgba(2,13,25," + minof(1, calc + 0.5) + ") 55%, " +
                "rgba(2,13,25," + minof(1, calc + 0.45) + ") 60%, " +
                "rgba(2,13,25," + minof(1, calc + 0.40) + ") 65%, " +
                "rgba(2,13,25," + minof(1, calc + 0.35) + ") 70%, " +
                "rgba(2,13,25," + minof(1, calc + 0.3) + ") 75%, " +
                "rgba(2,13,25," + minof(1, calc + 0.25) + ") 80%, " +
                "rgba(2,13,25," + minof(1, calc + 0.2) + ") 85%, " +
                "rgba(2,13,25," + minof(1, calc + 0.15) + ") 90%, " +
                "rgba(2,13,25," + minof(1, calc + 0.1) + ") 95%, " +
                "rgba(2,13,25," + minof(1, calc + 0.05) + ") 100%, " +
                "rgba(2,13,25," + minof(1, calc) + ") 100%)";

            videoback.style.background = gradientString;
        }
    }

}

function minof(a, b) {
    return Math.min(a, b);
}


function rightbarclick(clickID) {
    var loopclickdiv = document.querySelectorAll(".onclick-div");
    var notificationClick = document.querySelectorAll(".collect-icon");
    var notificationDiv = document.getElementById(clickID);
    var looptooltip = document.querySelectorAll(".collect-icon-tooltip")
    let tooltipId = clickID + "-tooltip";
    let tooltip = document.getElementById(tooltipId);
    if (notificationDiv.classList.contains("shownotification")) {
        var show = false;
    }
    else {
        var show = true;
    }
    for (var i = 0; i < loopclickdiv.length; i++) {
        loopclickdiv[i].classList.remove("shownotification");
        notificationClick[i].classList.remove("highlight-icon");
        looptooltip[i].style.visibility = 'visible';
    }
    if (show) {
        notificationDiv.classList.add("shownotification");
        var index = Array.from(loopclickdiv).indexOf(notificationDiv);
        notificationClick[index].classList.add("highlight-icon");
        tooltip.style.visibility = 'hidden';
    }
    else {
        notificationDiv.classList.remove("shownotification");
        var index = (Array.from(loopclickdiv).indexOf(notificationDiv));
        notificationClick[index].classList.remove("highlight-icon");
    }
}

const threedotfeed = document.querySelectorAll(".three-dots-menu-icon");
const feeddots = document.querySelectorAll(".threedotclick");
const onclickdotdiv = document.querySelectorAll(".three-dot-onclick-div")

feeddots.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (feeddots[index].classList.contains('highlight-threedot')) {
            var show = false
        }
        else {
            var show = true
        }
        for (var i = 0; i < feeddots.length; i++) {
            if (feeddots[i]) {
                feeddots[i].classList.remove('highlight-threedot');
                onclickdotdiv[i].classList.remove('showdiv');
            }
        }
        if (show) {
            feeddots[index].classList.add('highlight-threedot');
            onclickdotdiv[index].classList.add('showdiv');

        }
        else {
            feeddots[index].classList.remove('highlight-threedot');
            onclickdotdiv[index].classList.remove('showdiv');
        }
    });
});
if (document.querySelectorAll(".threedotclick")) {
    window.addEventListener('click', function (event) {
        if (!(event.target.classList.contains('onclick-hide'))) {
            if (!(event.target.classList.contains('three-dot-onclick-div'))) {
                hidediv();
            }
        }
    });
}

function hidediv() {
    for (var i = 0; i < feeddots.length; i++) {
        onclickdotdiv[i].classList.remove('showdiv');
        feeddots[i].classList.remove('highlight-threedot');
    }
}


const filled_icon = document.querySelectorAll('.bookmark-icon');

filled_icon.forEach((item, index) => {
    item.addEventListener('click', () => {
        filled_icon[index].classList.toggle("save-filled");
    })
})

const opt_notific = document.querySelector(".onclick-notific-three-dot");

function shownotificationopt() {
    opt_notific.classList.toggle("shownotificationopt");
}
if (document.querySelector(".onclick-notific-three-dot")) {
    window.addEventListener('click', function (event) {

        if (!(event.target.classList.contains('haha'))) {
            if (!(event.target.classList.contains('onclick-notific-three-dot'))) {

                hidenotificationopt();
            }
        }
    });
    function hidenotificationopt() {
        if (opt_notific.classList.contains("shownotificationopt")) {
            opt_notific.classList.remove("shownotificationopt");
        }
    }
}
const opt_dot_content = document.querySelectorAll('.inner-onhover-notified-opt');
const opt_dot_content_show_hide = document.querySelectorAll(".onclick-notific-content-three-dot")
opt_dot_content.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (opt_dot_content[index].classList.contains('afterclick')) {
            var show = false
        }
        else {
            var show = true
        }
        for (var i = 0; i < opt_dot_content.length; i++) {
            if (opt_dot_content[i] && opt_dot_content_show_hide[i]) {
                opt_dot_content[i].classList.remove('afterclick');
                opt_dot_content_show_hide[i].classList.remove('showonctd');
            }
        }
        if (show) {
            opt_dot_content[index].classList.add('afterclick');
            opt_dot_content_show_hide[index].classList.add('showonctd');

        }
        else {
            opt_dot_content[index].classList.remove('afterclick');
            opt_dot_content_show_hide[index].classList.remove('showonctd');
        }
    });
});
if (document.querySelectorAll('.inner-onhover-notified-opt')) {
    window.addEventListener('click', function (event) {
        if ((document.querySelectorAll('.inner-onhover-notified-opt'))) {
            if (!(event.target.classList.contains('onclick-notific-content-three-dot'))) {
                if (!(event.target.classList.contains("hehe"))) {
                    hidenoticontentopt();
                }
            }
        }
    })
}


function hidenoticontentopt() {
    for (var i = 0; i < opt_dot_content.length; i++) {
        if (opt_dot_content[i] && opt_dot_content_show_hide[i]) {
            opt_dot_content[i].classList.remove('afterclick');
            opt_dot_content_show_hide[i].classList.remove('showonctd');
        }
    }
}
const feed_opt = document.querySelectorAll(".three-dots-menu");
const feed_opt_change = document.querySelectorAll(".three-dot-onclick-div");
const feed_opt_after_des = document.querySelectorAll(".design-three-dot-onclick-div")

feed_opt.forEach((item, index) => {
    item.addEventListener('click', () => {
        var rect = item.getBoundingClientRect();
        console.log("Distance from the top of the viewport: " + rect.top);
        console.log("Distance from the bottom of the viewport: " + rect.bottom);
        if (rect.top >= 350) {
            feed_opt_change.forEach((changeItem) => {
                changeItem.classList.remove("ifbelow");
            });
            feed_opt_after_des.forEach((changeItem) => {
                changeItem.classList.remove("ifbelow");
            });
            feed_opt_change[index].classList.add("ifbelow");
            feed_opt_after_des[index].classList.add("ifbelow");
        }
        else {
            feed_opt_change[index].classList.remove("ifbelow");
            feed_opt_after_des[index].classList.remove("ifbelow");

        }


    });
});

const contentdiv = document.querySelectorAll(".onclick-ip-setting");
const accordionbtn = document.querySelectorAll(".design-ip-setting");
const acc_icon_rot = document.querySelectorAll(".accordion-icon");
accordionbtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        contentdiv[index].classList.toggle("openacc");
        acc_icon_rot[index].classList.toggle("rotateacc")

    });
});

const navitem = document.querySelectorAll(".navbar-bottom-border");

navitem.forEach((item, index) => {
    item.addEventListener('click', () => {
        navitem.forEach(content => {
            content.classList.remove("ifactive");
        });
        navitem[index].classList.add("ifactive");
    });
});

const comments = document.querySelectorAll(".comments");

comments.forEach((item) => {
    const Cmntacc = item.querySelector(".cmntacc");
    const roticon = item.querySelector(".cmnttoroticon");
    if (Cmntacc) {
        Cmntacc.addEventListener("click", () => {
            roticon.classList.toggle("roticon");
            const belowcmnts = item.querySelectorAll(".recursion-comment");
            belowcmnts.forEach(cmntcontent => {
                cmntcontent.classList.toggle("expandCmnt");
                if (!(cmntcontent.classList.contains("expandCmnt"))) {
                    cmntcontent.style.maxHeight = cmntcontent.scrollHeight + "px";
                } else {
                    cmntcontent.style.maxHeight = "0";
                }
            })
        })
    }

})


const clickfindsavelist = document.querySelector("#clickfindsavelist");
const findsave = document.querySelectorAll(".bookmark-icon");
const show_hide_save = document.querySelectorAll(".saved-scroller-child");
if (clickfindsavelist) {
    clickfindsavelist.addEventListener("click", () => {
        findsave.forEach((item, index) => {
            if (item.classList.contains("save-filled")) {
                show_hide_save[index].style.display = "block";
            }
            else {
                show_hide_save[index].style.display = "none";
            }
        })
    })
}


const clickbtnunread = document.querySelector(".inner-unread");
const clickbtnall = document.querySelector(".inner-all");
const notificationChild = document.querySelectorAll(".notification-bar");
const notificusername = document.querySelectorAll(".notified-user-name");
const notificdesc = document.querySelectorAll(".notified-text");
const notifictime = document.querySelectorAll(".notified-time");
const readallonce = document.querySelector(".readallonce");
const wholenotific = document.querySelector(".notification-scroller");
const no_unread_notification = document.querySelector(".no-unread-notification");
if (notificationChild) {
    notificationChild.forEach((item, index) => {
        item.addEventListener("click", () => {
            item.classList.add("read");
            notificusername[index].classList.add("readed");
            notificdesc[index].classList.add("readed");
            notifictime[index].classList.add("readed");
        })
    })
}
if (clickbtnunread) {
    clickbtnunread.addEventListener("click", () => {
        clickbtnunread.classList.add("activenotification");
        clickbtnall.classList.remove("activenotification");
        const unreadNotifications = document.querySelectorAll('.notification-bar:not(.read)');

        if (unreadNotifications.length === 0) {
            console.log('All notifications are read');
            wholenotific.style.display = "none";
            no_unread_notification.style.display = "flex";
        } else {
            console.log("There are unread notifications");
            wholenotific.style.display = "block";
            no_unread_notification.style.display = "none";
        }
        notificationChild.forEach(item => {
            if (!(item.classList.contains("read"))) {
                item.style.display = "flex";
            }
            else {
                item.style.display = "none";
            }

        })
    })
}

if (clickbtnall) {
    clickbtnall.addEventListener("click", () => {
        wholenotific.style.display = "block";
        no_unread_notification.style.display = "none";
        clickbtnunread.classList.remove("activenotification");
        clickbtnall.classList.add("activenotification");
        notificationChild.forEach(item => {
            item.style.display = "flex";
        })
    })
}

if (readallonce) {
    readallonce.addEventListener("click", () => {
        notificationChild.forEach((item, index) => {
            item.classList.add("read");
            notificusername[index].classList.add("readed");
            notificdesc[index].classList.add("readed");
            notifictime[index].classList.add("readed");
        })
    })

}

const userInputPost = document.querySelector(".taking-post-input");
const triggerInputpost = document.querySelector(".post-input");
const closeInputpost = document.querySelector(".close-post-icon");
const post_text = document.querySelector("#post-text-area");
if (userInputPost) {
    triggerInputpost.addEventListener("click", () => {
        userInputPost.classList.toggle("shInputpost");
        post_text.focus();

    })

    closeInputpost.addEventListener("click", () => {
        userInputPost.classList.remove("shInputpost");
    })
}
const imgvid_input = document.querySelector("#upload-img-vid");
function handleFileSelect00(input) {
    imgvid_input.style.display = "none";
    var files = input.files;
    var preview = document.getElementById('previewupload');

    if (files && files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.innerHTML = '';

            if (input.files[0].type.match('image.*')) {
                var img = new Image();
                img.src = e.target.result;
                preview.appendChild(img);
            } else if (input.files[0].type.match('video.*')) {
                var video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                video.autoplay = true;
                preview.appendChild(video);
            }
        }

        reader.readAsDataURL(files[0]);
    } else {
        preview.innerHTML = '';
    }
}

function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

if (document.querySelector("#upload-btn")) {
    document.addEventListener("DOMContentLoaded", () => {
        const uploadbtn = document.querySelector("#upload-btn");
        const uploadForm = document.querySelector("#post-upload-form");
        const file = document.querySelector("#upload")

        uploadForm.addEventListener("input", () => {
            var isValid = isFormValid(uploadForm);
            uploadbtn.disabled = !isValid;
            if (isValid) {
                uploadbtn.classList.add("activeupload");
            }
            else {
                uploadbtn.classList.remove("activeupload");
            }
        });



        function isFormValid(uploadForm) {
            const post_text = document.querySelector("#post-text-area").value;
            if (post_text.trim() !== "" || file.files.length > 0) {
                return true;
            } else {
                return false;
            }


        }
    });
}
const addtoicon = document.querySelectorAll('.add-to-icon-div');
const postInput = document.querySelector(".inner-taking-post");
const imgvidField = document.querySelector(".img-vid-field");
const closeimgvidField = document.querySelector(".close-photo-input");

if (addtoicon) {
    addtoicon.forEach((item) => {
        item.addEventListener("click", () => {
            postInput.style.height = "600px"
        })
    })
    if (addtoicon[0]) {
        addtoicon[0].addEventListener("click", () => {
            document.querySelector(".for-default-full").style.height = "auto";
            imgvidField.classList.add("showhidefield");
        })
    }

}
if (closeimgvidField) {
    closeimgvidField.addEventListener("click", () => {
        var file = document.querySelector("#upload")
        imgvidField.classList.remove("showhidefield")
        postInput.style.height = "500px"
        document.querySelector(".for-default-full").style.height = "100%";
        file.value = null;
        var preview = document.getElementById('previewupload');
        if (file.files.length == 0) {
            preview.innerHTML = "";
            imgvid_input.style.display = "flex";
            const uploadbtn = document.querySelector("#upload-btn");
            const post_text = document.querySelector("#post-text-area").value;
            if (post_text.trim() !== "" || file.files.length > 0) {
                uploadbtn.disabled = false;
                uploadbtn.classList.add("activeupload");
            } else {
                uploadbtn.disabled = true;
                uploadbtn.classList.remove("activeupload");
            }
        }
    })
}

const openwithimgfield = document.querySelector(".openwithimgfield");
if (openwithimgfield) {
    openwithimgfield.addEventListener("click", () => {
        document.querySelector(".for-default-full").style.height = "auto";
        imgvidField.classList.add("showhidefield");
        postInput.style.height = "600px"
        userInputPost.classList.add("shInputpost");
        post_text.focus();

    })
}

const eventForm = document.querySelector(".eventform");

if (eventForm) {
    const catlisttrigger = document.querySelector(".category-input");
    const Catlist = document.querySelector(".select-category-list");
    const addcustom = document.querySelector(".add-custom");
    const inputcategory = document.querySelector("#InputCategory");
    const selectdefault = document.querySelector(".select-default");
    const litags = Catlist.getElementsByTagName("li");
    const lilarray = []
    catlisttrigger.addEventListener("click", () => {
        Catlist.style.display = "flex";
    })
    addcustom.addEventListener("click", () => {
        if (inputcategory.value.length > 0) {
            inputcategory.value = '';
        }
        inputcategory.style.display = "block";
        Catlist.style.display = "none";
        selectdefault.style.display = "none";
        inputcategory.focus();
    })
    window.addEventListener("click", function (event) {
        if (!(event.target.classList.contains("addcustom")) && !(event.target.classList.contains("InputCategory")) && inputcategory.value.length == 0 && inputcategory.style.display == "block") {
            resettodefault();
        }
    })
    function resettodefault() {
        inputcategory.style.display = "none";
        Catlist.style.display = "none";
        selectdefault.style.display = "block";
    }

    for (var i = 0; i < litags.length; i++) {
        if (!(i == 0)) {
            lilarray.push(litags[i])
        }
    }
    lilarray.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (inputcategory.style.display == "block") {
                inputcategory.value == '';
                inputcategory.style.display == "none"
            }
            selectdefault.innerText = lilarray[index].innerText;
            inputcategory.value = lilarray[index].innerText;
            console.log(inputcategory.value)
            eventcategory.innerText = "( " + inputcategory.value + " )";
            Catlist.style.display = "none";
        })
    })

    const nextBtn = document.querySelector("#Next-btn");
    const nextBtn2 = document.querySelector("#Next-btn-2");
    const backBtn = document.querySelector("#Back-btn");
    const detailpage = document.querySelector(".details");
    const dateandloginpage = document.querySelector(".dates-location");
    const guestspage = document.querySelector(".guests")
    const chip_text = document.querySelectorAll(".chip-text");
    const chip_line = document.querySelectorAll(".chip-actual");
    const panneltext = document.querySelector(".pannel-head-text");
    const pannelicon = document.querySelector(".pannel-icons");

    nextBtn.addEventListener("click", () => {

        if (detailpage.classList.contains("currentpage")) {
            detailpage.classList.remove("currentpage");
            detailpage.classList.add("detailanimate");
            dateandloginpage.classList.add("datelocanimate");
            dateandloginpage.classList.add("currentpage");
            chip_text[0].classList.remove("activechip");
            chip_line[0].classList.remove("activechip");
            chip_text[1].classList.add("activechip");
            chip_line[1].classList.add("activechip");
            panneltext.innerHTML = "<span>" + "When and where will it take place?" + "</span>"
            pannelicon.innerText = "location_on";
        }
        else {
            dateandloginpage.classList.remove("currentpage");
            guestspage.classList.add("currentpage")
            guestspage.classList.add("guestanimate");
            dateandloginpage.classList.add("doubledatelocanimate");
            chip_text[1].classList.remove("activechip");
            chip_line[1].classList.remove("activechip");
            chip_text[2].classList.add("activechip");
            chip_line[2].classList.add("activechip");
            panneltext.innerHTML = "<span>" + "Who should join it?" + "</span>"
            pannelicon.innerText = "group";



        }
        if (!(detailpage.classList.contains("currentpage"))) {
            backBtn.style.display = "block";
        }
        else {
            backBtn.style.display = "none";
        }
        if (guestspage.classList.contains("currentpage")) {
            nextBtn2.style.display = "block";
            nextBtn.style.display = "none";
        }
    });
    backBtn.addEventListener("click", () => {

        if (dateandloginpage.classList.contains("currentpage")) {
            detailpage.classList.add("currentpage");
            detailpage.classList.remove("detailanimate");
            dateandloginpage.classList.remove("datelocanimate");
            dateandloginpage.classList.remove("currentpage");
            chip_text[0].classList.add("activechip");
            chip_line[0].classList.add("activechip");
            chip_text[1].classList.remove("activechip");
            chip_line[1].classList.remove("activechip");
            panneltext.innerHTML = "<span>" + "What's your event about?" + "</span>"
            pannelicon.innerText = "event";

        }
        else {
            dateandloginpage.classList.add("currentpage")
            guestspage.classList.remove("currentpage");
            guestspage.classList.remove("guestanimate");
            dateandloginpage.classList.remove("doubledatelocanimate");
            dateandloginpage.classList.add("datelocanimate");
            chip_text[1].classList.add("activechip");
            chip_line[1].classList.add("activechip");
            chip_text[2].classList.remove("activechip");
            chip_line[2].classList.remove("activechip");
            panneltext.innerHTML = "<span>" + "When and where will it take place?" + "</span>"
            pannelicon.innerText = "location_on";

        }
        if (!(detailpage.classList.contains("currentpage"))) {
            backBtn.style.display = "block";
        }
        else {
            backBtn.style.display = "none";
        }

        nextBtn2.style.display = "none";
        nextBtn.style.display = "block";

    })

    const dttrigger = document.querySelector(".datetrigger");
    const fttrigger = document.querySelector(".fromtime");
    const tttrigger = document.querySelector(".totime");
    const dtonclick = document.querySelector(".onclick-date-time-field");
    const ftonclick = document.querySelector(".onclick-from-time-field");
    const ttonclick = document.querySelector(".onclick-to-time-field");
    const tdcolumn = document.querySelectorAll(".td-column");
    const tdpickedcontent = document.querySelectorAll('.td-child-content');
    const monthspan = document.querySelector(".month-span");
    const dayspan = document.querySelector(".day-span");
    const yearspan = document.querySelector(".year-span");

    const ftcolumn = document.querySelectorAll(".ft-column")
    const ftpickedhour = document.querySelectorAll(".fhourt");
    const ftpickedmin = document.querySelectorAll(".fmint");
    const fhourflash = document.querySelector(".fromhour-span");
    const fminflash = document.querySelector(".fromminutes-span");

    const ttcolumn = document.querySelectorAll(".tt-column");
    const ttpickedhour = document.querySelectorAll(".thourt");
    const ttpickedmin = document.querySelectorAll(".tmint");
    const thourflash = document.querySelector(".tohour-span");
    const tminflash = document.querySelector(".tominutes-span");

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthAbbreviation = monthNames[currentMonthIndex];
    const currentDay = currentDate.getDate();
    monthspan.innerText = currentMonthAbbreviation;
    dayspan.innerText = currentDay;
    yearspan.innerText = currentYear;
    const insertdate = document.querySelector(".insertdate");
    const inserttimefh = document.querySelector(".inserttimefh");
    const inserttimefm = document.querySelector(".inserttimefm");
    const fampm = document.querySelector(".fampm");
    const inserttimeth = document.querySelector(".inserttimeth");
    const inserttimetm = document.querySelector(".inserttimetm");
    const tampm = document.querySelector(".tampm");
    const Year = document.querySelector("#year");
    const Month = document.querySelector("#month");
    const Day = document.querySelector("#day");
    const fromhour = document.querySelector("#fromhour");
    const tohour = document.querySelector("#tohour");
    const fromampm = document.querySelector("#fromampm");
    const fromminutes = document.querySelector("#fromminutes");
    const tominutes = document.querySelector("#tominutes");
    const toampm = document.querySelector("#toampm");


    tdpickedcontent.forEach(content => {
        const tdcolumnpos = tdcolumn[0].getBoundingClientRect();
        if (content.innerText.trim() === currentMonthAbbreviation) {
            const contentpos = content.getBoundingClientRect();
            const toscrollpos = contentpos.top - tdcolumnpos.top - 78;
            tdcolumn[0].scrollTo({
                top: toscrollpos,
                behavior: 'smooth'
            });
        }
        if (content.innerText.trim() == currentDay) {
            const contentpos = content.getBoundingClientRect();
            const toscrollpos = contentpos.top - tdcolumnpos.top - 78;
            tdcolumn[1].scrollTo({
                top: toscrollpos,
                behavior: 'smooth'
            });
        }
        if (content.innerText.trim() == currentDate) {
            const contentpos = content.getBoundingClientRect();
            const toscrollpos = contentpos.top - tdcolumnpos.top - 78;
            tdcolumn[2].scrollTo({
                top: toscrollpos,
                behavior: 'smooth'
            });
        }

    })

    dttrigger.addEventListener("click", () => {
        dtonclick.classList.toggle("activedtpick");
        ftonclick.classList.remove("activedtpick");
        ttonclick.classList.remove("activedtpick");

    })

    fttrigger.addEventListener("click", () => {
        ftonclick.classList.toggle("activedtpick");
        dtonclick.classList.remove("activedtpick");
        ttonclick.classList.remove("activedtpick");

    })
    tttrigger.addEventListener("click", () => {
        ttonclick.classList.toggle("activedtpick");
        dtonclick.classList.remove("activedtpick");
        ftonclick.classList.remove("activedtpick");

    })


    tdcolumn.forEach((item, index) => {
        item.addEventListener("scroll", () => {
            const tdcolumnpos = tdcolumn[0].getBoundingClientRect();
            tdpickedcontent.forEach(content => {
                const tdpickedcontentpos = content.getBoundingClientRect();
                const pickedpos = (tdpickedcontentpos.top - tdcolumnpos.top);
                if (pickedpos >= 76 && pickedpos <= 80) {
                    content.classList.add("pickedtd");
                    if (isScrolling(item)) {
                        if (content.innerText.trim().length == 3) {
                            monthspan.innerText = content.innerText;
                            Month.value = content.innerText;
                            console.log(Month.value)
                        }
                        else if (content.innerText.trim().length <= 2) {
                            dayspan.innerText = content.innerText;
                            Day.value = content.innerText;
                            console.log(Day.value)
                        }
                        else if (content.innerText.trim().length == 4) {
                            yearspan.innerText = content.innerText;
                            Year.value = content.innerText;
                            console.log(Year.value)

                        }
                    }
                    insertdate.textContent = monthspan.textContent + " " + dayspan.textContent + "," + " " + yearspan.textContent;

                }
                else {
                    content.classList.remove("pickedtd");
                }
            })

        })
    })
    function isScrolling(element) {
        return element.scrollTop !== 0 || element.scrollTop !== (element.scrollHeight - element.clientHeight);
    }

    ftcolumn.forEach(item => {
        item.addEventListener("scroll", () => {
            const ftcolumnpos = ftcolumn[0].getBoundingClientRect();
            ftpickedhour.forEach(content => {
                const pickedhourpos = content.getBoundingClientRect();
                const pickedpos = pickedhourpos.top - ftcolumnpos.top;
                if (pickedpos >= 76 && pickedpos <= 80) {
                    content.classList.add("pickedtd");
                    fhourflash.innerText = content.innerText;

                    if (parseInt(content.innerText) > 12) {
                        fampm.textContent = "PM";
                        fromampm.value = "PM";

                        if (parseInt(content.innerText) < 22) {
                            inserttimefh.textContent = "0" + (parseInt(content.innerText) - 12);
                            fromhour.value = inserttimefh.textContent;

                        }
                        else {
                            inserttimefh.textContent = (parseInt(content.innerText) - 12);
                            fromhour.value = inserttimefh.textContent;

                        }
                    }
                    else if (parseInt(content.innerText) == 0) {
                        fampm.textContent = "AM";
                        fromampm.value = "AM";

                        inserttimefh.textContent = 12;
                        fromhour.value = inserttimefh.textContent;


                    }
                    else if (parseInt(content.innerText) == 12) {
                        fampm.textContent = "PM";
                        fromampm.value = "PM";

                        inserttimefh.textContent = 12;
                        fromhour.value = inserttimefh.textContent;

                    }
                    else {
                        inserttimefh.textContent = content.innerText;
                        fampm.textContent = "AM";
                        fromampm.value = "AM";
                        fromhour.value = inserttimefh.textContent;

                    }
                }

                else {
                    content.classList.remove("pickedtd");
                }

            })
            ftpickedmin.forEach(content => {
                const pickedhourpos = content.getBoundingClientRect();
                const pickedpos = pickedhourpos.top - ftcolumnpos.top;
                if (pickedpos >= 76 && pickedpos <= 80) {
                    content.classList.add("pickedtd");
                    fminflash.innerText = content.innerText;
                    inserttimefm.textContent = content.innerText;
                    fromminutes.value = content.innerText;

                }

                else {
                    content.classList.remove("pickedtd");

                }

            })
        })
    })

    ttcolumn.forEach(item => {
        item.addEventListener("scroll", () => {
            const ttcolumnpos = ttcolumn[0].getBoundingClientRect();
            ttpickedhour.forEach(content => {
                const pickedhourpos = content.getBoundingClientRect();
                const pickedpos = pickedhourpos.top - ttcolumnpos.top;
                if (pickedpos >= 76 && pickedpos <= 80) {
                    content.classList.add("pickedtd");
                    thourflash.innerText = content.innerText;
                    if (parseInt(content.innerText) > 12) {
                        tampm.textContent = "PM";
                        toampm.value = "PM";
                        if (parseInt(content.innerText) < 22) {
                            inserttimeth.textContent = "0" + (parseInt(content.innerText) - 12);
                            tohour.value = inserttimeth.textContent;
                        }
                        else {
                            inserttimeth.textContent = (parseInt(content.innerText) - 12);
                            tohour.value = inserttimeth.textContent;

                        }
                    }
                    else if (parseInt(content.innerText) == 0) {
                        tampm.textContent = "AM";
                        toampm.value = "AM";

                        inserttimeth.textContent = 12;
                        tohour.value = inserttimeth.textContent;

                    }
                    else if (parseInt(content.innerText) == 12) {
                        tampm.textContent = "PM";
                        toampm.value = "PM";

                        inserttimeth.textContent = 12;
                        tohour.value = inserttimeth.textContent;

                    }
                    else {
                        inserttimeth.textContent = content.innerText;
                        tohour.value = inserttimeth.textContent;
                        tampm.textContent = "AM";
                        toampm.value = "AM";

                    }
                }

                else {
                    content.classList.remove("pickedtd");
                }

            })
            ttpickedmin.forEach(content => {
                const pickedhourpos = content.getBoundingClientRect();
                const pickedpos = pickedhourpos.top - ttcolumnpos.top;
                if (pickedpos >= 76 && pickedpos <= 80) {
                    content.classList.add("pickedtd");
                    tminflash.innerText = content.innerText;
                    inserttimetm.textContent = content.innerText;
                    tominutes.value = content.innerText;

                }

                else {
                    content.classList.remove("pickedtd");

                }

            })
        })
    })

    const onlyonceicon = document.querySelector(".onlyonceicon");
    const manytimesicon = document.querySelector(".manytimesicon");
    const onlyoncediv = document.querySelector(".onlyoncediv");
    const manytimesdiv = document.querySelector(".manytimes");
    const manytimes_inputs = document.querySelector(".manytimes-inputs");
    const inputfields = manytimesdiv.querySelectorAll('input');
    const displayoccurence = document.querySelector(".displayoccurence");
    const times = document.querySelector("#times");
    const basis = document.querySelector(".insertbasis");
    const occurence = document.querySelector("#Occurences");
    const insertbasisspan = document.querySelector(".insertbasisspan");
    const insertmax = document.querySelector(".insertmax");
    const inserttill = document.querySelector(".inserttill");
    const insertbasisvalue = document.querySelector("#insertbasisvalue")
    const agerestriction = document.querySelector("#agerestriction");

    onlyonceicon.addEventListener("click", () => {
        onlyoncediv.classList.add("choosedOpt");
        manytimesdiv.classList.remove("choosedOpt");
        manytimes_inputs.classList.remove("onpointer");
        displayoccurence.style.display = "none";
        inputfields.forEach(item => {
            item.classList.remove("inputhighlight");
        })

    })
    manytimesicon.addEventListener("click", () => {
        onlyoncediv.classList.remove("choosedOpt");
        manytimesdiv.classList.add("choosedOpt");
        manytimes_inputs.classList.add("onpointer");
        displayoccurence.style.display = "flex";

        inputfields.forEach(item => {
            item.classList.add("inputhighlight");
        })
    })
    times.addEventListener("keyup", () => {
        if (times.value.length > 0) {
            insertmax.textContent = times.value;
        }
        else {
            insertmax.textContent = '';
        }
    })


    const times_input = document.querySelectorAll(".times");
    const adder = document.querySelectorAll(".adder");
    const minus = document.querySelectorAll(".minus");


    adder.forEach((item, index) => {
        item.addEventListener("click", () => {
            let inputValue = parseInt(times_input[index].value);
            if (inputValue >= 0) {
                inputValue++;
            }

            times_input[index].value = inputValue;
            if (times.value.length > 0) {
                insertmax.textContent = times.value;
            }
            else {
                insertmax.textContent = '';
            }
            if (insertbasisspan.textContent.trim() == "day") {
                var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
                inserttill.textContent = currentMonthAbbreviation + " " + (currentDay + tobeaddedindate) + "," + " " + currentYear;
            }
            else if (insertbasisspan.textContent.trim() == "week") {
                var tobeaddedindate = Math.floor(occurence.value / times.value) * 7;
                var condition = tobeaddedindate + currentDay;
                if (condition > 30) {
                    var addup = Math.floor(tobeaddedindate / 30) + 1;
                    inserttill.textContent = monthNames[currentMonthIndex + addup] + " " + (currentDay + tobeaddedindate - 30) + "," + " " + currentYear;
                }
                else {
                    inserttill.textContent = currentMonthAbbreviation + " " + (currentDay + tobeaddedindate) + "," + " " + currentYear;
                }
            }
            else if (insertbasisspan.textContent.trim() == "month") {
                console.log("here")

                var tobeaddedindate = Math.round(occurence.value / times.value) * 1;
                inserttill.textContent = monthNames[currentMonthIndex + tobeaddedindate] + " " + (currentDay) + "," + " " + currentYear;

            }
            else if (insertbasisspan.textContent.trim() == "year") {
                var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
                inserttill.textContent = currentMonthAbbreviation + " " + currentDay + "," + " " + (currentYear + tobeaddedindate);

            }
            else {
                var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
                var multi = tobeaddedindate * 4;
                if (multi > (12 - currentMonthIndex + 1)) {
                    var tobeaddinyear = Math.floor(multi / 12);
                    var tobeaddinmonth = Math.round(multi % 12);
                    inserttill.textContent = monthNames[currentMonthIndex + tobeaddinmonth] + " " + currentDay + "," + " " + (currentYear + tobeaddinyear);

                }
            }
        });
    });

    minus.forEach((item, index) => {
        item.addEventListener("click", () => {
            let inputValue = parseInt(times_input[index].value);
            if (inputValue > 0) {
                inputValue--;
            }
            times_input[index].value = inputValue;
        });
        if (times.value.length > 0) {
            insertmax.textContent = times.value;
        }
        else {
            insertmax.textContent = '';
        }
        if (insertbasisspan.textContent.trim() == "day") {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
            inserttill.textContent = currentMonthAbbreviation + " " + (currentDay + tobeaddedindate) + "," + " " + currentYear;
        }
        else if (insertbasisspan.textContent.trim() == "week") {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 7;
            var condition = tobeaddedindate + currentDay;
            if (condition > 30) {
                var addup = Math.floor(tobeaddedindate / 30) + 1;
                inserttill.textContent = monthNames[currentMonthIndex + addup] + " " + (currentDay + tobeaddedindate - 30) + "," + " " + currentYear;
            }
            else {
                inserttill.textContent = currentMonthAbbreviation + " " + (currentDay + tobeaddedindate) + "," + " " + currentYear;
            }
        }
        else if (insertbasisspan.textContent.trim() == "month") {
            console.log("here")

            var tobeaddedindate = Math.round(occurence.value / times.value) * 1;
            inserttill.textContent = monthNames[currentMonthIndex + tobeaddedindate] + " " + (currentDay) + "," + " " + currentYear;

        }
        else if (insertbasisspan.textContent.trim() == "year") {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
            inserttill.textContent = currentMonthAbbreviation + " " + currentDay + "," + " " + (currentYear + tobeaddedindate);

        }
        else {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
            var multi = tobeaddedindate * 4;
            if (multi > (12 - currentMonthIndex + 1)) {
                var tobeaddinyear = Math.floor(multi / 12);
                var tobeaddinmonth = Math.round(multi % 12);
                inserttill.textContent = monthNames[currentMonthIndex + tobeaddinmonth] + " " + currentDay + "," + " " + (currentYear + tobeaddinyear);

            }
        }
    });

    const physicalicon = document.querySelector(".physicalicon");
    const virtualicon = document.querySelector(".virtualicon");
    const physical = document.querySelector(".physical");
    const virtual = document.querySelector(".online");
    const forphysical = document.querySelector(".forphysical");
    const forvirtual = document.querySelector(".forvirtual");
    const eventaddress = document.querySelector("#eventaddress");
    const urllink = document.querySelector("#urllink")

    physicalicon.addEventListener("click", () => {
        physical.classList.add("locselected");
        virtual.classList.remove("locselected");
        forphysical.classList.add("showforaddress");
        forvirtual.classList.remove("showforaddress");
        urllink.value = '';
    })
    virtual.addEventListener("click", () => {
        physical.classList.remove("locselected");
        virtual.classList.add("locselected");
        forphysical.classList.remove("showforaddress");
        forvirtual.classList.add("showforaddress");
        eventaddress.value = '';
    })

    const basisinput = document.querySelector(".basis-input");
    const basisinputselection = document.querySelector(".basis-selection");
    const basisselectli = basisinputselection.getElementsByTagName("li");
    const displaybasis = document.querySelector(".insertbasis");

    basisinput.addEventListener("click", () => {
        basisinputselection.classList.toggle("openbasisselection");
    });

    for (let i = 0; i < basisselectli.length; i++) {
        basisselectli[i].addEventListener("click", (event) => {
            displaybasis.innerText = event.target.innerText;
            insertbasisvalue.value = event.target.innerText;
            console.log(insertbasisvalue.value)
            basisinputselection.classList.remove("openbasisselection");
            if (displaybasis.innerText.trim() == "Daily") {
                insertbasisspan.textContent = "day";
            }
            else if (displaybasis.innerText.trim() == "Weekly") {
                insertbasisspan.textContent = "week";
            }
            else if (displaybasis.innerText.trim() == "Monthly") {
                insertbasisspan.textContent = "month";
            }
            else if (displaybasis.innerText.trim() == "Yearly") {
                insertbasisspan.textContent = "year";
            }
            else {

                insertbasisspan.textContent = "quarter";
            }
        });
    }
    const tillmonth = document.querySelector("#tillmonth")
    const tillday = document.querySelector("#tillday")
    const tillyear = document.querySelector("#tillyear")
    occurence.addEventListener("keyup", () => {
        if (insertbasisspan.textContent.trim() == "day") {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
            inserttill.textContent = currentMonthAbbreviation + " " + (currentDay + tobeaddedindate) + "," + " " + currentYear;
            tillmonth.value = currentMonthAbbreviation
            tillday.value = currentDay + tobeaddedindate
            tillyear.value = currentYear
        }
        else if (insertbasisspan.textContent.trim() == "week") {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 7;
            var condition = tobeaddedindate + currentDay;
            if (condition > 30) {
                var addup = Math.floor(tobeaddedindate / 30) + 1;
                inserttill.textContent = monthNames[currentMonthIndex + addup] + " " + (currentDay + tobeaddedindate - 30) + "," + " " + currentYear;
                tillmonth.value = monthNames[currentMonthIndex + addup]
                tillday.value = currentDay + tobeaddedindate - 30
                tillyear.value = currentYear
            }
            else {
                inserttill.textContent = currentMonthAbbreviation + " " + (currentDay + tobeaddedindate) + "," + " " + currentYear;
                tillmonth.value = currentMonthAbbreviation
                tillday.value = (currentDay + tobeaddedindate)
                tillyear.value = currentYear
            }
        }
        else if (insertbasisspan.textContent.trim() == "month") {
            var tobeaddedindate = Math.round(occurence.value / times.value) * 1;
            inserttill.textContent = monthNames[currentMonthIndex + tobeaddedindate] + " " + (currentDay) + "," + " " + currentYear;
            tillmonth.value = monthNames[currentMonthIndex + tobeaddedindate]
            tillday.value = currentDay
            tillyear.value = currentYear

        }
        else if (insertbasisspan.textContent.trim() == "year") {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
            inserttill.textContent = currentMonthAbbreviation + " " + currentDay + "," + " " + (currentYear + tobeaddedindate);
            tillmonth.value = currentMonthAbbreviation
            tillday.value = currentDay
            tillyear.value = currentYear + tobeaddedindate


        }
        else {
            var tobeaddedindate = Math.floor(occurence.value / times.value) * 1;
            var multi = tobeaddedindate * 4;
            if (multi > (12 - currentMonthIndex + 1)) {
                var tobeaddinyear = Math.floor(multi / 12);
                var tobeaddinmonth = Math.round(multi % 12);
                inserttill.textContent = monthNames[currentMonthIndex + tobeaddinmonth] + " " + currentDay + "," + " " + (currentYear + tobeaddinyear);
                tillmonth.value = monthNames[currentMonthIndex + tobeaddinmonth]
                tillday.value = currentDay
                tillyear.value = (currentYear + tobeaddinyear)

            }
        }
    })
    const freeicon = document.querySelector(".freeicon");
    const feeicon = document.querySelector(".feeicon");
    const freediv = document.querySelector(".freediv");
    const feediv = document.querySelector(".feediv");
    const entryfee = document.querySelector(".entryfee");
    const insertfee = document.querySelectorAll(".insertfee");
    const valfee = document.querySelector("#Entry-fee");
    freeicon.addEventListener("click", () => {
        freediv.classList.add("selectticket");
        feediv.classList.remove("selectticket");
        entryfee.classList.remove("showforaddress");
        insertfee.forEach(item => {
            item.innerText = "Free tickets";
        })

    })

    feeicon.addEventListener("click", () => {
        freediv.classList.remove("selectticket");
        feediv.classList.add("selectticket");
        entryfee.classList.add("showforaddress");
        entryfee.querySelector('input').focus();

    })

    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('checkbox1').checked = true;
    });

    document.addEventListener("DOMContentLoaded", function () {
        const inputContainer = document.querySelector(".input-add");
        const specialguestContainer = document.querySelector(".special-guest-design");

        inputContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("todeleteicon")) {
                const deletable = event.target.closest(".Input-guest.deletable");
                if (deletable) {
                    const associatedSpecialDiv = specialguestContainer.querySelector(".guest-name-display");
                    if (associatedSpecialDiv) {
                        associatedSpecialDiv.remove();
                    }
                    deletable.remove();
                }
            }
        });

        const addGuestInput = document.querySelector(".addinputtrigger");
        addGuestInput.addEventListener("click", function () {
            // Creating new input
            const newDiv = document.createElement("div");
            newDiv.classList.add("Input-guest", "deletable");
            const newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("placeholder", "Add special guest (if any)");
            newInput.classList.add("Inputguest");

            // Creating input delete icon
            const newIcon = document.createElement("div");
            newIcon.classList.add("design-delete-icon");
            const newSpan = document.createElement("span");
            newSpan.classList.add("material-symbols-outlined", "todeleteicon");
            newSpan.innerText = "close";

            //creating new special guest name
            const newspecialDiv = document.createElement("div");
            newspecialDiv.classList.add("guest-name-display");

            const specialdivchildicon = document.createElement('div');
            specialdivchildicon.classList.add("star-icon");
            const childiconspan = document.createElement("span");
            childiconspan.classList.add("material-symbols-outlined");
            childiconspan.innerText = "star"

            const starname = document.createElement("div");
            starname.classList.add("star-name");
            const starnamespan = document.createElement("span");
            starnamespan.classList.add("insertstarname")
            starnamespan.innerText = "Guest name goes here";

            newDiv.appendChild(newInput);
            newDiv.appendChild(newIcon);
            newIcon.appendChild(newSpan);
            starname.appendChild(starnamespan);
            specialdivchildicon.appendChild(childiconspan);
            newspecialDiv.appendChild(specialdivchildicon);
            newspecialDiv.appendChild(starname);

            inputContainer.appendChild(newDiv);
            specialguestContainer.appendChild(newspecialDiv);

            const guestname = document.querySelectorAll(".Inputguest");
            const insertstarname = document.querySelectorAll(".insertstarname");

            guestname.forEach((item, index) => {
                item.addEventListener("keyup", () => {
                    insertstarname[index].textContent = item.value;
                });
            });
        });

        // Attaching event listener for existing Inputguest elements
        const existingGuestNames = document.querySelectorAll(".Inputguest");
        const existingInsertStarNames = document.querySelectorAll(".insertstarname");

        existingGuestNames.forEach((item, index) => {
            item.addEventListener("keyup", () => {
                existingInsertStarNames[index].innerText = item.value;
            });
        });
    });

    const img_input = document.querySelector(".preview-card-img-label");
    function handleFileSelect(input) {
        img_input.style.display = "none";
        var files = input.files;
        var preview = document.querySelectorAll('.preview');

        preview.forEach((item) => {
            if (files && files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    item.innerHTML = '';

                    if (input.files[0].type.match('image.*')) {
                        var img = new Image();
                        img.src = e.target.result;
                        item.appendChild(img);
                    } else if (input.files[0].type.match('video.*')) {
                        var video = document.createElement('video');
                        video.src = e.target.result;
                        video.controls = true;
                        item.appendChild(video);
                    }
                }

                reader.readAsDataURL(files[0]);
            } else {
                item.innerHTML = '';
            }
        })

    }

    const Formevent = document.querySelector("#Formevent");
    const Inputtitle = document.querySelector("#Inputtitle");
    const tobeinserted = document.querySelector(".tobeinserted");
    const onhovertitle = document.querySelector(".onhoverinsertingtitle");
    const eventcategory = document.querySelector(".onhoverinsertingcat");
    const TextAreaDesc = document.querySelector("#TextAreaDesc");
    const onhoverdesc = document.querySelector(".onhoverinsertingdes");
    const insertaddress = document.querySelector(".insertaddress");



    Formevent.addEventListener("keyup", () => {
        if (!(Inputtitle.value.length == 0)) {
            onhovertitle.innerText = Inputtitle.value
            tobeinserted.innerText = Inputtitle.value;
        }
        else {
            tobeinserted.innerText = '"Event title"';
            onhovertitle.innerText = '"Event title"';
        }
        if (!(inputcategory.value.length == 0)) {
            eventcategory.innerText = "( " + inputcategory.value + " )";
        }
        else {
            eventcategory.innerText = "( " + '"Event category"' + " )";
        }
        if (!(TextAreaDesc.value.length == 0)) {
            onhoverdesc.innerText = TextAreaDesc.value;
        }
        else {
            onhoverdesc.innerText = '"Your event description will shown here"';
        }
        if (feediv.classList.contains("selectticket")) {
            insertfee.forEach(item => {
                item.innerText = valfee.value;
            })

        }
        if (eventaddress.value.length > 0) {
            insertaddress.textContent = eventaddress.value;
        }
        else if (urllink.value.length > 0) {
            insertaddress.innerHTML = "<a href=" + urllink.value + ">" + urllink.value + "</a>";
        }
        else {
            insertaddress.textContent = '"Event Address"';
        }
    })
    const insertrequirement = document.querySelector(".insertrequirement");
    const agecheck = document.querySelectorAll(".agecheck");
    agecheck.forEach((item, index) => {
        item.addEventListener("click", () => {

            if (index == 0) {
                insertrequirement.innerText = "All age group can participate";
            }
            else if (index == 1) {
                insertrequirement.innerText = "Only age group above 13 can participate";
            }
            else if (index == 2) {
                insertrequirement.innerText = "Only age group above 18 can participate";
            }
            else {
                insertrequirement.innerText = "Only age group above 45 can participate";
            }
        })
    })

    document.addEventListener("DOMContentLoaded", () => {
        if (manytimesdiv.classList.contains("choosedOpt")) {
            displayoccurence.style.display = "flex";
        }
        else {
            displayoccurence.style.display = "none";
        }
    })


    const frontcard = document.querySelector(".frontcard");
    const onhovercard = document.querySelector(".onhovercard");
    const cardtrigger = document.querySelector(".event-details-opt");

    frontcard.addEventListener("click", () => {
        frontcard.classList.add("choosedcard", "toanimate");
        onhovercard.classList.remove("choosedcard", "toanimate");
        img_input.style.pointerEvents = "inherit";
    })
    onhovercard.addEventListener("click", () => {
        frontcard.classList.remove("choosedcard", "toanimate");
        onhovercard.classList.add("choosedcard", "toanimate");
        img_input.style.pointerEvents = "none";


    })
    const clspreviewimg = document.querySelector(".clspreviewimg");
    const previewimgfield = document.querySelector("#preview-card-img");
    const previewcardlabel = document.querySelector(".preview-card-img-label");

    clspreviewimg.addEventListener("click", () => {
        previewimgfield.value = null;
        var preview = document.querySelectorAll(".preview");
        preview.forEach(item => {
            item.innerHTML = "";
        })
        previewcardlabel.style.display = "flex";
        console.log(previewimgfield.files.length)
    })
    document.getElementById("Formevent").onsubmit = function () {
        agerestriction.value = document.querySelector('input[name="option"]:checked').value;
    };

}

const storiesdiv = document.querySelector(".stories-div");
if (storiesdiv) {
    const storyscroll = document.querySelector(".story-scroll");
    const storybtn = document.querySelectorAll(".storybtn");
    const storybtnleft = document.querySelector(".stories-btn-left");
    const storybtnright = document.querySelector(".stories-btn-right");
    storybtnleft.addEventListener("click", () => {
        storyscroll.scrollBy(-600, 0);
    })
    storybtnright.addEventListener("click", () => {
        storyscroll.scrollBy(600, 0);

    })
    storybtn.forEach(function (scrollButton) {
        var contentContainer = scrollButton.parentElement.querySelector(".story-scroll");

        contentContainer.addEventListener("scroll", function () {
            // Check if there is scrollable content exceeding the container's width on the left side
            if (contentContainer.scrollLeft > 0) {
                // If there is, show the left button
                storybtnleft.style.display = "flex";
            } else {
                // If not, hide the left button
                storybtnleft.style.display = "none";
            }

            // Check if there is scrollable content exceeding the container's width on the right side
            if (contentContainer.scrollWidth > contentContainer.clientWidth + contentContainer.scrollLeft) {
                // If there is, show the right button
                storybtnright.style.display = "flex";
            } else {
                // If not, hide the right button
                storybtnright.style.display = "none";
            }
        });

        // Initially check if there is scrollable content on page load
        if (contentContainer.scrollLeft > 0) {
            storybtnleft.style.display = "flex";
        } else {
            storybtnleft.style.display = "none";
        }

        if (contentContainer.scrollWidth > contentContainer.clientWidth) {
            storybtnright.style.display = "flex";
        } else {
            storybtnright.style.display = "none";
        }
    });

}
const optforpost = document.querySelector(".openeventform");
const closingeventform = document.querySelector(".closingeventform");

if (optforpost) {
    optforpost.addEventListener('click', () => {
        eventForm.classList.add("showeventform");
    })
    closingeventform.addEventListener('click', () => {
        eventForm.classList.remove("showeventform");
    })
}

const storyform = document.querySelector(".storyform")
if (storyform) {
    const imgwith = document.querySelector(".imgwith");
    const textwith = document.querySelector(".textwith");
    const storyimginputlabel = document.querySelector("#storyimginputlabel");
    const storyimginput = document.querySelector("#storyimginput");
    const previewstory = document.querySelector(".preview-story");
    const bottombtnopt = document.querySelector(".bottombtnopt");
    const discardbtn = document.querySelector(".discard-btn");
    const previewstorytext = document.querySelector(".preview-story-text");
    const storytextform = document.querySelector("#storytext");


    const img_input = document.querySelector(".preview-card-img-label");
    function handleFileSelect1(input) {
        imgwith.style.display = "none";
        textwith.style.display = "none";
        previewstory.style.display = "flex";
        bottombtnopt.style.display = "flex";
        var files = input.files;
        var preview = document.querySelector("#actualpreviewstory");
        console.log(preview)

        if (files && files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (input.files[0].type.match('image.*')) {
                    console.log("i m runn")

                    var img = new Image();
                    img.src = e.target.result;
                    preview.appendChild(img);
                } else if (input.files[0].type.match('video.*')) {
                    console.log("i m runn")

                    var video = document.createElement('video');
                    video.src = e.target.result;
                    video.controls = true;
                    preview.appendChild(video);
                }
            }
            reader.readAsDataURL(files[0]);
        } else {
            preview.innerHTML = '';
        }

    }
    textwith.addEventListener("click", () => {
        imgwith.style.display = "none";
        textwith.style.display = "none";
        previewstorytext.style.display = "flex";
        bottombtnopt.style.display = "flex";
        storytextform.style.display = "block"

    })

    const storytext = document.querySelector(".story-text");
    const storytextinput = document.querySelector("#story-user-text");
    const seemore = document.querySelector(".seemore");
    const overflowdiv = document.querySelector(".st-overflow-div");
    const seemoreicon = document.querySelector(".seemoreicon");
    const seelabel = document.querySelector(".seelabel");

    storytextinput.addEventListener("keyup", () => {
        var inputValue = storytextinput.value;
        console.log(inputValue)
        if (inputValue.length > 168) {
            if (!(overflowdiv.classList.contains("shfull"))) {
                seemore.style.display = "flex";
                var first100th = inputValue.slice(0, 168);
                first100th += "...";
                storytext.textContent = first100th;
                storytext.classList.add("full")
            }
            else {
                storytext.textContent = inputValue;
            }
        }
        else {
            seemore.style.display = "none";
            storytext.textContent = inputValue;
        }
    })
    seemore.addEventListener("click", () => {
        seemore.classList.toggle("animateseemore");
        seemoreicon.classList.toggle("seemoreiconrot");
        overflowdiv.classList.toggle("shfull");
        if (seelabel.textContent.trim() == "See more") {
            seelabel.textContent = "See less";
            storytext.value = '';
            storytext.textContent = storytextinput.value;
        }
        else {
            seelabel.textContent = "See more";
            storytext.value = '';
            storytext.textContent = storytextinput.value.slice(0, 168) + "...";
        }


    })

    discardbtn.addEventListener("click", () => {
        storyimginput.value = null;
        imgwith.style.display = "flex";
        textwith.style.display = "flex";
        bottombtnopt.style.display = "none";
        if (previewstory.style.display = "flex") {
            previewstory.style.display = "none";
            var preview = document.querySelector("#actualpreviewstory");
            preview.innerHTML = '';
        }
        if (previewstorytext.style.display = "flex") {
            previewstorytext.style.display = "none";
            storytextinput.value = '';
            storytextform.style.display = "none"
            storytext.textContent = "Start typing";

        }
    })

    const familyselect = document.querySelector(".familyselect");
    const uldiv = document.querySelector(".uldiv");
    const selectstyle = document.querySelector(".selectstyle");
    const uldivli = selectstyle.querySelectorAll('li');
    const selectedli = document.querySelector(".selectedli")
    const storyfontstyle = document.querySelector("#storyfontstyle")
    console.log(storyfontstyle.value)

    familyselect.addEventListener("click", () => {
        selectstyle.classList.toggle("hsulli");

    })
    uldivli.forEach((item) => {
        item.addEventListener("click", () => {
            selectedli.textContent = item.textContent;
            if (item.textContent == "Casual") {
                storytext.style.fontFamily = " 'Ojuju', sans-serif"
                storyfontstyle.value = " 'Ojuju', sans-serif";
            }
            else if (item.textContent == "Fancy") {
                storytext.style.fontFamily = '"Inconsolata", monospace';
                storyfontstyle.value = '"Inconsolata", monospace';
            }
            else if (item.textContent == "Clean") {
                storytext.style.fontFamily = '"Ojuju", sans-serif';
                storyfontstyle.value = '"Ojuju", sans-serif';
            }
            else if (item.textContent == "Madimi") {
                storytext.style.fontFamily = '"Madimi One", sans-serif';
                storyfontstyle.value = '"Madimi One", sans-serif';
            }
            else {
                storytext.style.fontFamily = '"Roboto Condensed", sans-serif';
                storytext.style.fontWeight = '600';
                storyfontstyle.value = '"Roboto Condensed", sans-serif';
            }
            console.log(storyfontstyle.value)
        })
    })
    window.addEventListener("click", function (event) {
        if (!event.target.closest(".aaicon, .selectedli,.dropicon ,.familyselect")) {
            hideselectstyle();
        }
    })
    function hideselectstyle() {
        selectstyle.classList.remove("hsulli");
    }

    const colorchoose = document.querySelectorAll(".colorchoose");
    const actualpreviewedit = document.querySelector(".actualpreviewedit");
    const storybackground = document.querySelector("#storybackground")
    colorchoose.forEach((item, index) => {
        item.addEventListener("click", () => {
            for (var i = 0; i < colorchoose.length; i++) {
                colorchoose[i].classList.remove("choosedcolour");
            }
            item.classList.add("choosedcolour");
            if (index == 1 || index == 2 || index == 4 || index == 5 || index == 8) {
                storytext.style.color = "var(--richblack)";
            }
            else {
                storytext.style.color = "white";
            }
            var styles = window.getComputedStyle(item);
            var backgroundImage = styles.getPropertyValue("background-image");
            actualpreviewedit.style.backgroundImage = backgroundImage;
            storybackground.value = backgroundImage;
        })
    })
    const closestoryform = document.querySelector(".closestoryform");

    const userstorypost = document.querySelector(".user-story-post");
    if (userstorypost) {
        userstorypost.addEventListener("click", () => {
            storyform.style.display = "block";
        })
        closestoryform.addEventListener("click", () => {
            storyform.style.display = "none";
        })
    }
}

const regularstory = document.querySelectorAll(".regular-story");
const emojiplay = document.querySelectorAll(".emojiplay");
if (emojiplay || regularstory) {
    emojiplay.forEach((item) => {
        item.addEventListener("mouseover", () => {
            emojiplay.forEach(content => {
                content.play()

            })

        })
    })

    emojiplay.forEach((item) => {
        item.addEventListener("mouseout", () => {
            emojiplay.forEach(content => {
                content.pause()

            })

        })
    })

    const vstoryscroll = document.querySelector(".userstoryscroll");
    const vstorybtn = document.querySelectorAll(".viewstorybtn");
    const vstorybtnleft = document.querySelector(".vleft");
    const vstorybtnright = document.querySelector(".vright");
    const clsviewstory = document.querySelector(".clsviewstory");
    const viewstory = document.querySelector(".viewstory");
    const emojisstory = document.querySelector(".emojisstory");
    const vright = document.querySelector(".vright")
    if (vstorybtnleft) {
        vstorybtnleft.addEventListener("click", () => {
            vstoryscroll.scrollBy(-362, 0);
        })
        vstorybtnright.addEventListener("click", () => {
            vstoryscroll.scrollBy(362, 0);

        })
        vstorybtn.forEach(item => {
            var contentContainer = document.querySelector(".userstoryscroll");

            item.addEventListener("click", function () {
                // Check if there is scrollable content exceeding the container's width on the left side
                if (contentContainer.scrollLeft > 0) {
                    // If there is, show the left button
                    vstorybtnleft.style.display = "flex";
                } else {
                    // If not, hide the left button
                    vstorybtnleft.style.display = "none";
                }

                // Check if there is scrollable content exceeding the container's width on the right side
                if (contentContainer.scrollWidth > contentContainer.clientWidth + contentContainer.scrollLeft) {
                    // If there is, show the right button
                    vstorybtnright.style.display = "flex";
                } else {
                    // If not, hide the right button
                    vstorybtnright.style.display = "none";
                }
            });
            if (document.getElementsByClassName("viewstory").style == "flex") {
                if (contentContainer.scrollLeft > 0) {

                    vstorybtnleft.style.display = "flex";
                } else {

                    vstorybtnleft.style.display = "none";
                }

                if (contentContainer.scrollWidth > contentContainer.clientWidth) {
                    vstorybtnright.style.display = "flex";
                } else {
                    vstorybtnright.style.display = "none";
                }
            }
        });

    }
    if (regularstory) {
        regularstory.forEach((item, index) => {
            item.addEventListener("click", () => {
                viewstory.style.display = "flex";
                let t1 = gsap.timeline();
                gsap.from(".userstoryscroll", {
                    duration: 0.4,
                    opacity: 0, visibility: 'visible', y: -100
                });
                gsap.from(emojisstory, {
                    duration: 0.4,
                    opacity: 0, visibility: 'visible', y: 100
                });
                gsap.from(vright, {
                    duration: 0.4,
                    opacity: 0, visibility: 'visible', x: 150
                });


            })
        })
    }
    if (clsviewstory) {
        clsviewstory.addEventListener("click", () => {
            vstoryscroll.scrollTo({
                left: 0,
            })
            viewstory.style.display = "none";
        })
    }



}

var scrollButtons1 = document.querySelectorAll(".mainvideoscrollbtns");
const scrollbtnleft = document.querySelector(".mainvid-left-btn");
const scrollbtnright = document.querySelector(".mainvid-right-btn");
console.log(scrollbtnleft)
console.log(scrollbtnright)

if (scrollButtons1) {


    scrollButtons1.forEach(function (scrollButton) {
        var contentContainer = scrollButton.parentElement.querySelector(".videoscrollar-bar-child");

        contentContainer.addEventListener("scroll", function () {
            // Check if there is scrollable content exceeding the container's width on the left side
            if (contentContainer.scrollLeft > 0) {
                // If there is, show the left button
                scrollbtnleft.classList.add("mainvideobtn");
            } else {
                // If not, hide the left button
                console.log("applying")
                scrollbtnleft.classList.remove("mainvideobtn");
            }

            // Check if there is scrollable content exceeding the container's width on the right side
            if (contentContainer.scrollWidth > contentContainer.clientWidth + contentContainer.scrollLeft) {
                // If there is, show the right button
                scrollbtnright.classList.add("mainvideobtn");
            } else {
                // If not, hide the right button
                scrollbtnright.classList.remove("mainvideobtn");
            }
        });

        // Initially check if there is scrollable content on page load
        if (contentContainer.scrollLeft > 0) {

            scrollbtnleft.classList.add("mainvideobtn");
        } else {

            scrollbtnleft.classList.remove("mainvideobtn");
        }

        if (contentContainer.scrollWidth > contentContainer.clientWidth) {
            scrollbtnright.classList.add("mainvideobtn");
        } else {
            scrollbtnright.classList.remove("mainvideobtn");
        }
    });
}

const postcontent = document.querySelectorAll(".postcontent");
if (postcontent) {
    postcontent.forEach(item => {
        var len = item.textContent.trim().length;
        if (len <= 300) {
            item.style.fontSize = "18px";
        }
        else {
            item.style.fontSize = "16px";
        }
    })
}

const regularstoryfor = document.querySelectorAll(".regular-story");
const userstoryscrollchild = document.querySelectorAll(".userstoryscrollchild");
if (regularstory) {
    regularstory.forEach((item, index) => {
        item.addEventListener("click", () => {
            for (var i = 0; i < regularstory.length; i++) {
                userstoryscrollchild[i].style.display = "none";
            }
            for (var i = index; i < regularstory.length; i++) {
                userstoryscrollchild[i].style.display = "block";
            }
        })
        const vstorybtnleft = document.querySelector(".vleft");
        const vstorybtnright = document.querySelector(".vright");
        var contentContainer = document.querySelector(".userstoryscroll");
        item.addEventListener("click", function () {
            // Check if there is scrollable content exceeding the container's width on the left side
            if (contentContainer.scrollLeft > 0) {
                // If there is, show the left button
                vstorybtnleft.style.display = "flex";
            } else {
                // If not, hide the left button
                vstorybtnleft.style.display = "none";
            }

            // Check if there is scrollable content exceeding the container's width on the right side
            if (contentContainer.scrollWidth > contentContainer.clientWidth + contentContainer.scrollLeft) {
                // If there is, show the right button
                vstorybtnright.style.display = "flex";
            } else {
                // If not, hide the right button
                vstorybtnright.style.display = "none";
            }
        });
    })
}

const checkclickfile = document.querySelector("#storyimginputlabel");
const checkclicktext = document.querySelector(".textwith");
const validatebtntoggle = document.querySelector("#storysubmitbtn");
const storytext = document.querySelector("#storytext");
const storyfile = document.querySelector("#storyfile");
const storyimginput = document.querySelector("#storyimginput");
var checkclick = false;
if (checkclickfile) {
    checkclickfile.addEventListener("click", () => {
        checkclick = true;

    })
    checkclicktext.addEventListener("click", () => {
        checkclick = false;

    })
    validatebtntoggle.addEventListener("click", () => {
        if (checkclick) {
            storyfile.submit();
        }
        else {
            storytext.submit();


        }
    })
}

try {
    const withtexttohandleback = document.querySelectorAll(".withtext");
    const takingvalueforbackground = document.querySelectorAll("#takingvalueforbackground");
    const storytextcontent = document.querySelectorAll(".storytextcontent");
    const takingvalueforstyle = document.querySelectorAll("#takingvalueforstyle");
    const storyinnercontent = document.querySelectorAll(".story-inner-content");
    if (withtexttohandleback) {
        withtexttohandleback.forEach((item, index) => {
            var back = window.getComputedStyle(item);
            withtexttohandleback[index].style.backgroundImage = takingvalueforbackground[index].value;
            if (storytextcontent[index]) {
                storytextcontent[index].style.fontFamily = takingvalueforstyle[index].value;



                storyinnercontent[index].style.backgroundImage = takingvalueforbackground[index].value;


            }
        });
    }
}
catch (error) {
    console.log(error)
}

const clsdetails = document.querySelectorAll(".clsdetails");
const onhovercard = document.querySelectorAll(".onhover-card");
const eventdetailsicon = document.querySelectorAll(".eventdetailsicon");
const eventregister = document.querySelectorAll(".event-register");
const eventcard = document.querySelectorAll(".eventcard");
const eventdetails = document.querySelectorAll(".eventdetails");
const eventicons = document.querySelectorAll(".det-ico-left");
const deticomiddle = document.querySelectorAll(".det-ico-middle");
const deticoright = document.querySelectorAll(".det-ico-right");
const toroticon = document.querySelectorAll(".toroticon");
const eventregisterd = document.querySelectorAll(".eventregisterd");
const whileclosecircle = document.querySelectorAll(".whileclosecircle");
document.addEventListener("DOMContentLoaded", () => {
    eventcard[3].classList.add("expandcard");
    eventdetailsicon[3].classList.add("pointer");
    eventdetails[3].classList.add("showcard")
    eventicons[3].classList.remove("whileclose")
    deticoright[3].classList.add("showico")
    deticomiddle[3].classList.add("showico")
    toroticon[3].classList.add("rotevico");
    eventregisterd[3].classList.add("showcard")
    whileclosecircle[3].style.opacity = 0;

})
eventcard.forEach((item, index) => {
    item.addEventListener("click", () => {
        eventcard.forEach(item => {
            item.classList.remove("expandcard")
        })
        eventdetails.forEach(item => {
            item.classList.remove('showcard')
        })
        deticomiddle.forEach(item => {
            item.classList.remove("showico")
        })
        deticoright.forEach(item => {
            item.classList.remove("showico")
        })
        toroticon.forEach(item => {
            item.classList.remove("rotevico");
        })
        eventicons.forEach(item => {
            item.classList.add("whileclose")
        })
        eventregisterd.forEach(item => {
            item.classList.remove("showcard")
        })
        whileclosecircle.forEach(item => {
            item.style.opacity = "1";
        })
        whileclosecircle[index].style.opacity = 0;
        item.classList.add("expandcard");
        onhovercard.forEach((item, index) => {
            if (!(eventcard[index].classList.contains("expandcard"))) {

                item.classList.remove("openeventdetails")
            }
        })
        eventdetails[index].classList.add("showcard")
        eventicons[index].classList.remove("whileclose")
        deticoright[index].classList.add("showico")
        deticomiddle[index].classList.add("showico")
        toroticon[index].classList.add("rotevico");
        eventregisterd[index].classList.add("showcard")
        eventdetailsicon.forEach((item, index) => {
            item.classList.remove("pointer");
        })
        eventdetailsicon[index].classList.add("pointer");

    })
})
eventdetailsicon.forEach((item, index) => {
    item.addEventListener("click", () => {
        onhovercard[index].classList.add("openeventdetails");
    })
})
clsdetails.forEach((item, index) => {
    item.addEventListener("click", () => {
        onhovercard[index].classList.remove("openeventdetails");
    })
})

try {


    const ssactual = document.querySelectorAll(".ss-actual");
    const feedcomments = document.querySelectorAll(".feed-comments");
    const feedstories = document.querySelectorAll(".feed-stories");
    const suggesttrigger = document.querySelectorAll(".suggesttrigger");
    const storytrigger = document.querySelectorAll(".storytrigger");


    suggesttrigger.forEach((item, index) => {
        item.addEventListener("click", () => {
            feedcomments[index].classList.add("showss");
            feedstories[index].classList.remove("showss")
            suggesttrigger[index].classList.add("openss")
            storytrigger[index].classList.remove("openss")
        })
    })
    storytrigger.forEach((item, index) => {
        item.addEventListener("click", () => {
            feedcomments[index].classList.remove("showss");
            feedstories[index].classList.add("showss")
            suggesttrigger[index].classList.remove("openss")
            storytrigger[index].classList.add("openss")
        })
    })
    const likeicon = document.querySelectorAll(".likeicon");
    const likescount = document.querySelectorAll(".likes-count");

    likeicon.forEach((item, index) => {
        item.addEventListener("click", () => {
            item.classList.toggle("fillicon")
            var val = parseInt(likescount[index].textContent)
            if (item.classList.contains("fillicon")) {
                val++;
            }
            else {
                val--;
            }


            likescount[index].textContent = val;
        })
    })
}
catch (error) {
    console.log(error)
}

try {
    const commentlike = document.querySelectorAll(".commentlike");
    const cmntlikecount = document.querySelectorAll(".cmntlikecount");
    const ownercmntopt = document.querySelectorAll(".ownercmntopt");
    const owner = document.querySelectorAll(".owner");
    const notowner = document.querySelectorAll(".notowner");
    let exclude = null;

    ownercmntopt.forEach((item, index) => {
        item.addEventListener("click", () => {
            ownercmntopt.forEach(item => {
                item.style.display = "none";
            });
            notowner[index].style.display = "none";
            owner[index].style.display = "flex";
            const relout = item.parentNode;
            const foroverflow = relout.parentNode;
            const commentsouter = foroverflow.querySelectorAll(".commentsouter");
            exclude = index;
            const outerarr = [];
            for (var i = 0; i < commentsouter.length; i++) {
                if (i !== exclude) {
                    outerarr.push(i);
                }
            }
            outerarr.unshift(exclude);
            outerarr.forEach(i => {
                foroverflow.appendChild(commentsouter[i]);
            });
            exclude = index;
        });
    });

    commentlike.forEach((item, index) => {
        item.addEventListener("click", () => {
            item.classList.toggle("iflike");
            var val = parseInt(cmntlikecount[index].textContent);
            if (item.classList.contains("iflike")) {
                val++;
            } else {
                val--;
            }
            cmntlikecount[index].textContent = val;
            const outer = item.closest(".commentsouter");
            const foroverflow = outer.parentNode;
            const commentsouter = foroverflow.querySelectorAll(".commentsouter");
            const commentarray = Array.from(commentsouter);
            const individualpostlike = foroverflow.querySelectorAll(".cmntlikecount");
            const likearr = Array.from(individualpostlike).map(like => parseInt(like.textContent));
            if (!(exclude > 0)) {
                const sortedIndexes = likearr.map((_, i) => i)
                    .sort((a, b) => likearr[b] - likearr[a]);

                sortedIndexes.forEach(i => {
                    foroverflow.appendChild(commentarray[i]);
                });

            }
            else {
                let sortedIndexes = likearr.map((_, i) => i)
                    .sort((a, b) => likearr[b] - likearr[a]);
                console.log(sortedIndexes);
                sortedIndexes = sortedIndexes.filter(item => item !== 0);
                console.log(sortedIndexes)
                let element = 0;
                sortedIndexes.unshift(element)
                console.log(sortedIndexes)

                sortedIndexes.forEach(i => {
                    foroverflow.appendChild(commentarray[i]);
                });

            }
        });
    });


}
catch (error) {
    console.log(error)
}


function readPDF(input) {
    // Check if any file is selected
    if (input.files && input.files[0]) {
        // Get the selected file
        var file = input.files[0];
        // Check if the selected file is a PDF
        if (file.type === "application/pdf") {
            var reader = new FileReader();
            // Read the file as ArrayBuffer
            reader.readAsArrayBuffer(file);
            // Once the file is loaded
            reader.onload = function (e) {
                // Initialize PDF.js
                pdfjsLib.getDocument({ data: e.target.result }).promise.then(function (pdf) {
                    // Initialize variables to store PDF content
                    let textContent = '';

                    // Iterate through each page of the PDF
                    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                        // Get the text content of the page
                        pdf.getPage(pageNum).then(function (page) {
                            return page.getTextContent();
                        }).then(function (pageTextContent) {
                            // Concatenate page text content to the overall text content
                            pageTextContent.items.forEach(function (textItem) {
                                textContent += textItem.str + ' ';
                            });
                        }).then(function () {
                            // Display the text content when all pages have been processed
                            if (pageNum === pdf.numPages) {
                                // Display the text content
                                document.getElementById('post-text-area').value = textContent;
                                document.getElementById('post-text-area').style.height = document.getElementById('post-text-area').scrollHeight + 'px';
                            }
                        });
                    }
                }).catch(function (error) {
                    console.error('Error loading PDF:', error);
                });
            };
        } else {
            alert("Please select a PDF file.");
        }
    }
}
//premium
try {
    const table = document.querySelectorAll(".table");
    gsap.from(table, {
        duration: 1,
        opacity: 0, visibility: 'visible', y: -100
    });
}
catch (error) {
    console.log(error)
}



//editpannel
try {
    const textareaedit = document.querySelector("#post-text-area");
    const editclose = document.querySelector(".editclose")
    const editcontainer = document.querySelector(".editcontainer");

    function handleRightClick(event) {
        event.preventDefault();

        gsap.from(editcontainer, {
            duration: 0.3,
            opacity: 0, visibility: 'visible',
            scaleX: 0.9,
            scaleY: 0.9,

        })
        gsap.to(editcontainer, { duration: 0.5, opacity: 1, display: "flex", });
    }

    textareaedit.addEventListener("contextmenu", function (event) {

        handleRightClick(event);

    });
    editclose.addEventListener("click", () => {
        gsap.to(editcontainer, { duration: 0.5, opacity: 0, display: "none", });
    })
    const wrapper = document.querySelector(".editcontainer"),
        header = wrapper.querySelector(".drag");
    function onDrag({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);
        wrapper.style.left = `${leftVal + movementX}px`;
        wrapper.style.top = `${topVal + movementY}px`;
    }
    header.addEventListener("mousedown", () => {
        header.classList.add("active");
        header.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", () => {
        header.classList.remove("active");
        header.removeEventListener("mousemove", onDrag);
    });

    const subtractfs = document.querySelector(".subtractfs");
    const addfs = document.querySelector(".addfs");
    const editfontsize = document.querySelector("#editfontsize");

    subtractfs.addEventListener("click", () => {
        var val = parseInt(editfontsize.value);
        val--;
        editfontsize.value = val;
    })
    addfs.addEventListener("click", () => {
        var val = parseInt(editfontsize.value);
        val++;
        editfontsize.value = val;
    })

    const bold = document.querySelector(".bold");
    bold.addEventListener("click", () => {
        boldText();
    })
    function boldText() {
        var textarea = document.getElementById("post-text-area");
        var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        var newText = "<b>" + selectedText + "</b>";
        var beforeText = textarea.value.substring(0, textarea.selectionStart);
        var afterText = textarea.value.substring(textarea.selectionEnd);
        textarea.value = beforeText + newText + afterText;
    }
}
catch (error) {
    console.log(error)
}

try {
    const openwellbeing = document.querySelector(".openwellbeing");
    const wellbeingwhole = document.querySelector(".wellbeingwhole");
    const innerwellbeing = document.querySelector(".innerwellbeing");
    openwellbeing.addEventListener("click", () => {
        var t1 = gsap.timeline();
        t1.to(wellbeingwhole, {
            duration: 0.1,
            opacity: 1,
            visibility: 'visible',
            display: 'flex',
        })
            .from(innerwellbeing, {
                duration: 0.2,
                x: window.innerHeight,
                y: window.innerHeight,
                scaleX: 0.6,
                scaleY: 0.6

            })
            .to(innerwellbeing, {
                duration: 0.4,
                opacity: 1,
                visibility: 'visible',

            });


    })

    wellbeingwhole.addEventListener("click", function (event) {
        if ((event.target.classList.contains("wellbeingwhole")) || event.target.classList.contains("innerwellbeing")) {
            console.log(event.target.classList)
            var t1 = gsap.timeline();


            t1.to(innerwellbeing, {
                duration: 0.2,
                scaleX: 0.6,
                scaleY: 0.6,
                onComplete: function () {
                    // Animation is complete, revert scaleX and scaleY back to 1
                    gsap.to(innerwellbeing, {
                        duration: 0, // Instantaneous change
                        scaleX: 1,
                        scaleY: 1
                    });
                }


            })
                .to(wellbeingwhole, {
                    duration: 0,
                    display: 'none',
                    opacity: 0,
                    visibility: 'hidden',


                })
        }
    })

}
catch (error) {
    console.log(error)
}