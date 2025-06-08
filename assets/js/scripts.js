<<<<<<< HEAD
const worldStats = {
  population: "8,045,000,000 people",
  economy: "$104 trillion global GDP (2025 estimate)",
  currency: "Most traded: USD, EUR, CNY",
  exportation: "$22 trillion (Top: China, USA, Germany)",
  importation: "$21.5 trillion (Top: USA, China, Germany)"
};

// Add this mapping near your data section (before DOMContentLoaded)
const countryTimezones = {
  // Africa
  "Nigeria": "Africa/Lagos", "Ethiopia": "Africa/Addis_Ababa", "Egypt": "Africa/Cairo", "DR Congo": "Africa/Kinshasa", "Tanzania": "Africa/Dar_es_Salaam",
  "South Africa": "Africa/Johannesburg", "Kenya": "Africa/Nairobi", "Uganda": "Africa/Kampala", "Algeria": "Africa/Algiers", "Sudan": "Africa/Khartoum",
  // Asia
  "China": "Asia/Shanghai", "India": "Asia/Kolkata", "Indonesia": "Asia/Jakarta", "Pakistan": "Asia/Karachi", "Bangladesh": "Asia/Dhaka",
  "Japan": "Asia/Tokyo", "Philippines": "Asia/Manila", "Vietnam": "Asia/Ho_Chi_Minh", "Turkey": "Europe/Istanbul", "Iran": "Asia/Tehran",
  // Europe
  "Russia": "Europe/Moscow", "Germany": "Europe/Berlin", "United Kingdom": "Europe/London", "France": "Europe/Paris", "Italy": "Europe/Rome",
  "Spain": "Europe/Madrid", "Ukraine": "Europe/Kyiv", "Poland": "Europe/Warsaw", "Romania": "Europe/Bucharest", "Netherlands": "Europe/Amsterdam",
  // North America
  "United States": "America/New_York", "Mexico": "America/Mexico_City", "Canada": "America/Toronto", "Guatemala": "America/Guatemala", "Honduras": "America/Tegucigalpa",
  "Cuba": "America/Havana", "Haiti": "America/Port-au-Prince", "Dominican Republic": "America/Santo_Domingo", "El Salvador": "America/El_Salvador", "Nicaragua": "America/Managua",
  // South America
  "Brazil": "America/Sao_Paulo", "Colombia": "America/Bogota", "Argentina": "America/Argentina/Buenos_Aires", "Peru": "America/Lima", "Venezuela": "America/Caracas",
  "Chile": "America/Santiago", "Ecuador": "America/Guayaquil", "Bolivia": "America/La_Paz", "Paraguay": "America/Asuncion", "Uruguay": "America/Montevideo",
  // Middle East
  "Saudi Arabia": "Asia/Riyadh", "Iran": "Asia/Tehran", "Turkey": "Europe/Istanbul", "Iraq": "Asia/Baghdad", "United Arab Emirates": "Asia/Dubai",
  "Israel": "Asia/Jerusalem", "Jordan": "Asia/Amman", "Lebanon": "Asia/Beirut", "Oman": "Asia/Muscat", "Qatar": "Asia/Qatar"
};

