// Fake world data (you can later fetch from APIs like World Bank or REST Countries)
const worldStats = {
  population: "8,045,000,000 people",
  economy: "$104 trillion global GDP (2025 estimate)",
  currency: "Most traded: USD, EUR, CNY",
  exportation: "$22 trillion (Top: China, USA, Germany)",
  importation: "$21.5 trillion (Top: USA, China, Germany)"
};

// Data for 5 continents
const continents = [
    { 
        name: "Africa", 
        population: "1.4B",
        countries: [
            "Nigeria", "Ethiopia", "Egypt", "DR Congo", "Tanzania",
            "South Africa", "Kenya", "Uganda", "Algeria", "Sudan"
        ]
    },
    { 
        name: "Asia", 
        population: "4.7B",
        countries: [
            "China", "India", "Indonesia", "Pakistan", "Bangladesh",
            "Japan", "Philippines", "Vietnam", "Turkey", "Iran"
        ]
    },
    { 
        name: "Europe", 
        population: "750M",
        countries: [
            "Russia", "Germany", "United Kingdom", "France", "Italy",
            "Spain", "Ukraine", "Poland", "Romania", "Netherlands"
        ]
    },
    { 
        name: "North America", 
        population: "600M",
        countries: [
            "United States", "Mexico", "Canada", "Guatemala", "Honduras",
            "Cuba", "Haiti", "Dominican Republic", "El Salvador", "Nicaragua"
        ]
    },
    { 
        name: "South America", 
        population: "430M",
        countries: [
            "Brazil", "Colombia", "Argentina", "Peru", "Venezuela",
            "Chile", "Ecuador", "Bolivia", "Paraguay", "Uruguay"
        ]
    },
    { 
        name: "Middle East",
        population: "480M",
        countries: [
            "Turkey", "Iran", "Iraq", "Saudi Arabia", "Yemen",
            "Syria", "United Arab Emirates", "Israel", "Jordan", "Lebanon"
        ]
    }
];

const countryPopulations = {
    "Nigeria": "223M", "Ethiopia": "126M", "Egypt": "112M", "DR Congo": "102M", "Tanzania": "67M",
    "South Africa": "60M", "Kenya": "55M", "Uganda": "48M", "Algeria": "45M", "Sudan": "48M",
    "China": "1.41B", "India": "1.40B", "Indonesia": "277M", "Pakistan": "240M", "Bangladesh": "173M",
    "Japan": "124M", "Philippines": "117M", "Vietnam": "98M", "Turkey": "85M", "Iran": "89M",
    "Russia": "144M", "Germany": "84M", "United Kingdom": "68M", "France": "65M", "Italy": "59M",
    "Spain": "48M", "Ukraine": "36M", "Poland": "41M", "Romania": "19M", "Netherlands": "18M",
    "United States": "339M", "Mexico": "128M", "Canada": "39M", "Guatemala": "18M", "Honduras": "10M",
    "Cuba": "11M", "Haiti": "11M", "Dominican Republic": "11M", "El Salvador": "6M", "Nicaragua": "7M",
    "Brazil": "216M", "Colombia": "52M", "Argentina": "46M", "Peru": "34M", "Venezuela": "28M",
    "Chile": "19M", "Ecuador": "18M", "Bolivia": "12M", "Paraguay": "7M", "Uruguay": "3M",
    "Iraq": "45M", "Saudi Arabia": "36M", "Yemen": "34M", "Syria": "23M", "United Arab Emirates": "9M",
    "Israel": "9M", "Jordan": "11M", "Lebanon": "5M"
};

const countryEconomies = {
    "United States": "$28T", "China": "$19T", "Japan": "$4.9T", "Germany": "$4.5T", "India": "$3.7T",
    "United Kingdom": "$3.4T", "France": "$3.1T", "Italy": "$2.3T", "Brazil": "$2.1T", "Canada": "$2.1T",
    // Add more as needed, or use "Unknown" for others
};

const countryExportations = {
    "China": "$3.6T", "United States": "$2.1T", "Germany": "$1.7T", "Japan": "$757B", "Netherlands": "$723B",
    "South Korea": "$644B", "Italy": "$626B", "Hong Kong": "$609B", "France": "$617B", "Mexico": "$593B",
    "Brazil": "$340B", "India": "$453B", "Russia": "$491B", "Canada": "$598B", "United Kingdom": "$468B",
    // Add more or use "Unknown"
};

const countryImportations = {
    "United States": "$3.4T", "China": "$2.7T", "Germany": "$1.6T", "Japan": "$897B", "United Kingdom": "$824B",
    "France": "$818B", "Netherlands": "$735B", "Italy": "$689B", "Hong Kong": "$668B", "South Korea": "$731B",
    "India": "$723B", "Mexico": "$604B", "Canada": "$631B", "Russia": "$379B", "Brazil": "$272B",
    // Add more or use "Unknown"
};

