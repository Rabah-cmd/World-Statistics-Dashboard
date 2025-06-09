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
    "Nigeria": "$477B", "Ethiopia": "$156B", "Egypt": "$387B", "DR Congo": "$64B", "Tanzania": "$85B",
    "South Africa": "$406B", "Kenya": "$113B", "Uganda": "$50B", "Algeria": "$206B", "Sudan": "$34B",
    "China": "$19T", "India": "$3.7T", "Japan": "$4.9T", "Germany": "$4.5T", "United Kingdom": "$3.4T",
    "France": "$3.1T", "Italy": "$2.3T", "Brazil": "$2.1T", "Canada": "$2.1T",
    "Turkey": "$1.1T", "Iran": "$413B", "Iraq": "$267B", "Saudi Arabia": "$1.1T", "Yemen": "$27B",
    "Syria": "$60B", "United Arab Emirates": "$509B", "Israel": "$525B", "Jordan": "$49B", "Lebanon": "$24B",
    // Add more as needed, or use "Unknown" for others
};

const countryExportations = {
    "Nigeria": "$63B", "Ethiopia": "$4B", "Egypt": "$47B", "DR Congo": "$17B", "Tanzania": "$7B",
    "South Africa": "$123B", "Kenya": "$7B", "Uganda": "$5B", "Algeria": "$38B", "Sudan": "$4B",
    "China": "$3.6T", "United States": "$2.1T", "Germany": "$1.7T", "Japan": "$757B", "Netherlands": "$723B",
    "South Korea": "$644B", "Italy": "$626B", "Hong Kong": "$609B", "France": "$617B", "Mexico": "$593B",
    "Brazil": "$340B", "India": "$453B", "Russia": "$491B", "Canada": "$598B", "United Kingdom": "$468B",
    "Turkey": "$256B", "Iran": "$104B", "Iraq": "$115B", "Saudi Arabia": "$375B", "Yemen": "$6B",
    "Syria": "$1B", "United Arab Emirates": "$598B", "Israel": "$67B", "Jordan": "$12B", "Lebanon": "$4B",
    // Add more or use "Unknown"
};

const countryImportations = {
    "Nigeria": "$78B", "Ethiopia": "$17B", "Egypt": "$94B", "DR Congo": "$15B", "Tanzania": "$11B",
    "South Africa": "$110B", "Kenya": "$21B", "Uganda": "$9B", "Algeria": "$35B", "Sudan": "$7B",
    "United States": "$3.4T", "China": "$2.7T", "Germany": "$1.6T", "Japan": "$897B", "United Kingdom": "$824B",
    "France": "$818B", "Netherlands": "$735B", "Italy": "$689B", "Hong Kong": "$668B", "South Korea": "$731B",
    "India": "$723B", "Mexico": "$604B", "Canada": "$631B", "Russia": "$379B", "Brazil": "$272B",
    "Turkey": "$361B", "Iran": "$64B", "Iraq": "$68B", "Saudi Arabia": "$200B", "Yemen": "$10B",
    "Syria": "$6B", "United Arab Emirates": "$425B", "Israel": "$96B", "Jordan": "$27B", "Lebanon": "$20B",
    // Add more or use "Unknown"
};

