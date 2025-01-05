// Define the cars data (it should be dynamically populated from server-side in a real app)
const cars = [
  { name: "Fortuner", company: "Toyota", seater: 7 },
  { name: "Endeavour", company: "Ford", seater: 7 },
  { name: "XUV700", company: "Mahindra", seater: 7 },
  { name: "Scorpio", company: "Mahindra", seater: 7 },
  { name: "Creta", company: "Hyundai", seater: 5 },
  { name: "Harrier", company: "Tata", seater: 5 },
  { name: "Baleno", company: "Maruti", seater: 5 },
  { name: "EcoSport", company: "Ford", seater: 5 },
  { name: "Etios", company: "Toyota", seater: 5 },
  { name: "Swift", company: "Maruti", seater: 5 },
  { name: "City", company: "Honda", seater: 5 },
  { name: "Verna", company: "Hyundai", seater: 5 },
  { name: "Dzire", company: "Maruti", seater: 5 },
  { name: "Nexon", company: "Tata", seater: 5 },
  { name: "Thar", company: "Mahindra", seater: 4 },
  { name: "Seltos", company: "Kia", seater: 5 },
  { name: "Kwid", company: "Renault", seater: 5 },
  { name: "Crysta", company: "Toyota", seater: 7 },
];

// Function to filter cars based on input fields
function filterCars() {
  const nameFilter = document.getElementById("carSearch").value.toLowerCase();
  const companyFilter = document
    .getElementById("companySearch")
    .value.toLowerCase();
  const seaterFilter = document.getElementById("seaterSearch").value;

  const filteredCars = cars.filter((car) => {
    const nameMatch = car.name.toLowerCase().includes(nameFilter);
    const companyMatch = car.company.toLowerCase().includes(companyFilter);
    const seaterMatch = seaterFilter
      ? car.seater === parseInt(seaterFilter)
      : true;

    return nameMatch && companyMatch && seaterMatch;
  });

  displayResults(filteredCars);
}

// Function to display filtered results
function displayResults(filteredCars) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = ""; // Clear previous results
  resultsContainer.style.display = filteredCars.length > 0 ? "block" : "none";

  filteredCars.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.name} - ${car.company} - ${car.seater} Seater`;
    li.onclick = () => selectCar(car);
    resultsContainer.appendChild(li);
  });
}

// Function to handle car selection and redirect to the correct URL
function selectCar(car) {
  const carNameSlug = car.name.toLowerCase().replace(/\s+/g, "-"); // Convert name to URL-friendly slug
  window.location.href = `/insta/${carNameSlug}`; // Redirect to the car-specific page
}



// Event listener for search input fields
document.getElementById("carSearch").addEventListener("input", filterCars);
document.getElementById("companySearch").addEventListener("input", filterCars);
document.getElementById("seaterSearch").addEventListener("input", filterCars);

