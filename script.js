// const countries = [{
//     name: "Afghanistan",
//     alpha2: "AF",
//     numeric: "004",

//     continent: "Asia",
//     telephone_code: "+93",
//     utc: "+04:00",
//     hexcodes: "FFFFFF 000000",
//     capital: "Kabul",
//     currency: "؋ Afghan Afghani (AFN)"
// },

// {
//     name: "Albania",
//     alpha2: "AL",
//     numeric: "008",

//     continent: "Europe",
//     telephone_code: "+355",
//     utc: "+01:00 (CET)",
//     dst: "+02:00",
//     hexcodes: "DA291C 000000",
//     capital: "Tirana",
//     currency: "L Albanian lek (ALL)"
// },
// {
//     name: "Algeria",
//     alpha2: "DZ",
//     numeric: "012",

//     continent: "Europe",
//     telephone_code: "+213",
//     utc: "+01:00",
//     hexcodes: "006633 D21034 FFFFFF",
//     capital: "Algiers",
//     currency: "؋ دج Algerian Dinar (DZD)"
// }

// ];

// const grid = document.querySelector(".grid");
// let html = "";

// countries.forEach(country => {
//     html += `
//         <div class="card">
//             <img src="https://flagcdn.com/w320/${country.alpha2.toLowerCase()}.png">
//             <h3>${country.name} ${country.alpha2} ${country.numeric} </h3>
//             <p>${country.continent}, ${country.telephone_code}, UTC${country.utc}, ${country.dst? `UTC${country.dst}` : ""} ${country.hexcodes}, ${country.capital}, ${country.currency}</p>
//         </div>
//     `;
// });
fetch("countriesData.json")
    .then(response => response.json())
    .then(countries => {
        console.log(countries[0]);
    });

    const grid = document.querySelector(".grid");

        let html = "";

        countries.forEach(country => {
            html += `
                <div class="card">
                    <img src="${country.flag}">
                    <h3>${country.name.common}</h3>
                    <p>${country.cca2}, ${country.cca3}, ${country.ccn3}</p>
                </div>
            `;
        });
    

grid.innerHTML = html;