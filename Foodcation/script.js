
var filterInterface = document.getElementById("places");

var locationSelect = document.getElementById("location");
var selectedLocation = locationSelect.value; 

var formHandle = document.forms.form;
formHandle.onsubmit = submitForm;
console.log(form);

const filteringData = [
	{
		title: "Hitotoki Bakery",
        location: "Toronto",
        operating_hours: "11:00a.m - 7:00p.m",
        address: "25 Carlton St, Unit D.",
		category: "Bakery",
		imgUrl: "images/Hitotoki_Bakery.webp",
	},
    {
		title: "Pho Tien Thanh",
        location: "Toronto",
		operating_hours: "11:00a.m - 10:00p.m",
        address: "57 Ossington Ave.",
		category: "Restaurant",
		imgUrl: "images/Pho_Tien_Thanh.webp",
	},
	{
		title: "Hong Kong Island Dim Sum House",
        location: "Toronto",
        operating_hours: "8:00a.m - 8:00p.m",
        address: "248 Spadina Ave",
		category: "Bakery",
		imgUrl: "images/Hong_Kong_Island_Dim_Sum_House.webp",
	},
	{
		title: "Neo Coffee Bar",
        location: "Toronto",
        operating_hours:"7:00a.m - 10:00p.m",
        address:"161 Frederick St.",
		category: "Café",
		imgUrl: "images/Neo_Coffee_Bar.jpg",
	},
    {
		title: "George's Deli & B.B.Q",
        location: "Toronto",
		operating_hours: "10:00a.m - 9:00p.m",
        address: "795 Bathurst Ave.",
		category: "Restaurant",
		imgUrl: "images/Georges_Deli_&_BBQ.webp",
	},
	{
		title: "Sneaky Dee's",
        location: "Toronto",
        operating_hours:"10:00a.m - 3:00a.m",
        address:"431 College St.",
		category: "Drinks",
		imgUrl: "images/Sneaky_Dees.webp",
	},
	
	{
		title: "R&D",
        location: "Toronto",
		operating_hours: "5:00p.m - 10:00p.m",
        address: "241 Spadina Ave.",
		category: "Restaurant",
		imgUrl: "images/R&D.jpg",
	},
	{
		title: "supercoffee",
        location: "Toronto",
        operating_hours:"6:30a.m - 7:00p.m",
        address:"1148 Weston Rd",
		category: "Café",
		imgUrl: "images/supercoffee.webp",
	},
	{
		title: "Butter Baker",
        location: "Toronto",
		operating_hours: "11:00a.m - 10:00p.m",
        address: "120 Dundas St West",
		category: "Bakery",
		imgUrl: "images/Butter_Baker.webp",
	},
	{
		title: "Mother Cocktail Bar",
        location: "Toronto",
		operating_hours: "6:00a.m - 2:00a.m",
        address: "874 Queen St W.",
		category: "Drinks",
		imgUrl: "images/Mother_Cocktail_Bar.jpg",
	},
    {
		title: "Asakusa Kagetsudō Honten",
        location: "Tokyo",
		operating_hours: "10:00a.m - 5:00p.m",
        address: "2 Chome-7-13 Asakusa, Taito City",
		category: "Bakery",
		imgUrl: "images/Asakusa_Kogetsuo_Honten.jpg",
	},
    {
		title: "Roast Beef Ohno",
        location: "Tokyo",
		operating_hours: "11:00a.m - 11:00p.m",
        address: "1 Chome-18-22 Minamiikebukuro, Toshima City",
		category: "Restaurant",
		imgUrl: "images/Roast_Beef_Ohno.jpg",
	},
    {
		title: "cafe capyba",
        location: "Tokyo",
		operating_hours: "10:00a.m - 6:00p.m",
        address: "1 Chome-31-3 Higashimukojima, Sumida City",
		category: "Café",
		imgUrl: "images/cafe_capyba.jpg",
	},
    {
		title: "Bartizan Bread Factory",
        location: "Tokyo",
		operating_hours: "8:00a.m - 8:00p.m",
        address: "7 Chome-11-4 Minamiaoyama, Minato City",
		category: "Bakery",
		imgUrl: "images/Bartizan_Bread_Factory.jpg",
	},
    {
		title: "Ichiran Ramen",
        location: "Tokyo",
		operating_hours: "9:00a.m - 6:00p.m",
        address: "7 Chome-1-1 Ueno, Taito City",
		category: "Restaurant",
		imgUrl: "images/Ichiran_Ramen.jpg",
	},
    {
		title: "Mugi no Oto",
        location: "Tokyo",
		operating_hours: "5:00p.m - 5:00a.m",
        address: "1 Chome-12-15 Kabuchiko, Shinjuku City",
		category: "Drinks",
		imgUrl: "images/Mugi_no_Oto.jpg",
	},
    {
		title: "GYOPAO Gyoza Roppongi",
        location: "Tokyo",
		operating_hours: "12:00p.m - 11:45p.m",
        address: "4 Chome-9-8 Roppongi, Minato City",
		category: "Restaurant",
		imgUrl: "images/GYOPAO_Gyoza_Roppongi.png",
	},
    {
		title: "Teppan Baby",
        location: "Tokyo",
		operating_hours: "5:00p.m - 5:00a.m",
        address: "1 Chome-17-4 Kabuchikom, Shinjuku City",
		category: "Restaurant",
		imgUrl: "images/Teppan_Baby.jpg",
	},
    {
		title: "Bake Cheese Tart Shinjuku",
        location: "Tokyo",
		operating_hours: "10:30a.m - 9:30p.m",
        address: "3 Chome-38-1 Shinjuku, Shinjuku City",
		category: "Bakery",
		imgUrl: "images/Bake_Cheese_Tart.jpg",
	},
    {
		title: "Ginza 300BAR",
        location: "Tokyo",
		operating_hours: "5:00p.m - 2:00a.m",
        address: "5 Chome-9-11 Ginza, Chuo City",
		category: "Drinks",
		imgUrl: "images/Ginza_300_BAR.jpg",
	}
];

