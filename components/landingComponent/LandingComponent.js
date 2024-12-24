import { loadHTML, loadCss, loadJs} from '../commonFunctions.js';

async function loadJsCss() {
    await loadHTML("components/navbar/navbar.html", "page-navbar", () => loadJs("components/navbar/navbar.js"));
    await loadCss("components/landingComponent/LandingComponent.css");
}

loadJsCss();