document.addEventListener("DOMContentLoaded", () => {
  // Optionally display world stats if you have elements for them
  if (document.getElementById("populationData")) {
    document.getElementById("populationData").textContent = worldStats.population;
  }
  if (document.getElementById("economyData")) {
    document.getElementById("economyData").textContent = worldStats.economy;
  }
  if (document.getElementById("currencyData")) {
    document.getElementById("currencyData").textContent = worldStats.currency;
  }
  if (document.getElementById("exportData")) {
    document.getElementById("exportData").textContent = worldStats.exportation;
  }
  if (document.getElementById("importData")) {
    document.getElementById("importData").textContent = worldStats.importation;
  }

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
    ],
    "Middle East": [
      "Saudi Arabia", "Iran", "Turkey", "Iraq", "United Arab Emirates",
      "Israel", "Jordan", "Lebanon", "Oman", "Qatar"
    ]
  };

  // Example economy data for demonstration
  const countryEconomy = {
    "Nigeria": "$477B GDP", "Ethiopia": "$111B GDP", "Egypt": "$404B GDP", "DR Congo": "$64B GDP", "Tanzania": "$85B GDP",
    "South Africa": "$406B GDP", "Kenya": "$113B GDP", "Uganda": "$50B GDP", "Algeria": "$206B GDP", "Sudan": "$34B GDP",
    "China": "$18T GDP", "India": "$3.7T GDP", "Indonesia": "$1.4T GDP", "Pakistan": "$375B GDP", "Bangladesh": "$460B GDP",
    "Japan": "$4.2T GDP", "Philippines": "$440B GDP", "Vietnam": "$415B GDP", "Turkey": "$1.1T GDP", "Iran": "$388B GDP",
    "Russia": "$2.1T GDP", "Germany": "$4.5T GDP", "United Kingdom": "$3.4T GDP", "France": "$3.1T GDP", "Italy": "$2.2T GDP",
    "Spain": "$1.6T GDP", "Ukraine": "$200B GDP", "Poland": "$900B GDP", "Romania": "$350B GDP", "Netherlands": "$1T GDP",
    "United States": "$28T GDP", "Mexico": "$1.6T GDP", "Canada": "$2.2T GDP", "Guatemala": "$95B GDP", "Honduras": "$30B GDP",
    "Cuba": "$110B GDP", "Haiti": "$22B GDP", "Dominican Republic": "$120B GDP", "El Salvador": "$32B GDP", "Nicaragua": "$15B GDP",
    "Brazil": "$2.2T GDP", "Colombia": "$350B GDP", "Argentina": "$641B GDP", "Peru": "$268B GDP", "Venezuela": "$186B GDP",
    "Chile": "$310B GDP", "Ecuador": "$115B GDP", "Bolivia": "$44B GDP", "Paraguay": "$41B GDP", "Uruguay": "$69B GDP",
    "Saudi Arabia": "$1.1T GDP", "Iran": "$388B GDP", "Turkey": "$1.1T GDP", "Iraq": "$264B GDP", "United Arab Emirates": "$509B GDP",
    "Israel": "$522B GDP", "Jordan": "$49B GDP", "Lebanon": "$23B GDP", "Oman": "$114B GDP", "Qatar": "$235B GDP"
  };

  // Add this object after countryEconomy for demonstration
  const countryPopulation = {
    "Nigeria": "223,804,632", "Ethiopia": "126,527,060", "Egypt": "112,716,599", "DR Congo": "102,262,808", "Tanzania": "67,438,106",
    "South Africa": "60,414,495", "Kenya": "55,100,586", "Uganda": "48,582,334", "Algeria": "45,606,480", "Sudan": "48,109,005",
    "China": "1,425,671,352", "India": "1,417,173,173", "Indonesia": "277,534,122", "Pakistan": "240,485,658", "Bangladesh": "172,954,319",
    "Japan": "123,294,513", "Philippines": "117,337,368", "Vietnam": "98,858,950", "Turkey": "85,816,199", "Iran": "89,172,767",
    "Russia": "144,444,359", "Germany": "83,294,633", "United Kingdom": "67,736,802", "France": "64,756,584", "Italy": "58,870,762",
    "Spain": "47,519,628", "Ukraine": "36,744,634", "Poland": "41,026,067", "Romania": "19,892,812", "Netherlands": "17,618,299",
    "United States": "339,996,563", "Mexico": "128,455,567", "Canada": "38,781,291", "Guatemala": "17,703,190", "Honduras": "10,593,798",
    "Cuba": "11,194,449", "Haiti": "11,724,763", "Dominican Republic": "11,332,972", "El Salvador": "6,364,943", "Nicaragua": "7,046,310",
    "Brazil": "216,422,446", "Colombia": "52,085,168", "Argentina": "45,773,884", "Peru": "34,352,719", "Venezuela": "28,838,499",
    "Chile": "19,629,590", "Ecuador": "18,190,484", "Bolivia": "12,388,571", "Paraguay": "6,704,314", "Uruguay": "3,423,108",
    "Saudi Arabia": "36,947,025", "Iran": "89,172,767", "Turkey": "85,816,199", "Iraq": "45,504,560", "United Arab Emirates": "9,516,871",
    "Israel": "9,364,000", "Jordan": "11,337,052", "Lebanon": "5,353,930", "Oman": "4,644,384", "Qatar": "2,716,391"
  };

  // Example currency data for demonstration
  const countryCurrency = {
    "Nigeria": "Nigerian Naira (NGN)", "Ethiopia": "Ethiopian Birr (ETB)", "Egypt": "Egyptian Pound (EGP)", "DR Congo": "Congolese Franc (CDF)", "Tanzania": "Tanzanian Shilling (TZS)",
    "South Africa": "South African Rand (ZAR)", "Kenya": "Kenyan Shilling (KES)", "Uganda": "Ugandan Shilling (UGX)", "Algeria": "Algerian Dinar (DZD)", "Sudan": "Sudanese Pound (SDG)",
    "China": "Chinese Yuan (CNY)", "India": "Indian Rupee (INR)", "Indonesia": "Indonesian Rupiah (IDR)", "Pakistan": "Pakistani Rupee (PKR)", "Bangladesh": "Bangladeshi Taka (BDT)",
    "Japan": "Japanese Yen (JPY)", "Philippines": "Philippine Peso (PHP)", "Vietnam": "Vietnamese Dong (VND)", "Turkey": "Turkish Lira (TRY)", "Iran": "Iranian Rial (IRR)",
    "Russia": "Russian Ruble (RUB)", "Germany": "Euro (EUR)", "United Kingdom": "Pound Sterling (GBP)", "France": "Euro (EUR)", "Italy": "Euro (EUR)",
    "Spain": "Euro (EUR)", "Ukraine": "Ukrainian Hryvnia (UAH)", "Poland": "Polish Zloty (PLN)", "Romania": "Romanian Leu (RON)", "Netherlands": "Euro (EUR)",
    "United States": "United States Dollar (USD)", "Mexico": "Mexican Peso (MXN)", "Canada": "Canadian Dollar (CAD)", "Guatemala": "Guatemalan Quetzal (GTQ)", "Honduras": "Honduran Lempira (HNL)",
    "Cuba": "Cuban Peso (CUP)", "Haiti": "Haitian Gourde (HTG)", "Dominican Republic": "Dominican Peso (DOP)", "El Salvador": "United States Dollar (USD)", "Nicaragua": "Nicaraguan Córdoba (NIO)",
    "Brazil": "Brazilian Real (BRL)", "Colombia": "Colombian Peso (COP)", "Argentina": "Argentine Peso (ARS)", "Peru": "Peruvian Sol (PEN)", "Venezuela": "Venezuelan Bolívar (VES)",
    "Chile": "Chilean Peso (CLP)", "Ecuador": "United States Dollar (USD)", "Bolivia": "Bolivian Boliviano (BOB)", "Paraguay": "Paraguayan Guaraní (PYG)", "Uruguay": "Uruguayan Peso (UYU)",
    "Saudi Arabia": "Saudi Riyal (SAR)", "Iran": "Iranian Rial (IRR)", "Turkey": "Turkish Lira (TRY)", "Iraq": "Iraqi Dinar (IQD)", "United Arab Emirates": "UAE Dirham (AED)",
    "Israel": "Israeli New Shekel (ILS)", "Jordan": "Jordanian Dinar (JOD)", "Lebanon": "Lebanese Pound (LBP)", "Oman": "Omani Rial (OMR)", "Qatar": "Qatari Riyal (QAR)"
  };

  // Example exportation and importation data for demonstration
  const countryExportation = {
    "Nigeria": "$63B exports", "Ethiopia": "$4B exports", "Egypt": "$47B exports", "DR Congo": "$17B exports", "Tanzania": "$11B exports",
    "South Africa": "$123B exports", "Kenya": "$7B exports", "Uganda": "$5B exports", "Algeria": "$38B exports", "Sudan": "$4B exports",
    "China": "$3.6T exports", "India": "$770B exports", "Indonesia": "$300B exports", "Pakistan": "$39B exports", "Bangladesh": "$55B exports",
    "Japan": "$757B exports", "Philippines": "$103B exports", "Vietnam": "$354B exports", "Turkey": "$256B exports", "Iran": "$45B exports",
    "Russia": "$425B exports", "Germany": "$1.7T exports", "United Kingdom": "$468B exports", "France": "$617B exports", "Italy": "$660B exports",
    "Spain": "$475B exports", "Ukraine": "$49B exports", "Poland": "$400B exports", "Romania": "$100B exports", "Netherlands": "$965B exports",
    "United States": "$2.1T exports", "Mexico": "$593B exports", "Canada": "$596B exports", "Guatemala": "$15B exports", "Honduras": "$11B exports",
    "Cuba": "$2B exports", "Haiti": "$1B exports", "Dominican Republic": "$12B exports", "El Salvador": "$7B exports", "Nicaragua": "$7B exports",
    "Brazil": "$340B exports", "Colombia": "$57B exports", "Argentina": "$88B exports", "Peru": "$65B exports", "Venezuela": "$33B exports",
    "Chile": "$97B exports", "Ecuador": "$33B exports", "Bolivia": "$13B exports", "Paraguay": "$9B exports", "Uruguay": "$13B exports",
    "Saudi Arabia": "$321B exports", "Iran": "$45B exports", "Turkey": "$256B exports", "Iraq": "$115B exports", "United Arab Emirates": "$425B exports",
    "Israel": "$67B exports", "Jordan": "$11B exports", "Lebanon": "$4B exports", "Oman": "$56B exports", "Qatar": "$86B exports"
  };

  const countryImportation = {
    "Nigeria": "$78B imports", "Ethiopia": "$17B imports", "Egypt": "$94B imports", "DR Congo": "$15B imports", "Tanzania": "$15B imports",
    "South Africa": "$117B imports", "Kenya": "$20B imports", "Uganda": "$8B imports", "Algeria": "$35B imports", "Sudan": "$8B imports",
    "China": "$2.7T imports", "India": "$890B imports", "Indonesia": "$237B imports", "Pakistan": "$66B imports", "Bangladesh": "$89B imports",
    "Japan": "$897B imports", "Philippines": "$140B imports", "Vietnam": "$340B imports", "Turkey": "$361B imports", "Iran": "$54B imports",
    "Russia": "$285B imports", "Germany": "$1.6T imports", "United Kingdom": "$680B imports", "France": "$731B imports", "Italy": "$689B imports",
    "Spain": "$431B imports", "Ukraine": "$62B imports", "Poland": "$470B imports", "Romania": "$140B imports", "Netherlands": "$1T imports",
    "United States": "$3.4T imports", "Mexico": "$604B imports", "Canada": "$631B imports", "Guatemala": "$24B imports", "Honduras": "$15B imports",
    "Cuba": "$10B imports", "Haiti": "$5B imports", "Dominican Republic": "$25B imports", "El Salvador": "$15B imports", "Nicaragua": "$9B imports",
    "Brazil": "$272B imports", "Colombia": "$67B imports", "Argentina": "$81B imports", "Peru": "$52B imports", "Venezuela": "$16B imports",
    "Chile": "$89B imports", "Ecuador": "$31B imports", "Bolivia": "$11B imports", "Paraguay": "$14B imports", "Uruguay": "$12B imports",
    "Saudi Arabia": "$178B imports", "Iran": "$54B imports", "Turkey": "$361B imports", "Iraq": "$68B imports", "United Arab Emirates": "$365B imports",
    "Israel": "$90B imports", "Jordan": "$24B imports", "Lebanon": "$19B imports", "Oman": "$33B imports", "Qatar": "$28B imports"
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
      box.style.width = ""; // Remove or do not set a custom width for Asia

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

      const list = document.createElement("ul");
      list.style.marginTop = "6px";
      list.style.paddingLeft = "18px";
      list.style.listStyle = "disc";
      list.style.display = "none"; // Hide by default
      continentCountries[continent].forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        list.appendChild(li);
      });
      box.appendChild(list);

      // Economy box with top 10 countries
      const economyBox = document.createElement("div");
      economyBox.style.marginTop = "12px";
      economyBox.style.padding = "8px";
      economyBox.style.background = "#e6f2ff";
      economyBox.style.border = "1px solid #b3d1ff";
      economyBox.style.borderRadius = "6px";
      economyBox.style.display = "none"; // Hide by default

      const economyTitle = document.createElement("strong");
      economyTitle.textContent = "Economy";
      economyBox.appendChild(economyTitle);

      const economyList = document.createElement("ul");
      economyList.style.margin = "8px 0 0 16px";
      economyList.style.padding = "0";
      economyList.style.listStyle = "circle";
      continentCountries[continent].forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        economyList.appendChild(li);
      });
      economyBox.appendChild(economyList);

      box.appendChild(economyBox);

      // Country display
      const countryDisplay = document.createElement("div");
      countryDisplay.style.marginTop = "8px";
      countryDisplay.style.fontWeight = "bold";
      box.appendChild(countryDisplay);

      // Economy display for selected country
      const countryEconomyDisplay = document.createElement("div");
      countryEconomyDisplay.style.marginTop = "4px";
      countryEconomyDisplay.style.fontSize = "13px";
      countryEconomyDisplay.style.color = "#2a4d8f";
      box.appendChild(countryEconomyDisplay);

      // Currency display for selected country
      const countryCurrencyDisplay = document.createElement("div");
      countryCurrencyDisplay.style.marginTop = "4px";
      countryCurrencyDisplay.style.fontSize = "13px";
      countryCurrencyDisplay.style.color = "#8f6f2a";
      box.appendChild(countryCurrencyDisplay);

      // Exportation display for selected country
      const countryExportationDisplay = document.createElement("div");
      countryExportationDisplay.style.marginTop = "4px";
      countryExportationDisplay.style.fontSize = "13px";
      countryExportationDisplay.style.color = "#2a6f8f";
      box.appendChild(countryExportationDisplay);

      // Importation display for selected country
      const countryImportationDisplay = document.createElement("div");
      countryImportationDisplay.style.marginTop = "4px";
      countryImportationDisplay.style.fontSize = "13px";
      countryImportationDisplay.style.color = "#8f2a2a";
      box.appendChild(countryImportationDisplay);

      // Economy box for selected country
      const countryEconomyBox = document.createElement("div");
      countryEconomyBox.id = "economyIdBox";
      countryEconomyBox.style.marginTop = "4px";
      countryEconomyBox.style.fontSize = "13px";
      countryEconomyBox.style.background = "#e6f2ff";
      countryEconomyBox.style.border = "1px solid #b3d1ff";
      countryEconomyBox.style.borderRadius = "6px";
      countryEconomyBox.style.padding = "6px 10px";
      countryEconomyBox.style.display = "none";
      box.appendChild(countryEconomyBox);

      // Update display on dropdown change
      dropdown.addEventListener("change", function () {
        if (this.value) {
          countryDisplay.textContent = `Selected: ${this.value}`;
          countryEconomyDisplay.textContent = `Economy: ${countryEconomy[this.value] || "Data not available"}`;
          // Show and update the economy box
          const economyBox = document.getElementById('economyBox');
          const economyValue = document.getElementById('economyValue');
          if (economyBox && economyValue) {
            economyValue.textContent = countryEconomy[this.value] || "Data not available";
            economyBox.style.display = "block";
          }
          // Population
          if (!box.populationDisplay) {
            box.populationDisplay = document.createElement("div");
            box.populationDisplay.style.marginTop = "4px";
            box.populationDisplay.style.fontSize = "13px";
            box.populationDisplay.style.color = "#2a8f4d";
            box.appendChild(box.populationDisplay);
          }
          box.populationDisplay.textContent = `Population: ${countryPopulation[this.value] || "Data not available"}`;
          // Currency
          countryCurrencyDisplay.textContent = `Currency: ${countryCurrency[this.value] || "Data not available"}`;
          // Exportation
          countryExportationDisplay.textContent = `Exportation: ${countryExportation[this.value] || "Data not available"}`;
          // Importation
          countryImportationDisplay.textContent = `Importation: ${countryImportation[this.value] || "Data not available"}`;
          // Also update the main currency box at the bottom if present
          if (document.getElementById('currencyValue') && document.getElementById('currencyBox')) {
            document.getElementById('currencyValue').textContent = countryCurrency[this.value] || "Data not available";
            document.getElementById('currencyBox').style.display = "block";
          }
          // Show and update the exportation box
          const exportationBox = document.getElementById('exportationBox');
          const exportationValue = document.getElementById('exportationValue');
          if (exportationBox && exportationValue) {
            exportationValue.textContent = countryExportation[this.value] || "Data not available";
            exportationBox.style.display = "block";
          }
          // Show and update the importation box
          const importationBox = document.getElementById('importationBox');
          const importationValue = document.getElementById('importationValue');
          if (importationBox && importationValue) {
            importationValue.textContent = countryImportation[this.value] || "Data not available";
            importationBox.style.display = "block";
          }
          // Show time in the time card for this continent
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            const now = new Date();
            timeValue.textContent = now.toLocaleTimeString();
            // Optional: update every second while a country is selected
            if (timeValue._interval) clearInterval(timeValue._interval);
            timeValue._interval = setInterval(() => {
              timeValue.textContent = new Date().toLocaleTimeString();
            }, 1000);
          }
        } else {
          countryDisplay.textContent = "";
          countryEconomyDisplay.textContent = "";
          countryEconomyBox.style.display = "block"; // Show the box even if no country is selected
          countryEconomyBox.textContent = "Economy ID: Data not available";
          if (box.populationDisplay) box.populationDisplay.textContent = "";
          countryCurrencyDisplay.textContent = "";
          countryExportationDisplay.textContent = "";
          countryImportationDisplay.textContent = "";
          // Hide exportation box if no country selected
          const exportationBox = document.getElementById('exportationBox');
          const exportationValue = document.getElementById('exportationValue');
          if (exportationBox && exportationValue) {
            exportationValue.textContent = "";
            exportationBox.style.display = "none";
          }
          // Hide importation box if no country selected
          const importationBox = document.getElementById('importationBox');
          const importationValue = document.getElementById('importationValue');
          if (importationBox && importationValue) {
            importationValue.textContent = "";
            importationBox.style.display = "none";
          }
          // Hide main economy box at the bottom if you want, or keep it visible with empty value
          const economyBox = document.getElementById('economyBox');
          const economyValue = document.getElementById('economyValue');
          if (economyBox && economyValue) {
            economyValue.textContent = "Data not available";
            economyBox.style.display = "block"; // Show the box even if no country is selected
          }
          if (document.getElementById('currencyValue') && document.getElementById('currencyBox')) {
            document.getElementById('currencyValue').textContent = "";
            document.getElementById('currencyBox').style.display = "block"; // Show currency box even if no country is selected
          }
          // Clear and stop the time card for this continent
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            timeValue.textContent = "";
            if (timeValue._interval) clearInterval(timeValue._interval);
          }
        }
      });

      // Display a random country when clicking inside the continent box
      box.addEventListener("click", function (e) {
        // Prevent this from firing when clicking the dropdown
        if (e.target === dropdown) return;
        const countries = continentCountries[continent].slice(0, 10);
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        countryDisplay.textContent = `Selected: ${randomCountry}`;
        countryEconomyDisplay.textContent = `Economy: ${countryEconomy[randomCountry] || "Data not available"}`;
        dropdown.value = randomCountry;
        // Show and update the economy box
        const economyBox = document.getElementById('economyBox');
        const economyValue = document.getElementById('economyValue');
        if (economyBox && economyValue) {
          economyValue.textContent = countryEconomy[randomCountry] || "Data not available";
          economyBox.style.display = "block";
        }
        if (!box.populationDisplay) {
          box.populationDisplay = document.createElement("div");
          box.populationDisplay.style.marginTop = "4px";
          box.populationDisplay.style.fontSize = "13px";
          box.populationDisplay.style.color = "#2a8f4d";
          box.appendChild(box.populationDisplay);
        }
        box.populationDisplay.textContent = `Population: ${countryPopulation[randomCountry] || "Data not available"}`;
        countryCurrencyDisplay.textContent = `Currency: ${countryCurrency[randomCountry] || "Data not available"}`;
        countryExportationDisplay.textContent = `Exportation: ${countryExportation[randomCountry] || "Data not available"}`;
        countryImportationDisplay.textContent = `Importation: ${countryImportation[randomCountry] || "Data not available"}`;
        // Show and update the exportation box
        const exportationBox = document.getElementById('exportationBox');
        const exportationValue = document.getElementById('exportationValue');
        if (exportationBox && exportationValue) {
          exportationValue.textContent = countryExportation[randomCountry] || "Data not available";
          exportationBox.style.display = "block";
        }
        // Show and update the importation box
        const importationBox = document.getElementById('importationBox');
        const importationValue = document.getElementById('importationValue');
        if (importationBox && importationValue) {
          importationValue.textContent = countryImportation[randomCountry] || "Data not available";
          importationBox.style.display = "block";
        }
        if (document.getElementById('currencyValue') && document.getElementById('currencyBox')) {
          document.getElementById('currencyValue').textContent = countryCurrency[randomCountry] || "Data not available";
          document.getElementById('currencyBox').style.display = "block";
        }
      });

      // Add a label under each continent box
      const labelUnder = document.createElement("div");
      labelUnder.style.marginTop = "10px";
      labelUnder.style.fontStyle = "italic";
      labelUnder.style.fontSize = "13px";
      labelUnder.textContent = "Explore countries and their data.";
      box.appendChild(labelUnder);

      container.appendChild(box);

      // --- Place this block after you append labelUnder and box to container ---

      // Create a horizontal container for the info boxes
      const infoContainer = document.createElement('div');
      infoContainer.style.display = "flex";
      infoContainer.style.flexDirection = "row";
      infoContainer.style.gap = "14px";
      infoContainer.style.margin = "14px 0 24px 0";

      // Economy box with icon
      const economyBoxH = document.createElement('div');
      economyBoxH.style.cssText = `
        border: 1px solid #b3d1ff;
        background: #e6f2ff;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      economyBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a4d8f;"><i class="fas fa-chart-line"></i></span>
        <strong>Economy</strong>
        <p id="${continent.toLowerCase()}EconomyValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(economyBoxH);

      // Currency box with icon
      const currencyBoxH = document.createElement('div');
      currencyBoxH.style.cssText = `
        border: 1px solid #ffd966;
        background: #fffbe6;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      currencyBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#8f6f2a;"><i class="fas fa-coins"></i></span>
        <strong>Currency</strong>
        <p id="${continent.toLowerCase()}CurrencyValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(currencyBoxH);

      // Exportation box with icon
      const exportationBoxH = document.createElement('div');
      exportationBoxH.style.cssText = `
        border: 1px solid #8fd9ff;
        background: #e6f7ff;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      exportationBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a6f8f;"><i class="fas fa-box-open"></i></span>
        <strong>Exportation</strong>
        <p id="${continent.toLowerCase()}ExportationValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(exportationBoxH);

      // Importation box with icon
      const importationBoxH = document.createElement('div');
      importationBoxH.style.cssText = `
        border: 1px solid #ffb3b3;
        background: #fff0f0;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      importationBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#8f2a2a;"><i class="fas fa-truck-loading"></i></span>
        <strong>Importation</strong>
        <p id="${continent.toLowerCase()}ImportationValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(importationBoxH);

      // Time card for each continent
      const timeBoxH = document.createElement('div');
      timeBoxH.style.cssText = `
        border: 1px solid #b3e6ff;
        background: #f0fbff;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      timeBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a6f8f;"><i class="fas fa-clock"></i></span>
        <strong>Time</strong>
        <p id="${continent.toLowerCase()}TimeValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(timeBoxH);

      // Population card for each continent
      const populationBoxH = document.createElement('div');
      populationBoxH.style.cssText = `
        border: 1px solid #b3ffb3;
        background: #f0fff0;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      populationBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a8f4d;"><i class="fas fa-users"></i></span>
        <strong>Population</strong>
        <p id="${continent.toLowerCase()}PopulationValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(populationBoxH);

      // Insert the horizontal info container after the continent box
      container.appendChild(infoContainer);

      // --- Add this code after your dropdown change event to update the values in the cards ---
      dropdown.addEventListener("change", function () {
        if (this.value) {
          document.getElementById(`${continent.toLowerCase()}EconomyValue`).textContent = countryEconomy[this.value] || "Data not available";
          document.getElementById(`${continent.toLowerCase()}CurrencyValue`).textContent = countryCurrency[this.value] || "Data not available";
          document.getElementById(`${continent.toLowerCase()}ExportationValue`).textContent = countryExportation[this.value] || "Data not available";
          document.getElementById(`${continent.toLowerCase()}ImportationValue`).textContent = countryImportation[this.value] || "Data not available";
          // Show population in the population card for this continent
          const popValue = document.getElementById(`${continent.toLowerCase()}PopulationValue`);
          if (popValue) {
            popValue.textContent = countryPopulation[this.value] || "Data not available";
          }
          // Show local time in the time card for this country
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            const tz = countryTimezones[this.value] || "UTC";
            function updateLocalTime() {
              const now = new Date();
              try {
                timeValue.textContent = now.toLocaleTimeString("en-US", { timeZone: tz });
              } catch {
                timeValue.textContent = now.toLocaleTimeString();
              }
            }
            updateLocalTime();
            if (timeValue._interval) clearInterval(timeValue._interval);
            timeValue._interval = setInterval(updateLocalTime, 1000);
          }
        } else {
          document.getElementById(`${continent.toLowerCase()}EconomyValue`).textContent = "";
          document.getElementById(`${continent.toLowerCase()}CurrencyValue`).textContent = "";
          document.getElementById(`${continent.toLowerCase()}ExportationValue`).textContent = "";
          document.getElementById(`${continent.toLowerCase()}ImportationValue`).textContent = "";
          // Clear the population card for this continent
          const popValue = document.getElementById(`${continent.toLowerCase()}PopulationValue`);
          if (popValue) {
            popValue.textContent = "";
          }
          // Clear and stop the time card for this continent
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            timeValue.textContent = "";
            if (timeValue._interval) clearInterval(timeValue._interval);
          }
        }
      });
    });
  }
