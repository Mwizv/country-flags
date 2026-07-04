const countries = [{
    name: "Afghanistan",
    code: "AF"
}];

const grid = document.querySelector(".grid");

countries.forEach(country => {
    grid.innerHTML += `
        <div class="card">
            <img src="https://flagcdn.com/w320/${country.code.toLowerCase()}.png">
            <h3>${country.name}</h3>
            <p>${country.code}</p>
        </div>
    `;
});