const countries = [{
    name: "Afghanistan",
    code: "AF",
    numeric: "004",

    continent: "Asia",
    telephone_code: "+93",
    utc: "+04:00",
    hexcodes: "FFFFFF 000000",
    capital: "Kabul",
    currency: "؋ Afghan Afghani (AFN)"
}];

const grid = document.querySelector(".grid");

countries.forEach(country => {
    grid.innerHTML += `
        <div class="card">
            <img src="https://flagcdn.com/w320/${country.code.toLowerCase()}.png">
            <h3>${country.name} ${country.code} ${country.numeric} </h3>
            <p>${country.continent}, ${country.telephone_code}, UTC${country.utc}, ${country.hexcodes}, ${country.capital}, ${country.currency}</p>
        </div>
    `;
});