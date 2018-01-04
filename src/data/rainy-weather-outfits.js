const rainJacket = {
  _id: 14,
  type: "jacket",
  name: "Palisades Jacket",
  description: "A versatile jacket with true all-weather flexibility, the Palisades Jacket boasts lightweight and comfortable waterproof protection with its two-layer GORE-TEX(R) fabric, Zippin(TM) compatibility and mountain rich features. Lifetime warranty",
  link: "http://www.marmot.com/palisades-jacket/31500.html?dwvar_31500_size=000015S&dwvar_31500_color=001&cgid=men_jackets-and-vests_waterproof-shells#start=1",
  image: ,
  price: 325.00,
  company: "Marmot",
  materials: ["GORE-TEX(R)", "100% nylon 4.5 oz/yd"],
  care: "Unknown",
  status: "Unknown"
}

const rainPants = {
  _id: 15,
  type: "pants",
  name: "Morrison Jean",
  description: "COOLMAX(R). Ultraviolet Protection Factor 50. Moisture Management and Breathability. Stretch for increased mobility. Reinforced for Durability.",
  link: "http://www.marmot.com/morrison-jean-short/53820S.html?dwvar_53820S_color=7200&dwvar_53820S_size=0001030&cgid=men_bottoms_pants#start=1",
  image: ,
  price: 85.00,
  company: "Marmot",
  materials: ["74% Cotton", "26% Coolmax 9.7 oz/yd"],
  care: "Machine Washable",
  status: "Unknown"
}

const rainShoes = {
  _id: 16,
  type: "shoes",
  name: "Tretorn Men's Gill Rain Boot",
  description: "This lace-up rain boot is coated in canvas and features an EcoOrtholite high performance sock.",
  link: "https://www.amazon.com/Tretorn-Mens-Gill-Rain-Black/dp/B01G6B58CQ/ref=sr_1_2?s=apparel&ie=UTF8&qid=1515094460&sr=1-2&nodeID=7147441011&psd=1&keywords=rain+shoes",
  image: ,
  price: 90.00,
  company: "Tretorn",
  materials: ["Rubber"],
  care: "Unknown",
  status: "Imported"
}

const umbrella = {
  _id: 17,
  type: "accessory",
  name: "Travel Umbrella",
  description: "The size fits perfect in the glove compartment of your car, laptop bag, business briefcase or vacation luggage.",
  link: "https://www.amazon.com/Automatic-Repellent-Lightweight-Reinforced-Leekee/dp/B0736Q5QGR/ref=sr_1_2?s=apparel&ie=UTF8&qid=1515094537&sr=1-2&nodeID=7147441011&psd=1&keywords=umbrella+windproof",
  image: ,
  price: 19.97,
  company: "Leekee",
  materials: ["Unknown"],
  care: "Unknown",
  status: "Unknown"
}

const outfit1 = {
  _id: 2,
  clothes: [rainJacket, rainPants, rainShoes, umbrella],
  temp: "mild",
  condition: "rainy",
};
