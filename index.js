function loadHTML(fileName, componentID) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentID).innerHTML = data;
        }).catch(err => {
            console.log(err);
            console.log(`Error loading component from file ${fileName}`);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML("components/navbar/navbar.html", "page-navbar");
    loadHTML("components/aboutUs/aboutUs.html", "about-us");
    loadHTML("components/whatwedo/whatwedo.html", "whatwedoAsCompany");
});
