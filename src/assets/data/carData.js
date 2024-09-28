// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
      id: 1,
      brand: "Tata",
      rating: 88,
      carName: "Tata Nexon",
      imgUrl: img01,
      model: "Nexon EV",
      price: 2650,
      speed: "10.9kmpl",
      gps: "GPS Navigation",
      seatType: "Leather seats",
      automatic: "Automatic",
      description: "The Tata Nexon EV combines stylish design with robust performance and eco-friendliness, making it a popular choice in the electric segment."
  },
  {
      id: 2,
      brand: "Maruti Suzuki",
      rating: 90,
      carName: "Maruti Suzuki Swift",
      imgUrl: img02,
      model: "Swift ZXI",
      price: 2700,
      speed: "22kmpl",
      gps: "GPS Navigation",
      seatType: "Fabric seats",
      automatic: "Manual",
      description: "The Maruti Suzuki Swift is a compact hatchback known for its sporty looks, peppy performance, and excellent fuel efficiency."
  },
  {
      id: 3,
      brand: "Hyundai",
      rating: 85,
      carName: "Hyundai Creta",
      imgUrl: img03,
      model: "Creta SX",
      price: 3200,
      speed: "18kmpl",
      gps: "GPS Navigation",
      seatType: "Ventilated seats",
      automatic: "Automatic",
      description: "Hyundai Creta is a stylish SUV that offers advanced features, spacious interiors, and a powerful engine, making it a favorite among Indian buyers."
  },
  {
      id: 4,
      brand: "Kia",
      rating: 87,
      carName: "Kia Seltos",
      imgUrl: img04,
      model: "Seltos GTX",
      price: 2300,
      speed: "21kmpl",
      gps: "GPS Navigation",
      seatType: "Leatherette seats",
      automatic: "Automatic",
      description: "The Kia Seltos is a modern SUV that blends bold styling with advanced technology, offering an engaging driving experience and comfort."
  },
  {
      id: 5,
      brand: "Mahindra",
      rating: 84,
      carName: "Mahindra Thar",
      imgUrl: img05,
      model: "Thar LX",
      price: 3050,
      speed: "15kmpl",
      gps: "GPS Navigation",
      seatType: "Vinyl seats",
      automatic: "Manual",
      description: "Mahindra Thar is an iconic off-roader that combines rugged capabilities with modern features, perfect for adventure enthusiasts."
  },
  {
      id: 6,
      brand: "Honda",
      rating: 89,
      carName: "Honda City",
      imgUrl: img06,
      model: "City V",
      price: 1700,
      speed: "17kmpl",
      gps: "GPS Navigation",
      seatType: "Fabric seats",
      automatic: "Automatic",
      description: "Honda City is a premium sedan known for its refined engine, spacious interiors, and top-notch safety features, making it a best-seller."
  },
  {
      id: 7,
      brand: "Volkswagen",
      rating: 86,
      carName: "Volkswagen Taigun",
      imgUrl: img07,
      model: "Taigun Topline",
      price: 1750,
      speed: "18kmpl",
      gps: "GPS Navigation",
      seatType: "Leatherette seats",
      automatic: "Automatic",
      description: "The Volkswagen Taigun offers a mix of German engineering and modern technology, making it a competitive option in the compact SUV segment."
  },
  {
      id: 8,
      brand: "Renault",
      rating: 83,
      carName: "Renault Kiger",
      imgUrl: img08,
      model: "Kiger RXZ",
      price: 1800,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Fabric seats",
      automatic: "Automatic",
      description: "Renault Kiger is a stylish and compact SUV designed for urban driving, offering good mileage and ample features for the price."
  },
  {
      id: 9,
      brand: "Nissan",
      rating: 82,
      carName: "Nissan Magnite",
      imgUrl: img08,
      model: "Magnite XV Premium",
      price: 2000,
      speed: "18kmpl",
      gps: "GPS Navigation",
      seatType: "Fabric seats",
      automatic: "Manual",
      description: "Nissan Magnite is an affordable SUV that offers a high ground clearance, spacious interiors, and impressive features, making it a smart buy."
  },
  // {
  //     id: 10,
  //     brand: "Skoda",
  //     rating: 81,
  //     carName: "Skoda Kushaq",
  //     imgUrl: img08,
  //     model: "Kushaq Style",
  //     price: 2100,
  //     speed: "17kmpl",
  //     gps: "GPS Navigation",
  //     seatType: "Leatherette seats",
  //     automatic: "Automatic",
  //     description: "Skoda Kushaq combines modern design with high-quality materials and technology, offering an engaging driving experience in the compact SUV category."
  // },
  // {
  //     id: 11,
  //     brand: "Toyota",
  //     rating: 92,
  //     carName: "Fortuner",
  //     imgUrl: "img11",
  //     model: "Fortuner 4x4",
  //     price: 3500000,
  //     speed: "12kmpl",
  //     gps: "GPS Navigation",
  //     seatType: "Leather seats",
  //     automatic: "Automatic",
  //     description: "Toyota Fortuner is a robust SUV known for its off-road capability and luxury features, making it a top choice among adventure seekers."
  // },
  // {
  //     id: 12,
  //     brand: "Ford",
  //     rating: 79,
  //     carName: "EcoSport",
  //     imgUrl: "img12",
  //     model: "EcoSport S",
  //     price: 1100000,
  //     speed: "16kmpl",
  //     gps: "GPS Navigation",
  //     seatType: "Fabric seats",
  //     automatic: "Automatic",
  //     description: "Ford EcoSport is a compact SUV that offers a powerful engine and sporty handling, perfect for urban environments."
  // },
  // {
  //     id: 13,
  //     brand: "MG",
  //     rating: 80,
  //     carName: "Hector",
  //     imgUrl: "img13",
  //     model: "Hector Sharp",
  //     price: 2200000,
  //     speed: "14kmpl",
  //     gps: "GPS Navigation",
  //     seatType: "Leather seats",
  //     automatic: "Automatic",
  //     description: "MG Hector is a feature-rich SUV with an eye-catching design, advanced technology, and spacious interiors, ideal for families."
  // },
  // {
  //     id: 14,
  //     brand: "Volvo",
  //     rating: 93,
  //     carName: "XC40",
  //     imgUrl: "img14",
  //     model: "XC40 Recharge",
  //     price: 6000000,
  //     speed: "21kmpl",
  //     gps: "GPS Navigation",
  //     seatType: "Leather seats",
  //     automatic: "Automatic",
  //     description: "Volvo XC40 offers a blend of luxury and sustainability, featuring a powerful electric engine and premium interiors."
  // },
  // {
  //     id: 15,
  //     brand: "Porsche",
  //     rating: 95,
  //     carName: "Macan",
  //     imgUrl: "img15",
  //     model: "Macan GTS",
  //     price: 9000000,
  //     speed: "13kmpl",
  //     gps: "GPS Navigation",
  //     seatType: "Leather seats",
  //     automatic: "Automatic",
  //     description: "Porsche Macan is a high-performance compact SUV that combines sporty handling with luxury, delivering an exhilarating driving experience."
  // }
];


export default carData;
