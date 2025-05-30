// Fake world data (you can later fetch from APIs like World Bank or REST Countries)
const worldStats = {
  population: "8,045,000,000 people",
  economy: "$104 trillion global GDP (2025 estimate)",
  currency: "Most traded: USD, EUR, CNY",
  exportation: "$22 trillion (Top: China, USA, Germany)",
  importation: "$21.5 trillion (Top: USA, China, Germany)"
};

// Populate the content and create continent boxes
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("populationData").textContent = worldStats.population;
  document.getElementById("economyData").textContent = worldStats.economy;
  document.getElementById("currencyData").textContent = worldStats.currency;
  document.getElementById("exportData").textContent = worldStats.exportation;
  document.getElementById("importData").textContent = worldStats.importation;

  // Top 10 countries by population for each continent
  const continentCountries = {
    Africa: [
      "Nigeria", "Ethiopia", "Egypt", "DR Congo", "Tanzania",
      "South Africa", "Kenya", "Uganda", "Algeria", "Sudan"
    ],
    Asia: [
      "China", "India", "Indonesia", "Pakistan", "Bangladesh",
      "Japan", "Philippines", "Vietnam", "Turkey", "Iran"
    ],
    Europe: [
      "Russia", "Germany", "United Kingdom", "France", "Italy",
      "Spain", "Ukraine", "Poland", "Romania", "Netherlands"
    ],
    "North America": [
      "United States", "Mexico", "Canada", "Guatemala", "Honduras",
      "Cuba", "Haiti", "Dominican Republic", "El Salvador", "Nicaragua"
    ],
    "South America": [
      "Brazil", "Colombia", "Argentina", "Peru", "Venezuela",
      "Chile", "Ecuador", "Bolivia", "Paraguay", "Uruguay"
    ]
  };

  const continents = Object.keys(continentCountries);

  const container = document.getElementById("continentsContainer");
  if (container) {
    container.innerHTML = "";
    continents.forEach(continent => {
      const box = document.createElement("div");
      box.className = "continent-box";
      box.style.border = "1px solid #ccc";
      box.style.padding = "10px";
      box.style.margin = "10px 0";
      box.style.borderRadius = "8px";
      box.style.background = "#f9f9f9";

      const title = document.createElement("h3");
      title.textContent = continent;
      box.appendChild(title);

      // Country dropdown
      const dropdown = document.createElement("select");
      dropdown.innerHTML = `<option value="">Select a country</option>` +
        continentCountries[continent].map(
          country => `<option value="${country}">${country}</option>`
        ).join("");
      box.appendChild(dropdown);

      // Collapsible list for top 10 countries
      const arrow = document.createElement("span");
      arrow.textContent = "▼";
      arrow.style.cursor = "pointer";
      arrow.style.marginRight = "8px";
      arrow.style.userSelect = "none";
      arrow.style.fontWeight = "bold";

      const label = document.createElement("span");
      label.textContent = "Top 10 Countries";

      const header = document.createElement("div");
      header.style.marginTop = "10px";
      header.appendChild(arrow);
      header.appendChild(label);
      box.appendChild(header);

      const list = document.createElement("ul");
      list.style.marginTop = "6px";
      list.style.paddingLeft = "18px";
      list.style.listStyle = "disc";
      continentCountries[continent].forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        list.appendChild(li);
      });
      box.appendChild(list);

      // Collapse/expand logic
      let expanded = true;
      arrow.addEventListener("click", () => {
        expanded = !expanded;
        list.style.display = expanded ? "block" : "none";
        arrow.textContent = expanded ? "▼" : "►";
      });

      // Country display
      const countryDisplay = document.createElement("div");
      countryDisplay.style.marginTop = "8px";
      countryDisplay.style.fontWeight = "bold";
      box.appendChild(countryDisplay);

      // Update display on dropdown change
      dropdown.addEventListener("change", function () {
        countryDisplay.textContent = this.value ? `Selected: ${this.value}` : "";
      });

      container.appendChild(box);
    });
  }
});
