import { loadHTML, loadJs } from './components/commonFunctions.js';

document.addEventListener("DOMContentLoaded", function () {
    loadHTML("components/landingComponent/LandingComponent.html", "landingContainer", () => loadJs("components/landingComponent/LandingComponent.js"));
    loadHTML("components/aboutUs/aboutUs.html", "about-us", () => loadJs("components/aboutUs/aboutUs.js"));
    loadHTML("components/footer/Footer.html", "footer", () => loadJs("components/footer/Footer.js"));
    loadHTML("components/blogs/blogs.html", "blogs", () => loadJs("components/blogs/blogs.js"));
    loadHTML("components/howwework/howwework.html", "howwework", () => loadJs("components/howwework/howwework.js"));
    loadHTML("components/whatwedo/whatwedo.html", "whatwedoAsCompany", () => loadJs("components/whatwedo/whatwedo.js"));
});
