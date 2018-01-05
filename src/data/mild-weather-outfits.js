const hoodie = {
  _id: 18,
  type: "jacket",
  name: "Full-Zip Hoodie",
  description: "Uses light and fresh AIRism. An essential leisurewear item.",
  link: "https://www.uniqlo.com/us/en/men-airism-full-zip-hoodie-404169.html?dwvar_404169_size=SMB001&dwvar_404169_color=COL69&cgid=men-airism-collection#start=20&cgid=men-airism-collection",
  image: "./mild-weather/hoodie.png",
  price: 19.90,
  company: "Uniqlo",
  materials: ["62% Cotton", "38% Polyester"],
  care: "Machine washable (gentle cycle)",
  status: "Imported"
}

const tshirt = {
  _id: 19,
  type: "tshirt",
  name: "Short Sleeve T-shirt",
  description: "The ultimate t-shirt for comfort and style, made in 100% premium Supima® cotton.",
  link: "https://www.uniqlo.com/us/en/men-supima-cotton-v-neck-short-sleeve-t-shirt-199145.html?dwvar_199145_color=COL66#start=9&cgid=men-t-shirts",
  image: "./mild-weather/tee.png",
  price: 9.90,
  company: "Uniqlo",
  materials: ["100% Cotton"],
  care: "Machine washable (cold)",
  status: "Imported"
}

const chinoPants = {
  _id: 20,
  type: "pants",
  name: "Chino Flat Front Pants",
  description: "Genuine vintage chinos with quality in the details.",
  link: "https://www.uniqlo.com/us/en/men-vintage-regular-fit-chino-flat-front-pants-172738.html?dwvar_172738_color=COL34#start=12&cgid=men-chinos",
  image: "./mild-weather/chino.png",
  price: 39.90,
  company: "Uniqlo",
  materials: ["100% Cotton"],
  care: "Machine washable (cold)",
  status: "Imported"
}

const shoes = {
  _id: 21,
  type: "shoes",
  name: "Men's Classic Low Skate Shoe",
  description: "Low-cut skate sneaker featuring rubber toe cap and heel counter and herringbone tread",
  link: "https://www.amazon.com/HUF-Classic-Signature-Style-Skate/dp/B014R4AVTY/ref=sr_1_58?s=apparel&ie=UTF8&qid=1515111494&sr=1-58&nodeID=7147441011&psd=1&keywords=men%27s+style+shoes",
  image: "./mild-weather/skateShoe.png",
  price: 37.99,
  company: "Uniqlo",
  materials: ["rubber", "suede"],
  care: "Unknown",
  status: "Imported"
}

const outfit1 = {
  _id: 4,
  clothes: [hoodie, tshirt, chinoPants, shoes],
  temp: "mild",
  condition: "sunny"
}

const outfits = [outfit1];

module.exports = outfits;
