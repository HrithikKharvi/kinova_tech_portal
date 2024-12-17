export function loadHTML(fileName, componentID, jsLoadeder) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentID).innerHTML = data;
            jsLoadeder ? jsLoadeder() : "";
        }).catch(err => {
            console.log(err);
            console.log(`Error loading component from file ${fileName}`);
        });
}

export function loadJs(file) {
    const script = document.createElement("script");
    script.src = file;
    script.type = 'module';
    document.body.appendChild(script);
}

export function loadCss(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            const style = document.createElement('style');
            style.textContent = data;
            console.log(document.head.title);
            document.head.appendChild(style);
            console.log("css")
        })
    .catch(err => console.log(err))
}