=======
const worldStats = {
  population: "8,045,000,000 people",
  economy: "$104 trillion global GDP (2025 estimate)",
  currency: "Most traded: USD, EUR, CNY",
  exportation: "$22 trillion (Top: China, USA, Germany)",
  importation: "$21.5 trillion (Top: USA, China, Germany)"
};

// Add this mapping near your data section (before DOMContentLoaded)
const countryTimezones = {
  // Africa
  "Nigeria": "Africa/Lagos", "Ethiopia": "Africa/Addis_Ababa", "Egypt": "Africa/Cairo", "DR Congo": "Africa/Kinshasa", "Tanzania": "Africa/Dar_es_Salaam",
  "South Africa": "Africa/Johannesburg", "Kenya": "Africa/Nairobi", "Uganda": "Africa/Kampala", "Algeria": "Africa/Algiers", "Sudan": "Africa/Khartoum",
  // Asia
  "China": "Asia/Shanghai", "India": "Asia/Kolkata", "Indonesia": "Asia/Jakarta", "Pakistan": "Asia/Karachi", "Bangladesh": "Asia/Dhaka",
  "Japan": "Asia/Tokyo", "Philippines": "Asia/Manila", "Vietnam": "Asia/Ho_Chi_Minh", "Turkey": "Europe/Istanbul", "Iran": "Asia/Tehran",
  // Europe
  "Russia": "Europe/Moscow", "Germany": "Europe/Berlin", "United Kingdom": "Europe/London", "France": "Europe/Paris", "Italy": "Europe/Rome",
  "Spain": "Europe/Madrid", "Ukraine": "Europe/Kyiv", "Poland": "Europe/Warsaw", "Romania": "Europe/Bucharest", "Netherlands": "Europe/Amsterdam",
  // North America
  "United States": "America/New_York", "Mexico": "America/Mexico_City", "Canada": "America/Toronto", "Guatemala": "America/Guatemala", "Honduras": "America/Tegucigalpa",
  "Cuba": "America/Havana", "Haiti": "America/Port-au-Prince", "Dominican Republic": "America/Santo_Domingo", "El Salvador": "America/El_Salvador", "Nicaragua": "America/Managua",
  // South America
  "Brazil": "America/Sao_Paulo", "Colombia": "America/Bogota", "Argentina": "America/Argentina/Buenos_Aires", "Peru": "America/Lima", "Venezuela": "America/Caracas",
  "Chile": "America/Santiago", "Ecuador": "America/Guayaquil", "Bolivia": "America/La_Paz", "Paraguay": "America/Asuncion", "Uruguay": "America/Montevideo",
  // Middle East
  "Saudi Arabia": "Asia/Riyadh", "Iran": "Asia/Tehran", "Turkey": "Europe/Istanbul", "Iraq": "Asia/Baghdad", "United Arab Emirates": "Asia/Dubai",
  "Israel": "Asia/Jerusalem", "Jordan": "Asia/Amman", "Lebanon": "Asia/Beirut", "Oman": "Asia/Muscat", "Qatar": "Asia/Qatar"
};

