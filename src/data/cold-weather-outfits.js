const woolJacket = {
  _id: 1,
  type: "jacket",
  name: "Melton Wool-Blend Coat",
  description: "A timeless car coat, beautifully crafted in a luxurious wool blend from Mario Bellucci, one of Italy's finest mills.",
  link: "http://bananarepublic.gap.com/browse/product.do?cid=1090112&pcid=1016720&vid=1&pid=795677032",
  image: "./cold-weather/woolCoat.png",
  price: 300.00,
  company: "Banana Republic",
  materials: ["80% virgin wool", "20% nylon"],
  care: "Dry clean only",
  status: "Imported",
}

const woolSweater = {
  _id: 2,
  type: "sweater",
  name: "Merino Crew Sweater",
  description: "A high quality merino wool sweater that is comfortable and wrinkle resistant. It has breathable fiber and is prized for its odor resistance, soft feel, and ability to retain shape over time. It has a rib-knit crew neck and long sleeves with rib-knit cuffs.",
  link: "http://bananarepublic.gap.com/browse/product.do?cid=1089972&pcid=28660&vid=1&pid=796480002",
  image: "./cold-weather/dressSweater.png",
  price: 67.99,
  company: "Banana Republic",
  materials: ["100% extra-fine Merino wool"],
  care: "Dry clean"
}

const dressShirt = {
  _id: 3,
  type: "shirt",
  name: "Camden Standard-Fit Oxford Shirt",
  description: "A button down collar shirt made with 100% cotton.",
  link: "http://bananarepublic.gap.com/browse/product.do?cid=1076637&pcid=44873&vid=1&pid=176260002",
  image: "./cold-weather/dressShirt.png",
  price: 64.50,
  company: "Banana Republic",
  materials: ["100% cotton"],
  care: "Machine washable",
  status: "Imported"
}

const dressPants = {
  _id: 4,
  type: "pants",
  name: "Aiden Slim Rapid Movement Chino",
  description: "Rapid movement chins are tailored for performance and engineered with stretch for a comfortable fit that keeps its shape. It also has water and stain resistant properties so you stay looking your best.",
  link: "http://bananarepublic.gap.com/browse/product.do?cid=1086241&pcid=35878&vid=1&pid=795219072",
  image: "./cold-weather/dressPants.png",
  price: 98.00,
  company: "Banana Republic",
  materials: ["Unknown"],
  care: "Machine washable",
  status: "Imported"
}

const dressShoes = {
  _id: 5,
  type: "shoes",
  name: "Men's Box Boot",
  description: "Fashionable dress boot in ankle silhouette featuring a cap toe with downturned seam.",
  link: "https://www.amazon.com/Calvin-Klein-Mens-Darsey-Black/dp/B01AYZRO54/ref=sr_1_47?ie=UTF8&qid=1515090819&sr=8-47&keywords=dress+boots+for+men",
  image: "./cold-weather/dressBoot.png",
  price: 70.00,
  company: "Calvin Klein",
  materials: ["Leather", "Rubber Sole"],
  care: "Unknown",
  status: "Imported"
}

const scarf = {
  _id: 6,
  type: "accessory",
  name: "Men's Striped Scarf",
  description: "Woven Nautica scarf",
  link: "https://www.amazon.com/Nautica-Striped-Scarf-Granite-Heather/dp/B01I22ODLY/ref=sr_1_26?s=apparel&ie=UTF8&qid=1515090969&sr=1-26&nodeID=7141123011&psd=1&keywords=mens+scarf&refinements=p_n_feature_eighteen_browse-bin%3A14630392011",
  image: "./cold-weather/scarf.png",
  price: 70.00,
  company: "Nautica",
  materials: ["60% nylon", "40% Wool"],
  care: "Unknown",
  status: "Imported"
}

const leatherGloves = {
  _id: 7,
  type: "gloves",
  name: "Men's Touch Screen Gloves",
  description: "Leather thermal insulated lining touch screen compatible gloves.",
  link: "https://www.amazon.com/Leather-Smartphone-Gloves-Screen-Android/dp/B00AAJIUCG/ref=sr_1_11?s=apparel&ie=UTF8&qid=1515098941&sr=1-11&nodeID=7147441011&psd=1&keywords=mens+leather+gloves",
  image: "./cold-weather/leatherGloves.png",
  price: 8.49,
  company: "Alpine Swiss",
  materials: ["Leather"],
  care: "Unknown",
  status: "Unkown"
}