filterInterface.style.display = "none";

//Reset the product card and planner display when changing the location
locationSelect.addEventListener('change', () => {
	selectedLocation = locationSelect.value;
	filterInterface.style.display = "none";
	plannerList.innerHTML = "";
  });

function submitForm(event) {
    event.preventDefault();
	console.log(selectedLocation)

	var formLocation = formHandle.location;

  	 if(formLocation.value === 'x') {
		console.log("No location selected");
        formLocation.style.background = "#b00b1e";
		return false;
    } else {
  		// Filter the data
		formLocation.style.background = "";
		document.getElementById('places').scrollIntoView();
  		const filteredData = filteringData.filter(data => data.location === selectedLocation); 

  		// Update the display
  		displayFilterCards(filteredData); // Display only selected location's cards
  		displayFilterButtons(filteredData);  // Update buttons in case the set changes
    	filterInterface.style.display = "flex";
		}
}

const filteringCategories = document.querySelector(".filtering-categories");
const filteringContent = document.querySelector(".filtering-content");
const plannerList = document.querySelector(".planner-list");

// Displaying the product cards
const displayFilterCards = (filteringData) => {
	const displayCards = filteringData.map((data) => {
			return `<div class="product-card">
                    	<figcaption class="card-body">	
                        	<h4 class="title"><b>${data.title}</b></h4>
                        	<p class="operating_hours"> Hours: ${data.operating_hours}</p>
                        	<p class="address"> Address: ${data.address}</p>
							<span class="material-symbols-outlined">favorite</span>
                    	</figcaption>
                    	<figure class="card-thumb">
                        	<img src=${data.imgUrl} alt = ''" />
                    	</figure>
                	</div>`;}).join("");
	filteringContent.innerHTML = displayCards;

	// Get all the product cards
    const productFavorite = document.querySelectorAll(".material-symbols-outlined");
    
	// Attach event listener to each product card
    productFavorite.forEach((card, index) => {
        card.addEventListener("click", (event) => {
        console.log("Product card clicked:", filteringData[index].title); 
		/*Not working as intended, uncaught errors with index*/
		//plannerList.innerHTML += filteringData[index].title + '<span class="material-symbols-outlined">remove</span>' + '<span class="material-symbols-outlined">add</span>' + '<br>';
		plannerList.innerHTML += filteringData[index].title +"<br>";
	});
    });
};

// Displaying the category buttons
const displayFilterButtons = (filteringData) => {
	const categories = filteringData.reduce(
		(values, data) => {
			if (!values.includes(data.category)) {
				values.push(data.category);
			}
			return values;
		}, ["All"]);

	const categoryButtons = categories.map((category) => {
		return `<button class="filter-button" data-category=${category}>${category}</button>`;}).join("");
        filteringCategories.innerHTML = categoryButtons;

	const filterButtons = document.querySelectorAll(".filter-button");
	// Filter btn event handler
	filterButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const category = event.currentTarget.dataset.category;
			const filteredCategory = filteringData.filter((data) => {
				if (data.category === category) {
					return data;
				}});

			if (category === "All") {
				displayFilterCards(filteringData);
			} else {
				displayFilterCards(filteredCategory);
			}
        });
	});
	
};