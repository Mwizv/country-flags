fetch("countriesData.json")
    .then(response => response.json())
    .then(countries => {
        console.log(countries[0]);


    const grid = document.querySelector(".grid");

        let html = "";

        countries.forEach(country => {
            const phone = country.idd.root + country.idd.suffixes[0];
            html += `
                <div class="card">
                    <div class="flag-container">
                        <img src="https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png">
                    </div>
                    <h3>${country.name.common}</h3>
                    <p>${country.cca2}, ${country.cca3}, ${country.ccn3}</p>
                    <p>Capital: ${country.capital}, Region: ${country.region}</p>
                    <p>Languages: ${Object.values(country.languages).join(", ")}</p>
                    <p>Telephone code:${phone}, Currency: ${Object.values(country.currencies).map(currency => `${currency.symbol} ${currency.name}`).join(", ")}</p>
                </div>
            `;
        });
    

    grid.innerHTML = html;
});