const countryCurrencies = {
    "Nigeria": "Naira (NGN)", "Ethiopia": "Birr (ETB)", "Egypt": "Egyptian Pound (EGP)", "DR Congo": "Congolese Franc (CDF)", "Tanzania": "Shilling (TZS)",
    "South Africa": "Rand (ZAR)", "Kenya": "Shilling (KES)", "Uganda": "Shilling (UGX)", "Algeria": "Dinar (DZD)", "Sudan": "Pound (SDG)",
    "China": "Yuan (CNY)", "India": "Rupee (INR)", "Indonesia": "Rupiah (IDR)", "Pakistan": "Rupee (PKR)", "Bangladesh": "Taka (BDT)",
    "Japan": "Yen (JPY)", "Philippines": "Peso (PHP)", "Vietnam": "Dong (VND)", "Turkey": "Lira (TRY)", "Iran": "Rial (IRR)",
    "Russia": "Ruble (RUB)", "Germany": "Euro (EUR)", "United Kingdom": "Pound (GBP)", "France": "Euro (EUR)", "Italy": "Euro (EUR)",
    "Spain": "Euro (EUR)", "Ukraine": "Hryvnia (UAH)", "Poland": "Zloty (PLN)", "Romania": "Leu (RON)", "Netherlands": "Euro (EUR)",
    "United States": "Dollar (USD)", "Mexico": "Peso (MXN)", "Canada": "Dollar (CAD)", "Guatemala": "Quetzal (GTQ)", "Honduras": "Lempira (HNL)",
    "Cuba": "Peso (CUP)", "Haiti": "Gourde (HTG)", "Dominican Republic": "Peso (DOP)", "El Salvador": "Dollar (USD)", "Nicaragua": "Cordoba (NIO)",
    "Brazil": "Real (BRL)", "Colombia": "Peso (COP)", "Argentina": "Peso (ARS)", "Peru": "Sol (PEN)", "Venezuela": "Bolívar (VES)",
    "Chile": "Peso (CLP)", "Ecuador": "Dollar (USD)", "Bolivia": "Boliviano (BOB)", "Paraguay": "Guarani (PYG)", "Uruguay": "Peso (UYU)",
    "Iraq": "Dinar (IQD)", "Saudi Arabia": "Riyal (SAR)", "Yemen": "Rial (YER)", "Syria": "Pound (SYP)", "United Arab Emirates": "Dirham (AED)",
    "Israel": "Shekel (ILS)", "Jordan": "Dinar (JOD)", "Lebanon": "Pound (LBP)"
    // Add more as needed
};

const countryTimeZones = {
    // Africa (already present)
    "Nigeria": "Africa/Lagos",
    "Ethiopia": "Africa/Addis_Ababa",
    "Egypt": "Africa/Cairo",
    "DR Congo": "Africa/Kinshasa",
    "Tanzania": "Africa/Dar_es_Salaam",
    "South Africa": "Africa/Johannesburg",
    "Kenya": "Africa/Nairobi",
    "Uganda": "Africa/Kampala",
    "Algeria": "Africa/Algiers",
    "Sudan": "Africa/Khartoum",

    // Europe
    "Russia": "Europe/Moscow",
    "Germany": "Europe/Berlin",
    "United Kingdom": "Europe/London",
    "France": "Europe/Paris",
    "Italy": "Europe/Rome",
    "Spain": "Europe/Madrid",
    "Ukraine": "Europe/Kyiv",
    "Poland": "Europe/Warsaw",
    "Romania": "Europe/Bucharest",
    "Netherlands": "Europe/Amsterdam",

    // North America
    "United States": "America/New_York",
    "Mexico": "America/Mexico_City",
    "Canada": "America/Toronto",
    "Guatemala": "America/Guatemala",
    "Honduras": "America/Tegucigalpa",
    "Cuba": "America/Havana",
    "Haiti": "America/Port-au-Prince",
    "Dominican Republic": "America/Santo_Domingo",
    "El Salvador": "America/El_Salvador",
    "Nicaragua": "America/Managua",

    // South America
    "Brazil": "America/Sao_Paulo",
    "Colombia": "America/Bogota",
    "Argentina": "America/Argentina/Buenos_Aires",
    "Peru": "America/Lima",
    "Venezuela": "America/Caracas",
    "Chile": "America/Santiago",
    "Ecuador": "America/Guayaquil",
    "Bolivia": "America/La_Paz",
    "Paraguay": "America/Asuncion",
    "Uruguay": "America/Montevideo",

    // Middle East
    "Turkey": "Europe/Istanbul",
    "Iran": "Asia/Tehran",
    "Iraq": "Asia/Baghdad",
    "Saudi Arabia": "Asia/Riyadh",
    "Yemen": "Asia/Aden",
    "Syria": "Asia/Damascus",
    "United Arab Emirates": "Asia/Dubai",
    "Israel": "Asia/Jerusalem",
    "Jordan": "Asia/Amman",
    "Lebanon": "Asia/Beirut",

    // Added/Updated time zones
    "China": "Asia/Shanghai",
    "India": "Asia/Kolkata",
    "Indonesia": "Asia/Jakarta",
    "Pakistan": "Asia/Karachi",
    "Bangladesh": "Asia/Dhaka",
    "Japan": "Asia/Tokyo",
    "Philippines": "Asia/Manila",
    "Vietnam": "Asia/Ho_Chi_Minh"
    // Add more as needed
};

