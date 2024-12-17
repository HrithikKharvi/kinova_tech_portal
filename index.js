import { loadHTML, loadJs } from './components/commonFunctions.js';

document.addEventListener("DOMContentLoaded", function () {
    loadHTML("components/landingComponent/LandingComponent.html", "landingContainer", () => loadJs("components/landingComponent/LandingComponent.js"));
    loadHTML("components/aboutUs/aboutUs.html", "about-us", () => loadJs("components/aboutUs/aboutUs.js"));
    loadHTML("components/howwework/howwework.html", "howwework", () => loadJs("components/howwework/howwework.js"));
    loadHTML("components/footer/Footer.html", "footer", () => loadJs("components/footer/Footer.js"));
    loadHTML("components/ourServices/OurServices.html", "ourservices", () => loadJs("components/ourServices/OurServices.js"));
    loadHTML("components/whatwedo/whatwedo.html", "whatwedoAsCompany");
});
