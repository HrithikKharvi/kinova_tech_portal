import { loadHTML, loadCss} from '../commonFunctions.js';

async function loadJsCss() {
    await loadHTML("components/navbar/navbar.html", "page-navbar");
    await loadCss("components/landingComponent/LandingComponent.css");
}

loadJsCss();