const countryCapitals = {
    "Nigeria": "Abuja", "Ethiopia": "Addis Ababa", "Egypt": "Cairo", "DR Congo": "Kinshasa", "Tanzania": "Dodoma",
    "South Africa": "Pretoria", "Kenya": "Nairobi", "Uganda": "Kampala", "Algeria": "Algiers", "Sudan": "Khartoum",
    "China": "Beijing", "India": "New Delhi", "Indonesia": "Jakarta", "Pakistan": "Islamabad", "Bangladesh": "Dhaka",
    "Japan": "Tokyo", "Philippines": "Manila", "Vietnam": "Hanoi", "Turkey": "Ankara", "Iran": "Tehran",
    "Russia": "Moscow", "Germany": "Berlin", "United Kingdom": "London", "France": "Paris", "Italy": "Rome",
    "Spain": "Madrid", "Ukraine": "Kyiv", "Poland": "Warsaw", "Romania": "Bucharest", "Netherlands": "Amsterdam",
    "United States": "Washington, D.C.", "Mexico": "Mexico City", "Canada": "Ottawa", "Guatemala": "Guatemala City", "Honduras": "Tegucigalpa",
    "Cuba": "Havana", "Haiti": "Port-au-Prince", "Dominican Republic": "Santo Domingo", "El Salvador": "San Salvador", "Nicaragua": "Managua",
    "Brazil": "Brasília", "Colombia": "Bogotá", "Argentina": "Buenos Aires", "Peru": "Lima", "Venezuela": "Caracas",
    "Chile": "Santiago", "Ecuador": "Quito", "Bolivia": "Sucre", "Paraguay": "Asunción", "Uruguay": "Montevideo",
    "Iraq": "Baghdad", "Saudi Arabia": "Riyadh", "Yemen": "Sana'a", "Syria": "Damascus", "United Arab Emirates": "Abu Dhabi",
    "Israel": "Jerusalem", "Jordan": "Amman", "Lebanon": "Beirut"
    // Add more as needed
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
                const currency = countryCurrencies[this.value] || "Unknown";
                const capital = countryCapitals[this.value] || "Unknown";
                const tz = countryTimeZones[this.value] || undefined;
                let localTime = "Unknown";
                if (tz) {
                    localTime = new Date().toLocaleString("en-US", { timeZone: tz });
                }

                countryDisplay.innerHTML = `
                    <div><span style="font-size:1.2em;">🏙️</span> Capital: <span class="number-blue">${capital}</span></div>
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

    // --- Update World Population card on country select ---
    document.querySelectorAll('.continent-box select').forEach(dropdown => {
        dropdown.addEventListener("change", function () {
            const worldPopDiv = document.getElementById('worldPopulationResult');
            const economyDiv = document.getElementById('economyResult');
            const currencyDiv = document.querySelector('[id="currenciesResult"], #currenciesResult');
            if (this.value) {
                const pop = countryPopulations[this.value] || "Unknown";
                const eco = countryEconomies[this.value] || "Unknown";
                const currency = countryCurrencies[this.value] || "Unknown";
                if (worldPopDiv) {
                    worldPopDiv.textContent = `Population of ${this.value}: ${pop}`;
                }
                if (economyDiv) {
                    economyDiv.textContent = `Economy of ${this.value}: ${eco}`;
                }
                if (currencyDiv) {
                    currencyDiv.textContent = currency; // <-- Only the national currency
                }
            } else {
                if (worldPopDiv) worldPopDiv.textContent = "";
                if (economyDiv) economyDiv.textContent = "";
                if (currencyDiv) currencyDiv.textContent = "";
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
