import { loadCss } from '../commonFunctions.js';

let visibleBlog = "blog:1";


//html components

let sliderButton = document.getElementsByClassName("slider");

const blogsContents = [
    {
        "blog": {
            "id" : "blog:1",
            "description": "Loading Blog1....",
            "url": ""
        }
    },
    {
        "blog": {
            "id" : "blog:2",
            "description": "Loading Blog2....",
            "url": ""
        }
    },
    {
        "blog": {
            "id" : "blog:3",
            "description": "Loading Blog3....",
            "url": ""
        }
    },
    {
        "blog": {
            "id" : "blog:4",
            "description": "Loading Blog4....",
            "url": ""
        }
    }
]

async function loadJsCss() {
    await loadCss("components/blogsSlider/blogsSlider.css");
}

function createSlideImage(content) {
    let blog = content["blog"];
    let id = blog["id"];
    let description = blog["description"];

    let contentDiv = document.createElement("div");
    contentDiv.id = id;
    contentDiv.innerHTML = description;
    contentDiv.classList.add("slideImage");

    if (!id.includes("1")) {
        contentDiv.hidden = true;
    } else {
        sliderButton[0].style.visibility = "hidden";
        if (blogsContents.length <= 1) sliderButton[1].style.visibility = "hidden";   
    }

    return contentDiv;

}

function loadSliderContents(blogsContents) {
    const slidContiner = document.getElementsByClassName("slidContents")[0];
    for (let data of blogsContents) {
        let slideImage = createSlideImage(data);
        slidContiner.appendChild(slideImage);
    }
}

function showBlog(blogId, show, left=false) {
    let blog = document.getElementById(blogId);
    if (show) {
        blog.hidden = false;
        left ? blog.style.animation = "slideFromLeft 0.5s forwards" : blog.style.animation = "slideFromRight 1s forwards";
        console.log(blog.style.animation);
    } else {
        blog.hidden = true;
        blog.style.animation = "";
    }
}

function handleClicks(event) {
    let target = event.target;
    let id = target.id;
    if (id.toLowerCase().includes("left")) {
         let currentBlogNumber = parseInt(visibleBlog.split(":")[1]);
        currentBlogNumber--;
        showBlog(visibleBlog, false);
        visibleBlog = `blog:${currentBlogNumber}`;
        showBlog(visibleBlog, true, true);
    } else {
        let currentBlogNumber = parseInt(visibleBlog.split(":")[1]);
        
        currentBlogNumber++;
        showBlog(visibleBlog, false);
        visibleBlog = `blog:${currentBlogNumber}`;
        showBlog(visibleBlog, true, false);
    }

    sliderButton[0].style.visibility = "visible";
    sliderButton[1].style.visibility = "visible";
    if (visibleBlog.includes(1)) {
        sliderButton[0].style.visibility = "hidden";
    } else if (visibleBlog.includes(blogsContents.length)) {
        sliderButton[1].style.visibility = "hidden";
    }
}

loadSliderContents(blogsContents);

for (let button of sliderButton) {
    console.log(button);
    button.addEventListener('click', handleClicks);
}

loadJsCss();

