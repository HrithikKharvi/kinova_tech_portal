import { loadHTML, loadCss} from '../commonFunctions.js';

console.log("hrere");
async function loadJsCss() {
    await loadCss("components/aboutUs/aboutUs.css");
}

loadJsCss();