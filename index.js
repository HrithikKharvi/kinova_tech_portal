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

loadHTML("navbar/navbar.html", "page-navbar");