const outfit1 = {
  _id: 1
  clothes: [woolJacket, woolSweater, dressShirt, dressShoes, dressPants, scarf, leatherGloves],
  temp: "cold",
  condition: "sunny",
};

const winterJacket = {
  _id: 8,
  type: "jacket",
  name: "McMurdo Parka III",
  description: "For full-coverage during winter's worst, shield yourself in this weatherproof hooded parka that's insulated with responsibly sourced 550-fill goose down insulation for reliable warmth. Includes a lifetime gaurantee.",
  link: "https://www.thenorthface.com/shop/mens-jackets-vests-insulated/mens-mcmurdo-parka-iii-nf0a33rf?variationId=21L",
  image: "./cold-weather/parka.png",
  price: 330.00,
  company: "The North Face",
  materials: ["100% windproof fabric", "goose down", "nylon", "polyester"],
  care: "Machine washable",
  status: "Unkown"
}

const jeanPants = {
  _id: 9,
  type: "pants",
  name: "Thermolite(R) slim fit jeans with GapFlex",
  description: "Premium denim with stretch. Dark indigo wash with subtle whiskering. Button closure, zip fly.",
  link: "http://www.gap.com/browse/product.do?cid=1050839&pcid=6998&vid=1&pid=936268002",
  image: "./cold-weather/jeans.png",
  price: 79.95,
  company: "Gap",
  materials: ["70% cotton", "28% other", "2% Polyurethane"],
  care: "Machine washable",
  status: "Imported"
}

const henleyShirt = {
  _id: 10,
  type: "shirt",
  name: "Men's Slim Fit Henley",
  description: "Crew neck henley long sleeve shirt featuring four-button placket",
  link: "https://www.amazon.com/dp/B075FR342Q/ref=sspa_dk_detail_1?psc=1",
  image: "./cold-weather/henley.png",
  price: 20.99,
  company: "Derminpro",
  materials: ["100% cotton"],
  care: "Machine washable",
  status: "Imported"
}

const winterBoots = {
  _id: 11,
  type: "shoes",
  name: "Men's Thermoball(TM) Lifty 400 Winter Boots",
  description: "Whether you're hiking snowy hills, ice fishing, or manning the lifts, your feet will be safe and warm in these rugged, waterproof winter boots with heavy duty (400g) PrimaLoft(R) insulation and temperature-sensitive soles for superior traction.",
  link: "https://www.thenorthface.com/shop/shoes-mens-winter-boots/mens-thermoball-lifty-winter-boots-nf0a331a?variationId=YRA",
  image: "./cold-weather/winterBoot.png",
  price: 160.00,
  company: "The North Face",
  materials: ["leather", "rubber"],
  care: "Unknown",
  status: "Unknown"
}

const beanie = {
  _id: 12,
  type: "hat",
  name: "Winter Cuffed Beanie",
  description: "Our knit cuff beanie cap is very comfortable and could give you lasting warmth and softness in cold winter. It's ornament of your clothes and reflects the fashionable casual wear style.",
  link: "https://www.amazon.com/Vmevo-Cuffed-Beanie-Winter-Unisex/dp/B0761HM9VY/ref=sr_1_5?ie=UTF8&qid=1515094037&sr=8-5&keywords=men%27s+winter+beanie",
  image: "./cold-weather/beanie.png",
  price: 12.99,
  company: "Vmevo",
  materials: ["leather", "rubber"],
  care: "Hand washable",
  status: "Unknown"
}

const gloves = {
  _id: 13,
  type: "accessory",
  name: "Power Stretch Glove",
  description: "Our knit cuff beanie cap is very comfortable and could give you lasting warmth and softness in cold winter. It's ornament of your clothes and reflects the fashionable casual wear style.",
  link: "https://www.amazon.com/Vmevo-Cuffed-Beanie-Winter-Unisex/dp/B0761HM9VY/ref=sr_1_5?ie=UTF8&qid=1515094037&sr=8-5&keywords=men%27s+winter+beanie",
  image: "./cold-weather/gloves.png",
  price: 12.99,
  company: "Vmevo",
  materials: ["leather", "rubber"],
  care: "Hand washable",
  status: "Unknown"
}


const outfit2 = {
  _id: 2,
  clothes: [winterJacket, jeanPants, henleyShirt, winterBoots, beanie, gloves],
  temp: "cold",
  condition: "snowy",
};

const coldOutfits = [outfit1, outfit2];

module.exports = coldOutfits;
