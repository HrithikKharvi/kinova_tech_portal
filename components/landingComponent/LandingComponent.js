import { loadHTML, loadCss} from '../commonFunctions.js';

console.log("hrere");
async function loadJsCss() {
    await loadHTML("components/navbar/navbar.html", "page-navbar");
    await loadCss("components/landingComponent/LandingComponent.css");
    console.log("herere ");
}

loadJsCss();