document.addEventListener("DOMContentLoaded", () => {
  // Optionally display world stats if you have elements for them
  if (document.getElementById("populationData")) {
    document.getElementById("populationData").textContent = worldStats.population;
  }
  if (document.getElementById("economyData")) {
    document.getElementById("economyData").textContent = worldStats.economy;
  }
  if (document.getElementById("currencyData")) {
    document.getElementById("currencyData").textContent = worldStats.currency;
  }
  if (document.getElementById("exportData")) {
    document.getElementById("exportData").textContent = worldStats.exportation;
  }
  if (document.getElementById("importData")) {
    document.getElementById("importData").textContent = worldStats.importation;
  }

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
    ],
    "Middle East": [
      "Saudi Arabia", "Iran", "Turkey", "Iraq", "United Arab Emirates",
      "Israel", "Jordan", "Lebanon", "Oman", "Qatar"
    ]
  };

  // Example economy data for demonstration
  const countryEconomy = {
    "Nigeria": "$477B GDP", "Ethiopia": "$111B GDP", "Egypt": "$404B GDP", "DR Congo": "$64B GDP", "Tanzania": "$85B GDP",
    "South Africa": "$406B GDP", "Kenya": "$113B GDP", "Uganda": "$50B GDP", "Algeria": "$206B GDP", "Sudan": "$34B GDP",
    "China": "$18T GDP", "India": "$3.7T GDP", "Indonesia": "$1.4T GDP", "Pakistan": "$375B GDP", "Bangladesh": "$460B GDP",
    "Japan": "$4.2T GDP", "Philippines": "$440B GDP", "Vietnam": "$415B GDP", "Turkey": "$1.1T GDP", "Iran": "$388B GDP",
    "Russia": "$2.1T GDP", "Germany": "$4.5T GDP", "United Kingdom": "$3.4T GDP", "France": "$3.1T GDP", "Italy": "$2.2T GDP",
    "Spain": "$1.6T GDP", "Ukraine": "$200B GDP", "Poland": "$900B GDP", "Romania": "$350B GDP", "Netherlands": "$1T GDP",
    "United States": "$28T GDP", "Mexico": "$1.6T GDP", "Canada": "$2.2T GDP", "Guatemala": "$95B GDP", "Honduras": "$30B GDP",
    "Cuba": "$110B GDP", "Haiti": "$22B GDP", "Dominican Republic": "$120B GDP", "El Salvador": "$32B GDP", "Nicaragua": "$15B GDP",
    "Brazil": "$2.2T GDP", "Colombia": "$350B GDP", "Argentina": "$641B GDP", "Peru": "$268B GDP", "Venezuela": "$186B GDP",
    "Chile": "$310B GDP", "Ecuador": "$115B GDP", "Bolivia": "$44B GDP", "Paraguay": "$41B GDP", "Uruguay": "$69B GDP",
    "Saudi Arabia": "$1.1T GDP", "Iran": "$388B GDP", "Turkey": "$1.1T GDP", "Iraq": "$264B GDP", "United Arab Emirates": "$509B GDP",
    "Israel": "$522B GDP", "Jordan": "$49B GDP", "Lebanon": "$23B GDP", "Oman": "$114B GDP", "Qatar": "$235B GDP"
  };

  // Add this object after countryEconomy for demonstration
  const countryPopulation = {
    "Nigeria": "223,804,632", "Ethiopia": "126,527,060", "Egypt": "112,716,599", "DR Congo": "102,262,808", "Tanzania": "67,438,106",
    "South Africa": "60,414,495", "Kenya": "55,100,586", "Uganda": "48,582,334", "Algeria": "45,606,480", "Sudan": "48,109,005",
    "China": "1,425,671,352", "India": "1,417,173,173", "Indonesia": "277,534,122", "Pakistan": "240,485,658", "Bangladesh": "172,954,319",
    "Japan": "123,294,513", "Philippines": "117,337,368", "Vietnam": "98,858,950", "Turkey": "85,816,199", "Iran": "89,172,767",
    "Russia": "144,444,359", "Germany": "83,294,633", "United Kingdom": "67,736,802", "France": "64,756,584", "Italy": "58,870,762",
    "Spain": "47,519,628", "Ukraine": "36,744,634", "Poland": "41,026,067", "Romania": "19,892,812", "Netherlands": "17,618,299",
    "United States": "339,996,563", "Mexico": "128,455,567", "Canada": "38,781,291", "Guatemala": "17,703,190", "Honduras": "10,593,798",
    "Cuba": "11,194,449", "Haiti": "11,724,763", "Dominican Republic": "11,332,972", "El Salvador": "6,364,943", "Nicaragua": "7,046,310",
    "Brazil": "216,422,446", "Colombia": "52,085,168", "Argentina": "45,773,884", "Peru": "34,352,719", "Venezuela": "28,838,499",
    "Chile": "19,629,590", "Ecuador": "18,190,484", "Bolivia": "12,388,571", "Paraguay": "6,704,314", "Uruguay": "3,423,108",
    "Saudi Arabia": "36,947,025", "Iran": "89,172,767", "Turkey": "85,816,199", "Iraq": "45,504,560", "United Arab Emirates": "9,516,871",
    "Israel": "9,364,000", "Jordan": "11,337,052", "Lebanon": "5,353,930", "Oman": "4,644,384", "Qatar": "2,716,391"
  };

  // Example currency data for demonstration
  const countryCurrency = {
    "Nigeria": "Nigerian Naira (NGN)", "Ethiopia": "Ethiopian Birr (ETB)", "Egypt": "Egyptian Pound (EGP)", "DR Congo": "Congolese Franc (CDF)", "Tanzania": "Tanzanian Shilling (TZS)",
    "South Africa": "South African Rand (ZAR)", "Kenya": "Kenyan Shilling (KES)", "Uganda": "Ugandan Shilling (UGX)", "Algeria": "Algerian Dinar (DZD)", "Sudan": "Sudanese Pound (SDG)",
    "China": "Chinese Yuan (CNY)", "India": "Indian Rupee (INR)", "Indonesia": "Indonesian Rupiah (IDR)", "Pakistan": "Pakistani Rupee (PKR)", "Bangladesh": "Bangladeshi Taka (BDT)",
    "Japan": "Japanese Yen (JPY)", "Philippines": "Philippine Peso (PHP)", "Vietnam": "Vietnamese Dong (VND)", "Turkey": "Turkish Lira (TRY)", "Iran": "Iranian Rial (IRR)",
    "Russia": "Russian Ruble (RUB)", "Germany": "Euro (EUR)", "United Kingdom": "Pound Sterling (GBP)", "France": "Euro (EUR)", "Italy": "Euro (EUR)",
    "Spain": "Euro (EUR)", "Ukraine": "Ukrainian Hryvnia (UAH)", "Poland": "Polish Zloty (PLN)", "Romania": "Romanian Leu (RON)", "Netherlands": "Euro (EUR)",
    "United States": "United States Dollar (USD)", "Mexico": "Mexican Peso (MXN)", "Canada": "Canadian Dollar (CAD)", "Guatemala": "Guatemalan Quetzal (GTQ)", "Honduras": "Honduran Lempira (HNL)",
    "Cuba": "Cuban Peso (CUP)", "Haiti": "Haitian Gourde (HTG)", "Dominican Republic": "Dominican Peso (DOP)", "El Salvador": "United States Dollar (USD)", "Nicaragua": "Nicaraguan Córdoba (NIO)",
    "Brazil": "Brazilian Real (BRL)", "Colombia": "Colombian Peso (COP)", "Argentina": "Argentine Peso (ARS)", "Peru": "Peruvian Sol (PEN)", "Venezuela": "Venezuelan Bolívar (VES)",
    "Chile": "Chilean Peso (CLP)", "Ecuador": "United States Dollar (USD)", "Bolivia": "Bolivian Boliviano (BOB)", "Paraguay": "Paraguayan Guaraní (PYG)", "Uruguay": "Uruguayan Peso (UYU)",
    "Saudi Arabia": "Saudi Riyal (SAR)", "Iran": "Iranian Rial (IRR)", "Turkey": "Turkish Lira (TRY)", "Iraq": "Iraqi Dinar (IQD)", "United Arab Emirates": "UAE Dirham (AED)",
    "Israel": "Israeli New Shekel (ILS)", "Jordan": "Jordanian Dinar (JOD)", "Lebanon": "Lebanese Pound (LBP)", "Oman": "Omani Rial (OMR)", "Qatar": "Qatari Riyal (QAR)"
  };

  // Example exportation and importation data for demonstration
  const countryExportation = {
    "Nigeria": "$63B exports", "Ethiopia": "$4B exports", "Egypt": "$47B exports", "DR Congo": "$17B exports", "Tanzania": "$11B exports",
    "South Africa": "$123B exports", "Kenya": "$7B exports", "Uganda": "$5B exports", "Algeria": "$38B exports", "Sudan": "$4B exports",
    "China": "$3.6T exports", "India": "$770B exports", "Indonesia": "$300B exports", "Pakistan": "$39B exports", "Bangladesh": "$55B exports",
    "Japan": "$757B exports", "Philippines": "$103B exports", "Vietnam": "$354B exports", "Turkey": "$256B exports", "Iran": "$45B exports",
    "Russia": "$425B exports", "Germany": "$1.7T exports", "United Kingdom": "$468B exports", "France": "$617B exports", "Italy": "$660B exports",
    "Spain": "$475B exports", "Ukraine": "$49B exports", "Poland": "$400B exports", "Romania": "$100B exports", "Netherlands": "$965B exports",
    "United States": "$2.1T exports", "Mexico": "$593B exports", "Canada": "$596B exports", "Guatemala": "$15B exports", "Honduras": "$11B exports",
    "Cuba": "$2B exports", "Haiti": "$1B exports", "Dominican Republic": "$12B exports", "El Salvador": "$7B exports", "Nicaragua": "$7B exports",
    "Brazil": "$340B exports", "Colombia": "$57B exports", "Argentina": "$88B exports", "Peru": "$65B exports", "Venezuela": "$33B exports",
    "Chile": "$97B exports", "Ecuador": "$33B exports", "Bolivia": "$13B exports", "Paraguay": "$9B exports", "Uruguay": "$13B exports",
    "Saudi Arabia": "$321B exports", "Iran": "$45B exports", "Turkey": "$256B exports", "Iraq": "$115B exports", "United Arab Emirates": "$425B exports",
    "Israel": "$67B exports", "Jordan": "$11B exports", "Lebanon": "$4B exports", "Oman": "$56B exports", "Qatar": "$86B exports"
  };

  const countryImportation = {
    "Nigeria": "$78B imports", "Ethiopia": "$17B imports", "Egypt": "$94B imports", "DR Congo": "$15B imports", "Tanzania": "$15B imports",
    "South Africa": "$117B imports", "Kenya": "$20B imports", "Uganda": "$8B imports", "Algeria": "$35B imports", "Sudan": "$8B imports",
    "China": "$2.7T imports", "India": "$890B imports", "Indonesia": "$237B imports", "Pakistan": "$66B imports", "Bangladesh": "$89B imports",
    "Japan": "$897B imports", "Philippines": "$140B imports", "Vietnam": "$340B imports", "Turkey": "$361B imports", "Iran": "$54B imports",
    "Russia": "$285B imports", "Germany": "$1.6T imports", "United Kingdom": "$680B imports", "France": "$731B imports", "Italy": "$689B imports",
    "Spain": "$431B imports", "Ukraine": "$62B imports", "Poland": "$470B imports", "Romania": "$140B imports", "Netherlands": "$1T imports",
    "United States": "$3.4T imports", "Mexico": "$604B imports", "Canada": "$631B imports", "Guatemala": "$24B imports", "Honduras": "$15B imports",
    "Cuba": "$10B imports", "Haiti": "$5B imports", "Dominican Republic": "$25B imports", "El Salvador": "$15B imports", "Nicaragua": "$9B imports",
    "Brazil": "$272B imports", "Colombia": "$67B imports", "Argentina": "$81B imports", "Peru": "$52B imports", "Venezuela": "$16B imports",
    "Chile": "$89B imports", "Ecuador": "$31B imports", "Bolivia": "$11B imports", "Paraguay": "$14B imports", "Uruguay": "$12B imports",
    "Saudi Arabia": "$178B imports", "Iran": "$54B imports", "Turkey": "$361B imports", "Iraq": "$68B imports", "United Arab Emirates": "$365B imports",
    "Israel": "$90B imports", "Jordan": "$24B imports", "Lebanon": "$19B imports", "Oman": "$33B imports", "Qatar": "$28B imports"
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
      box.style.width = ""; // Remove or do not set a custom width for Asia

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

      const list = document.createElement("ul");
      list.style.marginTop = "6px";
      list.style.paddingLeft = "18px";
      list.style.listStyle = "disc";
      list.style.display = "none"; // Hide by default
      continentCountries[continent].forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        list.appendChild(li);
      });
      box.appendChild(list);

      // Economy box with top 10 countries
      const economyBox = document.createElement("div");
      economyBox.style.marginTop = "12px";
      economyBox.style.padding = "8px";
      economyBox.style.background = "#e6f2ff";
      economyBox.style.border = "1px solid #b3d1ff";
      economyBox.style.borderRadius = "6px";
      economyBox.style.display = "none"; // Hide by default

      const economyTitle = document.createElement("strong");
      economyTitle.textContent = "Economy";
      economyBox.appendChild(economyTitle);

      const economyList = document.createElement("ul");
      economyList.style.margin = "8px 0 0 16px";
      economyList.style.padding = "0";
      economyList.style.listStyle = "circle";
      continentCountries[continent].forEach(country => {
        const li = document.createElement("li");
        li.textContent = country;
        economyList.appendChild(li);
      });
      economyBox.appendChild(economyList);

      box.appendChild(economyBox);

      // Country display
      const countryDisplay = document.createElement("div");
      countryDisplay.style.marginTop = "8px";
      countryDisplay.style.fontWeight = "bold";
      box.appendChild(countryDisplay);

      // Economy display for selected country
      const countryEconomyDisplay = document.createElement("div");
      countryEconomyDisplay.style.marginTop = "4px";
      countryEconomyDisplay.style.fontSize = "13px";
      countryEconomyDisplay.style.color = "#2a4d8f";
      box.appendChild(countryEconomyDisplay);

      // Currency display for selected country
      const countryCurrencyDisplay = document.createElement("div");
      countryCurrencyDisplay.style.marginTop = "4px";
      countryCurrencyDisplay.style.fontSize = "13px";
      countryCurrencyDisplay.style.color = "#8f6f2a";
      box.appendChild(countryCurrencyDisplay);

      // Exportation display for selected country
      const countryExportationDisplay = document.createElement("div");
      countryExportationDisplay.style.marginTop = "4px";
      countryExportationDisplay.style.fontSize = "13px";
      countryExportationDisplay.style.color = "#2a6f8f";
      box.appendChild(countryExportationDisplay);

      // Importation display for selected country
      const countryImportationDisplay = document.createElement("div");
      countryImportationDisplay.style.marginTop = "4px";
      countryImportationDisplay.style.fontSize = "13px";
      countryImportationDisplay.style.color = "#8f2a2a";
      box.appendChild(countryImportationDisplay);

      // Economy box for selected country
      const countryEconomyBox = document.createElement("div");
      countryEconomyBox.id = "economyIdBox";
      countryEconomyBox.style.marginTop = "4px";
      countryEconomyBox.style.fontSize = "13px";
      countryEconomyBox.style.background = "#e6f2ff";
      countryEconomyBox.style.border = "1px solid #b3d1ff";
      countryEconomyBox.style.borderRadius = "6px";
      countryEconomyBox.style.padding = "6px 10px";
      countryEconomyBox.style.display = "none";
      box.appendChild(countryEconomyBox);

      // Update display on dropdown change
      dropdown.addEventListener("change", function () {
        if (this.value) {
          countryDisplay.textContent = `Selected: ${this.value}`;
          countryEconomyDisplay.textContent = `Economy: ${countryEconomy[this.value] || "Data not available"}`;
          // Show and update the economy box
          const economyBox = document.getElementById('economyBox');
          const economyValue = document.getElementById('economyValue');
          if (economyBox && economyValue) {
            economyValue.textContent = countryEconomy[this.value] || "Data not available";
            economyBox.style.display = "block";
          }
          // Population
          if (!box.populationDisplay) {
            box.populationDisplay = document.createElement("div");
            box.populationDisplay.style.marginTop = "4px";
            box.populationDisplay.style.fontSize = "13px";
            box.populationDisplay.style.color = "#2a8f4d";
            box.appendChild(box.populationDisplay);
          }
          box.populationDisplay.textContent = `Population: ${countryPopulation[this.value] || "Data not available"}`;
          // Currency
          countryCurrencyDisplay.textContent = `Currency: ${countryCurrency[this.value] || "Data not available"}`;
          // Exportation
          countryExportationDisplay.textContent = `Exportation: ${countryExportation[this.value] || "Data not available"}`;
          // Importation
          countryImportationDisplay.textContent = `Importation: ${countryImportation[this.value] || "Data not available"}`;
          // Also update the main currency box at the bottom if present
          if (document.getElementById('currencyValue') && document.getElementById('currencyBox')) {
            document.getElementById('currencyValue').textContent = countryCurrency[this.value] || "Data not available";
            document.getElementById('currencyBox').style.display = "block";
          }
          // Show and update the exportation box
          const exportationBox = document.getElementById('exportationBox');
          const exportationValue = document.getElementById('exportationValue');
          if (exportationBox && exportationValue) {
            exportationValue.textContent = countryExportation[this.value] || "Data not available";
            exportationBox.style.display = "block";
          }
          // Show and update the importation box
          const importationBox = document.getElementById('importationBox');
          const importationValue = document.getElementById('importationValue');
          if (importationBox && importationValue) {
            importationValue.textContent = countryImportation[this.value] || "Data not available";
            importationBox.style.display = "block";
          }
          // Show time in the time card for this continent
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            const now = new Date();
            timeValue.textContent = now.toLocaleTimeString();
            // Optional: update every second while a country is selected
            if (timeValue._interval) clearInterval(timeValue._interval);
            timeValue._interval = setInterval(() => {
              timeValue.textContent = new Date().toLocaleTimeString();
            }, 1000);
          }
        } else {
          countryDisplay.textContent = "";
          countryEconomyDisplay.textContent = "";
          countryEconomyBox.style.display = "block"; // Show the box even if no country is selected
          countryEconomyBox.textContent = "Economy ID: Data not available";
          if (box.populationDisplay) box.populationDisplay.textContent = "";
          countryCurrencyDisplay.textContent = "";
          countryExportationDisplay.textContent = "";
          countryImportationDisplay.textContent = "";
          // Hide exportation box if no country selected
          const exportationBox = document.getElementById('exportationBox');
          const exportationValue = document.getElementById('exportationValue');
          if (exportationBox && exportationValue) {
            exportationValue.textContent = "";
            exportationBox.style.display = "none";
          }
          // Hide importation box if no country selected
          const importationBox = document.getElementById('importationBox');
          const importationValue = document.getElementById('importationValue');
          if (importationBox && importationValue) {
            importationValue.textContent = "";
            importationBox.style.display = "none";
          }
          // Hide main economy box at the bottom if you want, or keep it visible with empty value
          const economyBox = document.getElementById('economyBox');
          const economyValue = document.getElementById('economyValue');
          if (economyBox && economyValue) {
            economyValue.textContent = "Data not available";
            economyBox.style.display = "block"; // Show the box even if no country is selected
          }
          if (document.getElementById('currencyValue') && document.getElementById('currencyBox')) {
            document.getElementById('currencyValue').textContent = "";
            document.getElementById('currencyBox').style.display = "block"; // Show currency box even if no country is selected
          }
          // Clear and stop the time card for this continent
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            timeValue.textContent = "";
            if (timeValue._interval) clearInterval(timeValue._interval);
          }
        }
      });

      // Display a random country when clicking inside the continent box
      box.addEventListener("click", function (e) {
        // Prevent this from firing when clicking the dropdown
        if (e.target === dropdown) return;
        const countries = continentCountries[continent].slice(0, 10);
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        countryDisplay.textContent = `Selected: ${randomCountry}`;
        countryEconomyDisplay.textContent = `Economy: ${countryEconomy[randomCountry] || "Data not available"}`;
        dropdown.value = randomCountry;
        // Show and update the economy box
        const economyBox = document.getElementById('economyBox');
        const economyValue = document.getElementById('economyValue');
        if (economyBox && economyValue) {
          economyValue.textContent = countryEconomy[randomCountry] || "Data not available";
          economyBox.style.display = "block";
        }
        if (!box.populationDisplay) {
          box.populationDisplay = document.createElement("div");
          box.populationDisplay.style.marginTop = "4px";
          box.populationDisplay.style.fontSize = "13px";
          box.populationDisplay.style.color = "#2a8f4d";
          box.appendChild(box.populationDisplay);
        }
        box.populationDisplay.textContent = `Population: ${countryPopulation[randomCountry] || "Data not available"}`;
        countryCurrencyDisplay.textContent = `Currency: ${countryCurrency[randomCountry] || "Data not available"}`;
        countryExportationDisplay.textContent = `Exportation: ${countryExportation[randomCountry] || "Data not available"}`;
        countryImportationDisplay.textContent = `Importation: ${countryImportation[randomCountry] || "Data not available"}`;
        // Show and update the exportation box
        const exportationBox = document.getElementById('exportationBox');
        const exportationValue = document.getElementById('exportationValue');
        if (exportationBox && exportationValue) {
          exportationValue.textContent = countryExportation[randomCountry] || "Data not available";
          exportationBox.style.display = "block";
        }
        // Show and update the importation box
        const importationBox = document.getElementById('importationBox');
        const importationValue = document.getElementById('importationValue');
        if (importationBox && importationValue) {
          importationValue.textContent = countryImportation[randomCountry] || "Data not available";
          importationBox.style.display = "block";
        }
        if (document.getElementById('currencyValue') && document.getElementById('currencyBox')) {
          document.getElementById('currencyValue').textContent = countryCurrency[randomCountry] || "Data not available";
          document.getElementById('currencyBox').style.display = "block";
        }
      });

      // Add a label under each continent box
      const labelUnder = document.createElement("div");
      labelUnder.style.marginTop = "10px";
      labelUnder.style.fontStyle = "italic";
      labelUnder.style.fontSize = "13px";
      labelUnder.textContent = "Explore countries and their data.";
      box.appendChild(labelUnder);

      container.appendChild(box);

      // --- Place this block after you append labelUnder and box to container ---

      // Create a horizontal container for the info boxes
      const infoContainer = document.createElement('div');
      infoContainer.style.display = "flex";
      infoContainer.style.flexDirection = "row";
      infoContainer.style.gap = "14px";
      infoContainer.style.margin = "14px 0 24px 0";

      // Economy box with icon
      const economyBoxH = document.createElement('div');
      economyBoxH.style.cssText = `
        border: 1px solid #b3d1ff;
        background: #e6f2ff;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      economyBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a4d8f;"><i class="fas fa-chart-line"></i></span>
        <strong>Economy</strong>
        <p id="${continent.toLowerCase()}EconomyValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(economyBoxH);

      // Currency box with icon
      const currencyBoxH = document.createElement('div');
      currencyBoxH.style.cssText = `
        border: 1px solid #ffd966;
        background: #fffbe6;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      currencyBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#8f6f2a;"><i class="fas fa-coins"></i></span>
        <strong>Currency</strong>
        <p id="${continent.toLowerCase()}CurrencyValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(currencyBoxH);

      // Exportation box with icon
      const exportationBoxH = document.createElement('div');
      exportationBoxH.style.cssText = `
        border: 1px solid #8fd9ff;
        background: #e6f7ff;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      exportationBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a6f8f;"><i class="fas fa-box-open"></i></span>
        <strong>Exportation</strong>
        <p id="${continent.toLowerCase()}ExportationValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(exportationBoxH);

      // Importation box with icon
      const importationBoxH = document.createElement('div');
      importationBoxH.style.cssText = `
        border: 1px solid #ffb3b3;
        background: #fff0f0;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      importationBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#8f2a2a;"><i class="fas fa-truck-loading"></i></span>
        <strong>Importation</strong>
        <p id="${continent.toLowerCase()}ImportationValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(importationBoxH);

      // Time card for each continent
      const timeBoxH = document.createElement('div');
      timeBoxH.style.cssText = `
        border: 1px solid #b3e6ff;
        background: #f0fbff;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      timeBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a6f8f;"><i class="fas fa-clock"></i></span>
        <strong>Time</strong>
        <p id="${continent.toLowerCase()}TimeValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(timeBoxH);

      // Population card for each continent
      const populationBoxH = document.createElement('div');
      populationBoxH.style.cssText = `
        border: 1px solid #b3ffb3;
        background: #f0fff0;
        border-radius: 8px;
        padding: 12px;
        width: 180px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
      populationBoxH.innerHTML = `
        <span style="font-size:20px;margin-bottom:4px;color:#2a8f4d;"><i class="fas fa-users"></i></span>
        <strong>Population</strong>
        <p id="${continent.toLowerCase()}PopulationValue" style="margin: 8px 0 0 0;"></p>
      `;
      infoContainer.appendChild(populationBoxH);

      // Insert the horizontal info container after the continent box
      container.appendChild(infoContainer);

      // --- Add this code after your dropdown change event to update the values in the cards ---
      dropdown.addEventListener("change", function () {
        if (this.value) {
          document.getElementById(`${continent.toLowerCase()}EconomyValue`).textContent = countryEconomy[this.value] || "Data not available";
          document.getElementById(`${continent.toLowerCase()}CurrencyValue`).textContent = countryCurrency[this.value] || "Data not available";
          document.getElementById(`${continent.toLowerCase()}ExportationValue`).textContent = countryExportation[this.value] || "Data not available";
          document.getElementById(`${continent.toLowerCase()}ImportationValue`).textContent = countryImportation[this.value] || "Data not available";
          // Show population in the population card for this continent
          const popValue = document.getElementById(`${continent.toLowerCase()}PopulationValue`);
          if (popValue) {
            popValue.textContent = countryPopulation[this.value] || "Data not available";
          }
          // Show local time in the time card for this country
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            const tz = countryTimezones[this.value] || "UTC";
            function updateLocalTime() {
              const now = new Date();
              try {
                timeValue.textContent = now.toLocaleTimeString("en-US", { timeZone: tz });
              } catch {
                timeValue.textContent = now.toLocaleTimeString();
              }
            }
            updateLocalTime();
            if (timeValue._interval) clearInterval(timeValue._interval);
            timeValue._interval = setInterval(updateLocalTime, 1000);
          }
        } else {
          document.getElementById(`${continent.toLowerCase()}EconomyValue`).textContent = "";
          document.getElementById(`${continent.toLowerCase()}CurrencyValue`).textContent = "";
          document.getElementById(`${continent.toLowerCase()}ExportationValue`).textContent = "";
          document.getElementById(`${continent.toLowerCase()}ImportationValue`).textContent = "";
          // Clear the population card for this continent
          const popValue = document.getElementById(`${continent.toLowerCase()}PopulationValue`);
          if (popValue) {
            popValue.textContent = "";
          }
          // Clear and stop the time card for this continent
          const timeValue = document.getElementById(`${continent.toLowerCase()}TimeValue`);
          if (timeValue) {
            timeValue.textContent = "";
            if (timeValue._interval) clearInterval(timeValue._interval);
          }
        }
      });
    });
  }
>>>>>>> 88602b892d5e317a7492d8e1cfa4f225f88e9f93
});