// Populate the content and create continent boxes
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('continentsContainer');
    if (!container) return;

    // Clear container
    container.innerHTML = "";

    // --- Render continent cards ---
    continents.forEach(continent => {
        const div = document.createElement('div');
        div.className = 'continent-box';
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 10px 10px 0";
        div.style.borderRadius = "8px";
        div.style.background = "#f9f9f9";
        div.style.display = "inline-block";
        div.style.verticalAlign = "top";

        div.innerHTML = `
            <h3>${continent.name}</h3>
            <p><strong>Population:</strong> <span class="number">${continent.population}</span></p>
        `;

        // Dropdown for countries
        const dropdown = document.createElement('select');
        dropdown.style.paddingRight = "24px";
        dropdown.style.background = "url('data:image/svg+xml;utf8,<svg fill=\"%23333\" height=\"16\" viewBox=\"0 0 24 24\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>') no-repeat right 8px center/16px 16px";
        dropdown.innerHTML = `<option value="">Select a country</option>` +
            continent.countries.map(
                country => `<option value="${country}">${country}</option>`
            ).join("");
        div.appendChild(dropdown);

        // Display selected country info
        const countryDisplay = document.createElement('div');
        countryDisplay.style.marginTop = "8px";
        countryDisplay.style.fontWeight = "bold";
        div.appendChild(countryDisplay);

        dropdown.addEventListener("change", function () {
            if (this.value) {
                const pop = countryPopulations[this.value] || "Unknown";
                const eco = countryEconomies[this.value] || "Unknown";
                const exportation = countryExportations[this.value] || "Unknown";
                const importation = countryImportations[this.value] || "Unknown";
                const currency = worldStats.currency;
                const now = new Date();
                const localTime = now.toLocaleString();

                countryDisplay.innerHTML = `
                    <div><span style="font-size:1.2em;">🌍</span> Population: <span class="number-blue">${pop}</span></div>
                    <div><span style="font-size:1.2em;">💰</span> Economy: <span class="number-blue">${eco}</span></div>
                    <div><span style="font-size:1.2em;">📦</span> Exportation: <span class="number-blue">${exportation}</span></div>
                    <div><span style="font-size:1.2em;">🛬</span> Importation: <span class="number-blue">${importation}</span></div>
                    <div><span style="font-size:1.2em;">💱</span> Currency: <span class="number-blue">${currency}</span></div>
                    <div><span style="font-size:1.2em;">⏰</span> Local Time: <span class="number-blue">${localTime}</span></div>
                `;
            } else {
                countryDisplay.textContent = "";
            }
        });

        container.appendChild(div);
    });

    // --- Add info cards below continent cards ---
    const infoData = [
        { label: "Population", value: "", icon: "🌍", resultId: "worldPopulationResult" },
        { label: "Economy", value: worldStats.economy, icon: "💰" },
        { label: "Exportation", value: worldStats.exportation, icon: "📦" },
        { label: "Importation", value: worldStats.importation, icon: "🛬" },
        { label: "Currencies", value: worldStats.currency, icon: "💱" },
        { label: "Current Time", value: "", icon: "⏰", id: "worldTime" }
    ];

    // Create a wrapper for info cards
    const infoWrapper = document.createElement('div');
    infoWrapper.style.display = "flex";
    infoWrapper.style.flexWrap = "wrap";
    infoWrapper.style.marginTop = "24px";
    infoWrapper.style.gap = "12px";

    infoData.forEach(info => {
        const card = document.createElement('div');
        card.style.border = "1px solid #bbb";
        card.style.borderRadius = "8px";
        card.style.background = "#fffbe7";
        card.style.padding = "14px 18px";
        card.style.minWidth = "180px";
        card.style.maxWidth = "180px";
        card.style.marginRight = "8px";
        card.style.marginBottom = "8px";
        card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.04)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "flex-start";
        card.innerHTML = `
            <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.6em">${info.icon}</span>
                <span style="margin-left:auto;">
                    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#333" d="M7 10l5 5 5-5z"/></svg>
                </span>
            </div>
            <div style="font-weight:bold;margin-top:4px">${info.label}</div>
            <div id="${info.id ? info.id : ''}" style="margin-top:2px">${info.value}</div>
            ${info.resultId ? `<div id="${info.resultId}" style="margin-top:10px;color:#1976d2;font-weight:bold;"></div>` : `<div class="info-country-result" style="margin-top:10px;color:#1976d2;font-weight:bold;"></div>`}
        `;
        infoWrapper.appendChild(card);
    });

    // Append info cards below continent cards
    container.parentNode.appendChild(infoWrapper);

    // --- Update World Population card on country select ---
    document.querySelectorAll('.continent-box select').forEach(dropdown => {
        dropdown.addEventListener("change", function () {
            const worldPopDiv = document.getElementById('worldPopulationResult');
            const economyDiv = document.getElementById('economyResult');
            if (this.value) {
                const pop = countryPopulations[this.value] || "Unknown";
                const eco = countryEconomies[this.value] || "Unknown";
                if (worldPopDiv) {
                    worldPopDiv.textContent = `Population of ${this.value}: ${pop}`;
                }
                if (economyDiv) {
                    economyDiv.textContent = `Economy of ${this.value}: ${eco}`;
                }
            } else {
                if (worldPopDiv) worldPopDiv.textContent = "";
                if (economyDiv) economyDiv.textContent = "";
            }
        });
    });

    // Update time card every second
    function updateTime() {
        const timeDiv = document.getElementById('worldTime');
        if (timeDiv) {
            const now = new Date();
            timeDiv.textContent = now.toLocaleString();
        }
    }
    updateTime();
    setInterval(updateTime, 1000);
});
