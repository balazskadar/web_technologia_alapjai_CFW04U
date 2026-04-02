const GH_ACCESS_TOKEN = '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';

function loadNavigation() {
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHtml => {
            document.body.insertAdjacentHTML('afterbegin', navbarHtml);
        })
        .catch(err => {
            console.error(err);
            alert('Hiba a menürendszer betöltésekor.');
        });
}

loadNavigation();