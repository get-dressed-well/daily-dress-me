const shirt = {
  _id: 22,
  type: "shirt",
  name: "Nike Legend Short Sleeve Tee",
  description: "Athletic short sleeve shirt.",
  link: "https://www.amazon.com/dp/B007OY4CDG/ref=twister_B0096E59S4",
  image: "./warm-weather/sportShirt.png",
  price: 14.10,
  company: "Nike",
  materials: ["100% Polyester"],
  care: "Unknown",
  status: "Imported"
}

const shorts = {
  _id: 23,
  type: "shorts",
  name: "Quick Dry Breathable Gym Running Shorts",
  description: "High quality elastic and quick dry material with Two big zipper pockets.",
  link: "https://www.amazon.com/Geval-Quick-Breathable-Running-Shorts/dp/B06XW35NS9/ref=sr_1_37?ie=UTF8&qid=1515112274&sr=8-37&keywords=men%27s%2Bgym%2Bshorts&th=1",
  image: "./warm-weather/sportShort.png",
  price: 14.99,
  company: "Geval",
  materials: ["Unknown"],
  care: "Unknown",
  status: "Imported"
}

const shoes = {
  _id: 24,
  type: "shoes",
  name: "NMD_R1 STLT Primeknit Shoes",
  description: "Progressive, premium, pioneering. NMD blends pure adidas heritage with advanced, modern materials to create a futuristic look that resonates on the streets. The adaptive, supportive adidas Primeknit upper of these men's shoes stretches and fits snugly, like a sock. The stripped-down upper features floating laces and a welded heel piece. Boost cushioning provides continuous comfort and responsiveness.",
  link: "https://www.adidas.com/us/nmd_r1-stlt-primeknit-shoes/CQ2387.html",
  image: "./warm-weather/sportShoe.png",
  price: 170,
  company: "Adidas",
  materials: ["rubber", "textile"],
  care: "Unknown",
  status: "Imported"
}

const outfit1 = {
  _id: 5,
  clothes: [shoes, shorts, shirt],
  temp: "warm",
  condition: "sunny"
}


const casualShorts = {
  _id: 25,
  type: "shorts",
  name: "Under Armour Men's Match Play Patterned Shorts",
  description: "Soft, stretchy woven fabric delivers total comfort. Moisture Transport System wicks sweat & dries fast.",
  link: "https://www.amazon.com/Under-Armour-Match-Patterned-Short/dp/B00Z9FYP84/ref=sr_1_36?s=apparel&ie=UTF8&qid=1515112241&sr=1-36&nodeID=7147441011&psd=1&keywords=under+armour+shorts",
  image: "./warm-weather/casualShort.png",
  price: 15.65,
  company: "Under Armour",
  materials: ["100% polyester"],
  care: "Machine Washable",
  status: "Imported"
}

const casualShirt = {
  _id: 26,
  type: "shirt",
  name: "Short Sleeve Gradual V Neck Knit Shirt",
  description: "Zoo York fashion short sleeve gradual V-neck knit top. Stripe layout printed on the reverse side of the fabric. Reverse print on the slub body gives a textured look.",
  link: "https://www.amazon.com/Zoo-York-Sleeve-Gradual-Machine/dp/B01M0MQACR/ref=sr_1_296?s=apparel&ie=UTF8&qid=1515113875&sr=1-296&nodeID=7147441011&psd=1&keywords=mens+print+vneck+tshirts",
  image: "./warm-weather/casualShirt.png",
  price: 15.65,
  company: "Zoo York",
  materials: ["60% cotton", "40% polyester"],
  care: "Machine Washable",
  status: "Imported"
}

const casualShoes = {
  _id: 27,
  type: "shoes",
  name: "Men's Running Shoes"
  description: "Perfect accord with human body engineering, green, healthy concept design. Selection of good material, breathable, lightweight, comfortable shoes. Fashion unique durable, safe environmental protection material",
  link: "https://www.amazon.com/dp/B075RB3D6J/ref=twister_B075MJ4N14",
  image: "./warm-weather/casualShoe.png",
  price: 14.99,
  comapny: "Keezmz",
  materials: ["Unknown"],
  care: "Unknown",
  status: "Imported"
}

const outfit2 = {
  _id: 6,
  clothes: [casualShorts, casualShirt, casualShoes],
  temp: "warm",
  condition: "sunny"
}

const outfits = [outfit1, outfit2];

module.exports = outfits;
