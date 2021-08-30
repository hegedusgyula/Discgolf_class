class UI {
	//productConstructor
	constructor( src, name, category, description, price){
		this.src = src;
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
	this.productImageSelector = ".js-product-image";
	this.productNameSelector = ".js-product-name";
	this.productCategorySelector = ".js-product-category";
	this.productDescriptionSelector = ".js-product-description";
	this.productPriceSelector = ".js-product-price";
  
	this.productImageElement = document.querySelector(this.productImageSelector);
	this.productNameElement = document.querySelector(this.productNameSelector);
	this.productCategoryElement = document.querySelector(this.productCategorySelector);
	this.productDescriptionElement = document.querySelector(this.productDescriptionSelector);
	this.productPriceElement = document.querySelector(this.productPriceSelector);
	}
	placing() {
		this.productImageElement.src = src;
		this.productNameElement.textContent = name;
		this.productCategoryElement.textContent = category;
		this.productDescriptionElement.textContent = description;
		this.productPriceElement.textContent = price;
	}
	
	
	
};

const disc = new UI('assets/Dogs.jpg', 'Hero SuperAero', 'Discgolf', 'a disc that floats like a butterfly, holds up like a SuperHero', 32);
document.querySelector('.js-product-name').textContent = disc.name;
document.querySelector('.js-product-price').textContent = disc.price;
document.querySelector('.js-product-image').src = disc.src;
document.querySelector('.js-product-description').textContent = disc.description;
document. querySelector('.js-product-category').textContent = disc.category;

const catcher = new UI('assets/Capture.jpg', 'DiscCatcher Target', 'Discgolf', 'DiscCatcher Target is a chain grid that catches fast abd slow puts, heavy and light discs like no other target', 399);

document.querySelector('.js-product-name2').textContent = catcher.name;
document.querySelector('.js-product-price2').textContent = catcher.price;
document.querySelector('.js-product-image2').src = catcher.src;
document.querySelector('.js-product-description2').textContent = catcher.description;
document. querySelector('.js-product-category2').textContent = catcher.category;