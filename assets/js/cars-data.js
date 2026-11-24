/**
 * Mamun Autos - Premium Multi-Brand Car Showroom
 * Vehicle Dataset & Helper Services
 * Structured for easy migration to Laravel / PHP API backends
 */

const CARS_DATABASE = [
  {
    id: "car-1",
    brand: "Mercedes-Benz",
    model: "S-Class S580 4MATIC",
    year: 2023,
    price: 124000,
    formattedPrice: "$124,000",
    category: "Luxury Car",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuelType: "Mild-Hybrid",
    mileage: 12500,
    mileageText: "12,500 km",
    engine: "4.0L V8 Biturbo with EQ Boost",
    horsepower: "496 hp",
    acceleration: "0-100 km/h in 4.4s",
    topSpeed: "250 km/h",
    drivetrain: "All-Wheel Drive (4MATIC)",
    exteriorColor: "Obsidian Black Metallic",
    interiorColor: "Nappa Exclusive Sienna Brown",
    seats: 5,
    doors: 4,
    vin: "WDD2230671A049821",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: true,
    description: "The pinnacle of executive luxury. This 2023 Mercedes-Benz S580 4MATIC features flagship Burmester 3D Surround Sound, executive rear seating package with massage, rear-axle steering, OLED central display, and active multicontour front seats. Impeccably maintained with full service history at authorized dealership.",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Active Distance Assist DISTRONIC", "360-Degree Surround Camera", "Pre-Safe Plus System", "Active Lane Keeping & Evasive Steering", "Active Blind Spot Assist"],
      comfort: ["Executive Rear Seating with Recline & Footrest", "Heated & Ventilated Front and Rear Seats", "Energizing Air Control with HEPA Filter", "Panoramic Sliding Glass Roof", "Soft-Close Acoustic Laminated Doors"],
      technology: ["12.8-inch OLED Center Infotainment Touchscreen", "MBUX Interior Assistant with Augmented Reality HUD", "Burmester High-End 3D Sound System", "Wireless Apple CarPlay and Android Auto", "Fingerprint Biometric Authentication"],
      performance: ["Airmatic Semi-Active Air Suspension", "Rear-Axle Steering (Up to 10°)", "Dynamic Select Driving Modes", "Paddle Shift 9G-TRONIC Transmission"]
    }
  },
  {
    id: "car-2",
    brand: "BMW",
    model: "320i M Sport",
    year: 2023,
    price: 48500,
    formattedPrice: "$48,500",
    category: "Sedan",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 8200,
    mileageText: "8,200 km",
    engine: "2.0L TwinPower Turbo 4-Cylinder",
    horsepower: "184 hp",
    acceleration: "0-100 km/h in 7.1s",
    topSpeed: "235 km/h",
    drivetrain: "Rear-Wheel Drive",
    exteriorColor: "Mineral White Metallic",
    interiorColor: "Sensatec Perforated Cognac",
    seats: 5,
    doors: 4,
    vin: "WBA5R11030FL92014",
    condition: "Certified Pre-Owned",
    badge: "New Arrival",
    featured: true,
    description: "Dynamic driving pleasure defined. Fitted with genuine M Aerodynamics package, 19-inch M light alloy double-spoke wheels, BMW Curved Display with Operating System 8, Harman Kardon audio, and variable sports steering.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Driving Assistant Professional", "Active Cruise Control with Stop&Go", "Reverse Parking Assistant", "Front Collision Warning with Brake Intervention"],
      comfort: ["M Sport Seats with Lumbar Support", "3-Zone Automatic Climate Control", "Comfort Access Keyless Entry", "Ambient Interior Illumination with 11 Colors"],
      technology: ["BMW Curved Display (12.3\" + 14.9\")", "BMW Live Cockpit Professional with Head-up Display", "Harman Kardon Surround Sound System", "Connected Package Professional"],
      performance: ["M Sport Suspension", "Variable Sport Steering", "M Sport Brakes with Blue Calipers", "8-Speed Steptronic Sport Transmission"]
    }
  },
  {
    id: "car-3",
    brand: "Porsche",
    model: "Cayenne Turbo GT",
    year: 2022,
    price: 145000,
    formattedPrice: "$145,000",
    category: "Sports Car",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 14800,
    mileageText: "14,800 km",
    engine: "4.0L Twin-Turbo V8",
    horsepower: "631 hp",
    acceleration: "0-100 km/h in 3.3s",
    topSpeed: "300 km/h",
    drivetrain: "All-Wheel Drive (PTM)",
    exteriorColor: "Arctic Grey",
    interiorColor: "GT Interior Package in Black / Neodyme",
    seats: 4,
    doors: 5,
    vin: "WP1ZZZ9YZNDA12849",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: true,
    description: "Supercar speed meets full SUV versatility. The record-setting Cayenne Turbo GT features carbon-ceramic brakes (PCCB), titanium central sports exhaust, carbon roof, adaptive rear spoiler, and dedicated sport suspension tuned directly by Porsche Motorsport.",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Porsche Ceramic Composite Brake (PCCB)", "ParkAssist Front and Rear including Surround View", "Lane Change Assist", "Night Vision Assist with Thermal Camera"],
      comfort: ["Carbon Lightweight Roof", "Adaptive Sports Seats Plus (8-Way Electric) with Alcantara Inserts", "4-Zone Climate Control", "Thermal and Noise Insulating Glass"],
      technology: ["Porsche Communication Management (PCM) with 12.3\" Touchscreen", "Burmester High-End 3D Surround Sound", "Apple CarPlay & Android Auto", "Porsche Connect Plus"],
      performance: ["Porsche Dynamic Chassis Control (PDCC)", "Rear-Axle Steering with Power Steering Plus", "Titanium Sports Exhaust System", "Porsche Torque Vectoring Plus (PTV Plus)"]
    }
  },
  {
    id: "car-4",
    brand: "Land Rover",
    model: "Range Rover Autobiography",
    year: 2022,
    price: 138000,
    formattedPrice: "$138,000",
    category: "Luxury Car",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Mild-Hybrid",
    mileage: 18200,
    mileageText: "18,200 km",
    engine: "4.4L Twin-Turbocharged V8",
    horsepower: "523 hp",
    acceleration: "0-100 km/h in 4.6s",
    topSpeed: "250 km/h",
    drivetrain: "All-Wheel Drive (Terrain Response 2)",
    exteriorColor: "Santorini Black Metallic",
    interiorColor: "Perforated Semi-Aniline Caraway Leather",
    seats: 5,
    doors: 5,
    vin: "SALWR2V45NA109284",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: true,
    description: "Unrivaled peerless refinement and all-terrain majesty. This Autobiography edition comes equipped with Executive Class rear seats, Meridian Signature Sound with active road noise cancellation, digital LED headlights with predictive beam, and all-wheel steering.",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["3D Surround Camera with Wade Sensing", "ClearSight Ground View and Digital Rear Mirror", "Emergency Braking & Blind Spot Assist", "Occupant Protection Assist"],
      comfort: ["24-Way Heated & Cooled Massage Electric Front Seats", "Executive Class Comfort Plus Rear Seats", "Four-Zone Climate with Cabin Air Purification Pro", "Powered Gesture Split Tailgate"],
      technology: ["13.1-inch Curved Floating Glass Touchscreen (Pivi Pro)", "Meridian Signature Sound System (35 Speakers, 1600W)", "Head-Up Display with Crisp Holographic Projection", "Wireless Device Charging with Signal Booster"],
      performance: ["Electronic Air Suspension with Dynamic Response Pro", "Standard All-Wheel Steering (7.3° Angle)", "Electronic Active Differential with Torque Vectoring", "Terrain Response 2 with Configurable Programs"]
    }
  },
  {
    id: "car-5",
    brand: "Audi",
    model: "Q5 45 TFSI S-Line Quattro",
    year: 2023,
    price: 56900,
    formattedPrice: "$56,900",
    category: "SUV",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 9500,
    mileageText: "9,500 km",
    engine: "2.0L TFSI Turbocharged 4-Cylinder",
    horsepower: "261 hp",
    acceleration: "0-100 km/h in 5.7s",
    topSpeed: "237 km/h",
    drivetrain: "Quattro All-Wheel Drive",
    exteriorColor: "Mythos Black Metallic",
    interiorColor: "Rotor Gray Fine Nappa with Diamond Stitching",
    seats: 5,
    doors: 5,
    vin: "WA1ANAFY8P2039418",
    condition: "Certified Pre-Owned",
    badge: "New Arrival",
    featured: true,
    description: "The ideal luxury midsize SUV combining sharp aesthetic styling with Quattro all-weather confidence. Features S line exterior package, 20-inch bi-color wheels, Audi Virtual Cockpit Plus, Bang & Olufsen 3D sound, and panoramic sunroof.",
    images: [
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Audi Pre Sense City & Rear", "Adaptive Cruise Assist with Traffic Jam Assist", "Top View 360-degree Camera System", "Lane Departure Warning with Steering Intervention"],
      comfort: ["Panoramic Glass Sunroof with Power Sunshade", "Front Sport Seats with Contrast Stitching", "Deluxe 3-Zone Electronic Climate Control", "Acoustic Glass for Front Side Windows"],
      technology: ["Audi Virtual Cockpit Plus with 12.3-inch Full HD Display", "MMI Navigation Plus with 10.1\" Touch Display", "Bang & Olufsen Sound System with 19 Speakers (755W)", "Audi Smartphone Interface (Apple CarPlay / Android Auto)"],
      performance: ["Quattro All-Wheel Drive with Ultra Technology", "7-Speed S tronic Dual-Clutch Transmission", "Audi Drive Select (Offroad, Efficiency, Comfort, Auto, Dynamic)", "Sport-Tuned Suspension"]
    }
  },
  {
    id: "car-6",
    brand: "Toyota",
    model: "Land Cruiser Prado TX-L",
    year: 2021,
    price: 69500,
    formattedPrice: "$69,500",
    category: "SUV",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: 26000,
    mileageText: "26,000 km",
    engine: "2.8L D-4D 1GD-FTV Turbo Diesel",
    horsepower: "201 hp",
    acceleration: "0-100 km/h in 9.9s",
    topSpeed: "175 km/h",
    drivetrain: "Full-Time 4WD with Torsen LSD",
    exteriorColor: "White Pearl Crystal Shine",
    interiorColor: "Chameleon Beige Premium Leather",
    seats: 7,
    doors: 5,
    vin: "JTEBX3FJ50K089124",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: true,
    description: "Legendary off-road durability paired with first-class cabin comfort. 7-seater TX-L package featuring genuine leather seats, sunroof, Modellista styling kit, crawl control, cool box, and renowned Toyota bulletproof reliability.",
    images: [
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Toyota Safety Sense (PCS, LDA, AHB, DRCC)", "Multi-Terrain Monitor with Underfloor View", "Downhill Assist Control (DAC) & Hill-Start Assist Control", "7 SRS Airbags"],
      comfort: ["Power-Folding 3rd Row 50:50 Seats", "Center Console Integrated Refrigerated Cool Box", "Ventilated & Heated Driver & Front Passenger Seats", "Electric Tilt and Slide Moonroof"],
      technology: ["9-inch Touchscreen Navigation with JBL 14-Speaker Audio", "Apple CarPlay & Android Auto Integration", "Rear Seat Entertainment Preparation", "Optitron Meter with 4.2-inch Color TFT Display"],
      performance: ["Full-Time 4WD with Torsen Limited-Slip Center Differential", "Kinetic Dynamic Suspension System (KDSS)", "Multi-Terrain Select (MTS) & Crawl Control", "Heavy-Duty Tow Hitch and Underbody Protection"]
    }
  },
  {
    id: "car-7",
    brand: "Lexus",
    model: "RX 350 F-Sport AWD",
    year: 2022,
    price: 62000,
    formattedPrice: "$62,000",
    category: "Luxury Car",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Hybrid",
    mileage: 15800,
    mileageText: "15,800 km",
    engine: "2.4L Turbocharged Hybrid Powertrain",
    horsepower: "275 hp",
    acceleration: "0-100 km/h in 6.8s",
    topSpeed: "200 km/h",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Caviar Black",
    interiorColor: "F SPORT Circuit Red Leather",
    seats: 5,
    doors: 5,
    vin: "2T2HZMDA2NC048192",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: false,
    description: "Striking Japanese luxury crossover engineering with unmistakable spindle grille design, bolstered sports seats, Mark Levinson premium audio system, panoramic moonroof, and adaptive variable suspension.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Lexus Safety System+ 3.0", "Panoramic View Monitor (360 Camera)", "Blind Spot Monitor with Rear Cross-Traffic Alert", "Safe Exit Assist"],
      comfort: ["F SPORT Bolstered Leather Seats with Heating/Ventilation", "Panoramic Glass Moonroof", "Power Rear Sunshades", "Hands-Free Kick-Sensor Power Liftgate"],
      technology: ["14-inch High-Definition Touchscreen Interface", "Mark Levinson 21-Speaker PurePlay Audio System", "Color Head-Up Display", "Wireless Charging Pad"],
      performance: ["F SPORT-Tuned Adaptive Variable Suspension (AVS)", "Drive Mode Select with Sport S+ Mode", "Active Cornering Assist", "21-inch Split-10-Spoke Alloy Wheels"]
    }
  },
  {
    id: "car-8",
    brand: "Toyota",
    model: "Harrier 2.5 Elegance Hybrid",
    year: 2021,
    price: 43500,
    formattedPrice: "$43,500",
    category: "SUV",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Hybrid",
    mileage: 22000,
    mileageText: "22,000 km",
    engine: "2.5L Dynamic Force Hybrid System",
    horsepower: "218 hp",
    acceleration: "0-100 km/h in 7.9s",
    topSpeed: "180 km/h",
    drivetrain: "E-Four Electronic All-Wheel Drive",
    exteriorColor: "Precious Black Pearl",
    interiorColor: "Synthetic Leather Dual-Tone Mocha",
    seats: 5,
    doors: 5,
    vin: "AXUH85-0012948",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: false,
    description: "Flowing coupe-inspired luxury SUV silhouette. Exceptionally smooth hybrid drive returning up to 21.6 km/L fuel efficiency. Features dimming electrochromic panoramic roof, leather upholstery, and Toyota Safety Sense 2.",
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Pre-Collision System with Pedestrian & Cyclist Detection", "Lane Tracing Assist (LTA)", "Road Sign Assist (RSA)", "Digital Inner Mirror with Front/Rear Drive Recorder"],
      comfort: ["Electrochromic Panorama Roof with Instant Frosted Privacy", "Dual-Zone Automatic Climate Control with Nanoe X", "Power Adjustable Seats with Memory", "Illuminated Door Sills"],
      technology: ["12.3-inch SD Navigation with T-Connect Support", "JBL Premium Sound with 9 Speakers", "Smart Entry & Push Button Start", "Qi Wireless Smartphone Charger"],
      performance: ["TNGA (GA-K) Global Architecture Platform", "E-Four Electric 4WD System", "Active Cornering Assist", "EV Drive Mode for Whisper-Quiet Cruising"]
    }
  },
  {
    id: "car-9",
    brand: "Honda",
    model: "Vezel e:HEV Z",
    year: 2021,
    price: 29900,
    formattedPrice: "$29,900",
    category: "SUV",
    bodyType: "Hatchback",
    transmission: "Automatic",
    fuelType: "Hybrid",
    mileage: 19000,
    mileageText: "19,000 km",
    engine: "1.5L DOHC i-VTEC + Dual Electric Motors",
    horsepower: "131 hp",
    acceleration: "0-100 km/h in 9.2s",
    topSpeed: "170 km/h",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Premium Sunlit White Pearl",
    interiorColor: "Prime Smooth Fabric & Leather Black",
    seats: 5,
    doors: 5,
    vin: "RV5-1029482",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: false,
    description: "Minimalist Japanese modern styling with ingenious Honda Magic Seats. Dual-motor e:HEV hybrid powertrain delivers whisper-quiet EV driving in city traffic with ultra-low fuel consumption.",
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Honda SENSING Advanced Suite", "Adaptive Cruise Control with Low-Speed Follow", "Collision Mitigation Braking System (CMBS)", "Auto High-Beam Headlights"],
      comfort: ["Hands-Free Power Tailgate with Walk Away Close", "Honda Ultra Magic Seats (Flip-Up & Flat Fold)", "Air Diffusion Breeze Climate System", "Heated Steering Wheel & Front Seats"],
      technology: ["Honda CONNECT 9-inch Display Audio", "Wireless Apple CarPlay", "Multi-View Camera System", "Electrostatic Touch LED Reading Lights"],
      performance: ["3 Intelligent Drive Modes: EV Drive, Hybrid Drive, Engine Drive", "Deceleration Paddle Selectors with Regenerative Braking", "Real-Time AWD Capability", "Agile Handling Assist"]
    }
  },
  {
    id: "car-10",
    brand: "Nissan",
    model: "X-Trail e-POWER Ti-L",
    year: 2022,
    price: 39800,
    formattedPrice: "$39,800",
    category: "SUV",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Hybrid",
    mileage: 14000,
    mileageText: "14,000 km",
    engine: "1.5L Variable Compression Turbo + Dual e-4ORCE Motors",
    horsepower: "211 hp",
    acceleration: "0-100 km/h in 7.0s",
    topSpeed: "180 km/h",
    drivetrain: "e-4ORCE All-Wheel Drive",
    exteriorColor: "Diamond Black Metallic",
    interiorColor: "Quilted Nappa Tan Leather",
    seats: 7,
    doors: 5,
    vin: "JN1TBNT33Z0018241",
    condition: "Certified Pre-Owned",
    badge: "New Arrival",
    featured: false,
    description: "The 100% electric motor drive without the need to plug in. Dual motor e-4ORCE all-wheel drive delivers immediate torque, refined whisper-quiet acceleration, and premium quilted Nappa leather interior with panoramic roof.",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["ProPILOT with Navi-link", "Intelligent Around View Monitor (360°)", "Intelligent Emergency Braking with Junction Assist", "Rear Automatic Braking"],
      comfort: ["Panoramic Glass Sunroof", "Quilted Nappa Leather Accented Seats", "Heated Front, Rear Seats and Steering Wheel", "Motion-Activated Power Tailgate"],
      technology: ["12.3-inch Full Color TFT Digital Gauge Display", "12.3-inch Navigation Screen", "10.8-inch Windshield Head-Up Display", "Bose 10-Speaker Premium Audio System"],
      performance: ["e-4ORCE Electric 4WD with Instant Pitch Control", "Variable Compression Ratio (VC-Turbo) Engine", "e-Pedal Step Regenerative Braking", "5 Drive Modes: Snow, Off-Road, Auto, Eco, Sport"]
    }
  },
  {
    id: "car-11",
    brand: "Hyundai",
    model: "Tucson Ultimate AWD",
    year: 2023,
    price: 34900,
    formattedPrice: "$34,900",
    category: "SUV",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 11500,
    mileageText: "11,500 km",
    engine: "2.5L Smartstream 4-Cylinder",
    horsepower: "187 hp",
    acceleration: "0-100 km/h in 8.8s",
    topSpeed: "201 km/h",
    drivetrain: "HTRAC All-Wheel Drive",
    exteriorColor: "Amazon Gray Metallic",
    interiorColor: "Black Leather with Gray Accents",
    seats: 5,
    doors: 5,
    vin: "KM8JU3DE5PU019481",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: false,
    description: "Futuristic parametric jewel hidden LED lights and chiseled geometric body lines. Loaded with panoramic sunroof, ventilated leather seating, smart remote parking assist, and Bose premium sound.",
    images: [
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Hyundai SmartSense Suite", "Blind-Spot View Monitor (BVM in cluster)", "Forward Collision-Avoidance Assist with Pedestrian/Cyclist/Junction", "Remote Smart Parking Assist"],
      comfort: ["Panoramic Sunroof", "Ventilated & Heated Front Seats with Memory", "Multi-Air Mode Indirect Diffused Ventilation", "Smart Hands-Free Power Liftgate"],
      technology: ["Dual 10.25-inch Digital Gauge Cluster & Navigation Screen", "Bose 8-Speaker Premium Sound", "Apple CarPlay & Android Auto", "Ambient Mood Lighting (64 Colors)"],
      performance: ["HTRAC All-Wheel Drive with Terrain Modes", "8-Speed Shift-by-Wire Automatic Transmission", "Downhill Brake Control", "Drive Mode Select (Eco, Normal, Sport, Smart)"]
    }
  },
  {
    id: "car-12",
    brand: "Toyota",
    model: "Corolla Altis Grande 1.8",
    year: 2022,
    price: 25500,
    formattedPrice: "$25,500",
    category: "Sedan",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 24000,
    mileageText: "24,000 km",
    engine: "1.8L Dual VVT-i 4-Cylinder",
    horsepower: "138 hp",
    acceleration: "0-100 km/h in 9.8s",
    topSpeed: "195 km/h",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Super White",
    interiorColor: "Ivory & Black Premium Leather",
    seats: 5,
    doors: 4,
    vin: "MR053JE140192849",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: false,
    description: "The world's benchmark for everyday reliability and hassle-free motoring. Top-tier Grande variant featuring sunroof, paddle shifters, leather interior, cruise control, push start, and low cost of ownership.",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Vehicle Stability Control (VSC) & Traction Control", "Brake Assist & EBD", "Dual Front & Driver Knee Airbags", "Reverse Parking Camera with Static Guidelines"],
      comfort: ["Electric Sunroof", "Plush Leather Upholstery with Ergonomic Lumbar Support", "Auto Climate Control with Micron Air Filtration", "Tilt & Telescopic Leather Steering Wheel"],
      technology: ["9-inch Touchscreen Infotainment System with Bluetooth", "Steering Wheel Audio & Phone Controls", "Smart Keyless Entry with Engine Start/Stop", "Digital Speedometer Display"],
      performance: ["CVTi 7-Speed Sport Sequential Shiftmatic", "Sport Drive Mode with Responsive Throttle", "Independent MacPherson Strut Suspension", "Exceptional Fuel Mileage"]
    }
  },
  {
    id: "car-13",
    brand: "Audi",
    model: "RS7 Sportback Quattro",
    year: 2023,
    price: 129000,
    formattedPrice: "$129,000",
    category: "Sports Car",
    bodyType: "Coupe",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 6200,
    mileageText: "6,200 km",
    engine: "4.0L Twin-Turbo V8 with 48V MHEV",
    horsepower: "591 hp",
    acceleration: "0-100 km/h in 3.6s",
    topSpeed: "305 km/h",
    drivetrain: "Quattro Permanent All-Wheel Drive with Sport Differential",
    exteriorColor: "Nardo Gray",
    interiorColor: "Black Valcona Leather with Express Red Honeycomb Stitching",
    seats: 5,
    doors: 5,
    vin: "WAUZZZF27PN029841",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: true,
    description: "Breathtaking four-door high-performance coupe with aggressive flared wheel arches, RS sports exhaust, Audi laser lights, dynamic all-wheel steering, and carbon fiber interior trim accents.",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["HD Matrix LED Headlights with Audi Laser Light", "Top View 360-Degree 3D Camera System", "Night Vision Assistant", "Intersection Assist & Turn Assist"],
      comfort: ["RS Sport Heated & Ventilated Seats with Massage Function", "Panoramic Sunroof", "Power Soft-Closing Doors", "Air Quality Package with Ionizer & Aromatherapy"],
      technology: ["Audi Virtual Cockpit Plus with RS-Specific Gauges & G-Meter", "Bang & Olufsen 3D Advanced Sound System (19 Speakers, 1820W)", "Dual Touch MMI Screens with Haptic Feedback", "Wireless Apple CarPlay / Android Auto"],
      performance: ["RS Adaptive Air Suspension with Controlled Damping", "Quattro Sport Rear Differential", "Dynamic All-Wheel Steering", "RS Sport Exhaust System with Oval Black Tailpipes"]
    }
  },
  {
    id: "car-14",
    brand: "Porsche",
    model: "911 Carrera S (992)",
    year: 2022,
    price: 139000,
    formattedPrice: "$139,000",
    category: "Sports Car",
    bodyType: "Coupe",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 10800,
    mileageText: "10,800 km",
    engine: "3.0L Twin-Turbocharged Boxer 6",
    horsepower: "443 hp",
    acceleration: "0-100 km/h in 3.5s",
    topSpeed: "308 km/h",
    drivetrain: "Rear-Wheel Drive",
    exteriorColor: "Guards Red",
    interiorColor: "Black Leather with Contrast Stitching",
    seats: 4,
    doors: 2,
    vin: "WP0AB2A97NS241829",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: true,
    description: "The timeless sports car icon. Equipped with Sport Chrono Package, Porsche Active Suspension Management (PASM), Sport Exhaust System, 20/21-inch Carrera Classic wheels, and lightning-fast 8-speed PDK transmission.",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Porsche Stability Management (PSM)", "Porsche Wet Mode System", "LED Matrix Headlights with PDLS Plus", "ParkAssist Front and Rear with Reversing Camera"],
      comfort: ["14-Way Power Sport Seats with Memory", "Heated and Ventilated Seats", "Electric Slide/Tilt Sunroof", "Two-Zone Automatic Climate Control"],
      technology: ["10.9-inch Porsche Communication Management (PCM) Touchscreen", "BOSE Surround Sound System", "Instrument Cluster with Central Analog Tachometer and Dual 7\" TFTs", "Porsche Track Precision App Support"],
      performance: ["Sport Chrono Package with Mode Switch and Launch Control", "PASM Sport Suspension (10mm Lower)", "Porsche Torque Vectoring Plus (PTV Plus)", "Dual-Mode Switchable Sport Exhaust System"]
    }
  },
  {
    id: "car-15",
    brand: "BMW",
    model: "i4 eDrive40 M Sport",
    year: 2023,
    price: 59500,
    formattedPrice: "$59,500",
    category: "Electric Vehicle",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuelType: "Electric",
    mileage: 7400,
    mileageText: "7,400 km",
    engine: "Fifth-Generation BMW eDrive Synchronous Motor (83.9 kWh Battery)",
    horsepower: "335 hp",
    acceleration: "0-100 km/h in 5.7s",
    topSpeed: "190 km/h",
    drivetrain: "Rear-Wheel Drive",
    exteriorColor: "Portimao Blue Metallic",
    interiorColor: "Vernasca Black Leather with Blue Contrast Stitching",
    seats: 5,
    doors: 4,
    vin: "WBY33AW09PFK82941",
    condition: "Certified Pre-Owned",
    badge: "New Arrival",
    featured: true,
    description: "The thrilling all-electric Gran Coupe. Up to 590 km range (WLTP) on a single charge. Features M Sport aerodynamic package, IconicSounds Electric composed by Hans Zimmer, and lightning-fast 205 kW DC fast-charging capability.",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Driving Assistant Professional with Steering Assist", "Parking Assistant Plus with Surround View & Remote 3D", "Acoustic Pedestrian Protection", "Automatic Emergency Braking with City Warning"],
      comfort: ["Electric Glass Sunroof", "Sport Seats with Electric Adjustment and Memory", "3-Zone Climate Control with Pre-Conditioning via App", "Power Tailgate with Hands-Free Opening"],
      technology: ["BMW Curved Display running OS 8 with Over-the-Air Updates", "Harman Kardon Surround Sound System", "BMW IconicSounds Electric (Hans Zimmer Soundscapes)", "Live Cockpit Professional with Full Color Head-Up Display"],
      performance: ["Rear-Axle Air Suspension with Automatic Leveling", "M Sport Brakes with Red Calipers", "Variable Sport Steering", "Single-Pedal Driving with Adaptive Energy Recuperation"]
    }
  },
  {
    id: "car-16",
    brand: "Mercedes-Benz",
    model: "C-Class C300 AMG Line",
    year: 2022,
    price: 51000,
    formattedPrice: "$51,000",
    category: "Sedan",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuelType: "Mild-Hybrid",
    mileage: 16800,
    mileageText: "16,800 km",
    engine: "2.0L Turbocharged 4-Cylinder with EQ Boost",
    horsepower: "255 hp",
    acceleration: "0-100 km/h in 6.0s",
    topSpeed: "250 km/h",
    drivetrain: "Rear-Wheel Drive",
    exteriorColor: "Iridium Silver Metallic",
    interiorColor: "Artico / Dinamica Black with Red Contrast Stitching",
    seats: 5,
    doors: 4,
    vin: "W1K2060461F109284",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: false,
    description: "Baby S-Class elegance and state-of-the-art tech. Features AMG Line sports styling, 11.9-inch portrait touchscreen, 64-color ambient lighting, Burmester 3D audio, and sport suspension with direct-steer system.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Active Brake Assist & Blind Spot Assist", "360-Degree Camera with Active Parking Assist PARKTRONIC", "Car-to-X Communication", "PRE-SAFE System"],
      comfort: ["Panoramic Sliding Glass Sunroof", "Power Front Sport Seats with Memory", "Keyless-GO with Hands-Free Access", "Illuminated Door Sills with Mercedes-Benz Lettering"],
      technology: ["11.9-inch High-Resolution Portrait Central Display", "12.3-inch Digital Driver Display", "Fingerprint Scanner for Profile Auth", "Burmester 3D Surround Sound"],
      performance: ["9G-TRONIC 9-Speed Automatic Transmission", "DYNAMIC SELECT Driving Modes", "AMG Sport Suspension", "Mild-Hybrid 48V Integrated Starter-Generator (ISG)"]
    }
  },
  {
    id: "car-17",
    brand: "Mercedes-Benz",
    model: "G-Class G63 AMG",
    year: 2022,
    price: 185000,
    formattedPrice: "$185,000",
    category: "Luxury Car",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 11000,
    mileageText: "11,000 km",
    engine: "4.0L Handcrafted AMG V8 Biturbo",
    horsepower: "577 hp",
    acceleration: "0-100 km/h in 4.5s",
    topSpeed: "240 km/h",
    drivetrain: "AMG Performance 4MATIC (Triple Diff Locks)",
    exteriorColor: "G Manufaktur Night Black Magno",
    interiorColor: "Exclusive Bengal Red & Black Nappa Leather",
    seats: 5,
    doors: 5,
    vin: "W1NYR8AY6NX109284",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: true,
    description: "The definitive icon of all-terrain luxury and motorsport swagger. Handcrafted 4.0L Biturbo V8 with dual side-exit exhaust pipes, AMG Ride Control sport suspension, Burmester surround sound, and exclusive designo leather interior.",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Active Lane Keeping Assist", "Blind Spot Assist", "360-Degree Camera Parking Package", "Guard 360 Plus Vehicle Protection"],
      comfort: ["Exclusive Nappa Leather with Diamond Quilting", "Active Multicontour Heated/Ventilated Seats with Massage", "Electric Sunroof", "Burmester Surround Sound (15 Speakers, 590W)"],
      technology: ["Dual 12.3-inch High-Resolution Displays", "COMAND Navigation with Smartphone Integration", "Ambient Lighting with 64 Color Schemes", "AMG Track Pace Performance App"],
      performance: ["AMG Performance Dual Side-Exhaust System with Valve Control", "3 Independent 100% Differential Locks (Center, Rear, Front)", "AMG RIDE CONTROL Adaptive Damping", "AMG SPEEDSHIFT TCT 9G Transmission"]
    }
  },
  {
    id: "car-18",
    brand: "Audi",
    model: "e-tron GT Quattro",
    year: 2023,
    price: 104000,
    formattedPrice: "$104,000",
    category: "Electric Vehicle",
    bodyType: "Coupe",
    transmission: "Automatic",
    fuelType: "Electric",
    mileage: 6500,
    mileageText: "6,500 km",
    engine: "Dual Synchronous Electric Motors (93.4 kWh Battery)",
    horsepower: "522 hp with Boost",
    acceleration: "0-100 km/h in 3.9s",
    topSpeed: "245 km/h",
    drivetrain: "Electric Quattro All-Wheel Drive",
    exteriorColor: "Kemora Gray Metallic",
    interiorColor: "Leather-Free Black with Express Red Accents",
    seats: 5,
    doors: 4,
    vin: "WAUZZZFW9PN019284",
    condition: "Certified Pre-Owned",
    badge: "New Arrival",
    featured: true,
    description: "Sculpted electric grand tourer with low drag coefficient, 800-volt high-speed charging architecture (5% to 80% in 22 mins), panoramic fixed glass roof, Audi laser headlights, and Bang & Olufsen 3D sound.",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["HD Matrix LED Headlights with Audi Laser Light", "Adaptive Cruise Assist with Turn Assist", "360-Degree Top View Cameras", "e-tron Sport Sound Acoustic Warning"],
      comfort: ["Panoramic Fixed Tinted Glass Roof", "14-Way Power Heated Sport Seats Plus", "3-Zone Deluxe Climate Control with Heat Pump", "Acoustic Double-Glazed Side Glass"],
      technology: ["Audi Virtual Cockpit Plus with EV-Specific Power Meter", "10.1-inch MMI Touch Display with Navigation", "Bang & Olufsen 3D Premium Sound System", "Wireless Phone Charging Box"],
      performance: ["800-Volt Charging System (Up to 270 kW DC Fast Charge)", "Adaptive 3-Chamber Air Suspension", "Controlled Rear Differential Lock", "All-Wheel Steering"]
    }
  },
  {
    id: "car-19",
    brand: "Lexus",
    model: "LX 600 Ultra Luxury 4-Seater",
    year: 2023,
    price: 155000,
    formattedPrice: "$155,000",
    category: "Luxury Car",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: 8900,
    mileageText: "8,900 km",
    engine: "3.5L Twin-Turbo V6 (V35A-FTS)",
    horsepower: "409 hp",
    acceleration: "0-100 km/h in 6.9s",
    topSpeed: "210 km/h",
    drivetrain: "Full-Time 4WD with Active Height Control (AHC)",
    exteriorColor: "Eminent White Pearl",
    interiorColor: "Ultra Luxury Sunflare Semi-Aniline Leather",
    seats: 4,
    doors: 5,
    vin: "JTJHY7AX6P4019284",
    condition: "Certified Pre-Owned",
    badge: "Featured",
    featured: true,
    description: "The ultimate Japanese executive flagship SUV. Exclusive 4-seat Ultra Luxury configuration featuring Ottoman recliner with 48° recline, footrest, wireless touchscreen rear console, Mark Levinson 25-speaker audio, and Active Height Control air suspension.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Lexus Safety System+ 2.5", "Multi-Terrain Monitor with Panoramic Underfloor View", "Digital Rearview Mirror", "Intuitive Parking Assist with Auto Braking"],
      comfort: ["VIP Executive Rear Ottoman Seat (48° Recline with Footrest)", "Rear Passenger Touchscreen Control Display", "Mark Levinson Reference 3D Surround Sound (25 Speakers, 2400W)", "Cool Box in Front and Rear Consoles"],
      technology: ["Dual Center Displays (12.3-inch Upper + 7-inch Lower)", "Dual 11.6-inch Rear Entertainment Touchscreens", "Head-Up Display with Augmented Clarity", "Fingerprint Authentication Push Start"],
      performance: ["Active Height Control (AHC) Hydraulic Suspension", "Multi-Terrain Select (Dirt, Sand, Mud, Deep Snow, Rock)", "Crawl Control with Turn Assist", "10-Speed Direct Shift Automatic"]
    }
  },
  {
    id: "car-20",
    brand: "Toyota",
    model: "Land Cruiser 300 ZX VIP",
    year: 2023,
    price: 168000,
    formattedPrice: "$168,000",
    category: "Luxury Car",
    bodyType: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: 7500,
    mileageText: "7,500 km",
    engine: "3.3L Twin-Turbo V6 F33A-FTV Diesel",
    horsepower: "304 hp (700 Nm Torque)",
    acceleration: "0-100 km/h in 7.8s",
    topSpeed: "210 km/h",
    drivetrain: "Full-Time 4WD with Electronic Kinetic Dynamic Suspension",
    exteriorColor: "Precious White Pearl",
    interiorColor: "Neutral Beige Semi-Aniline Leather",
    seats: 7,
    doors: 5,
    vin: "JTMAB3DJ704019284",
    condition: "Certified Pre-Owned",
    badge: "Popular",
    featured: true,
    description: "The undisputed king of the road. Top-spec ZX variant on the TNGA-F platform. Features fingerprint push start, 12.3-inch dual rear entertainment screens, JBL 14-speaker sound, cool box, and advanced E-KDSS suspension.",
    images: [
      "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    features: {
      safety: ["Toyota Safety Sense 2.0 with Pedestrian Detection", "Multi-Terrain 360° Monitor with 3D Transparent Floor", "Blind Spot Monitor with Rear Cross Traffic", "10 SRS Airbags"],
      comfort: ["Ventilated and Heated Seats for 1st & 2nd Rows", "Power Folding 3rd Row Seats into Floor", "Center Console Cool Box", "Moonroof with Power Tilt & Slide"],
      technology: ["12.3-inch Touch Display with JBL 14-Speaker Audio", "Dual 11.6-inch Rear Seat Entertainment Screens", "Smart Key with Fingerprint Recognition", "Color Head-Up Display"],
      performance: ["Electronic Kinetic Dynamic Suspension System (E-KDSS)", "Multi-Terrain Select with Auto Mode", "Rear Torsen Limited-Slip Differential", "Direct Shift 10-Speed Automatic"]
    }
  }
];

const BRANDS_DATABASE = [
  { name: "Toyota", logo: "assets/images/brands/toyota.svg", count: 4, origin: "Japan", founded: 1937, description: "Worldwide reputation for unparalleled reliability, hybrid innovation, and legendary 4x4 engineering." },
  { name: "BMW", logo: "assets/images/brands/bmw.svg", count: 2, origin: "Germany", founded: 1916, description: "The ultimate driving machine. Precision German engineering, cutting-edge infotainment, and performance." },
  { name: "Mercedes-Benz", logo: "assets/images/brands/mercedes.svg", count: 3, origin: "Germany", founded: 1926, description: "The pioneer of automotive luxury, unmatched craftsmanship, whisper-quiet cabin comfort, and safety." },
  { name: "Audi", logo: "assets/images/brands/audi.svg", count: 3, origin: "Germany", founded: 1909, description: "Vorsprung durch Technik. Iconic Quattro all-wheel drive, sharp Matrix LED lights, and digital cockpits." },
  { name: "Porsche", logo: "assets/images/brands/porsche.svg", count: 2, origin: "Germany", founded: 1931, description: "Peerless motorsport pedigree, iconic sports car silhouettes, and exhilarating track-proven capability." },
  { name: "Land Rover", logo: "assets/images/brands/land-rover.svg", count: 1, origin: "United Kingdom", founded: 1948, description: "Supreme British luxury and peerless all-terrain mastery in the world's most prestigious SUVs." },
  { name: "Lexus", logo: "assets/images/brands/lexus.svg", count: 2, origin: "Japan", founded: 1989, description: "The apex of Japanese luxury, whisper-quiet hybrid refinement, Takumi craftsmanship, and peace of mind." },
  { name: "Honda", logo: "assets/images/brands/honda.svg", count: 1, origin: "Japan", founded: 1948, description: "Intelligent engineering, versatile Magic Seats, and modern dual-motor e:HEV hybrid efficiency." },
  { name: "Nissan", logo: "assets/images/brands/nissan.svg", count: 1, origin: "Japan", founded: 1933, description: "Innovative e-POWER electric motor drives and rugged, tech-forward family SUVs." },
  { name: "Hyundai", logo: "assets/images/brands/hyundai.svg", count: 1, origin: "South Korea", founded: 1967, description: "Award-winning parametric designs, cutting-edge smart tech, and exceptional modern value." }
];

const CATEGORIES_DATABASE = [
  { name: "Sedan", count: 5, icon: "fa-car-side", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80", description: "Timeless elegance, supreme highway comfort and executive prestige." },
  { name: "SUV", count: 8, icon: "fa-truck-monster", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80", description: "Elevated road visibility, supreme cabin space, and all-terrain authority." },
  { name: "Coupe", count: 3, icon: "fa-car", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80", description: "Sleek aerodynamic sloping rooflines and driver-focused exhilaration." },
  { name: "Hatchback", count: 1, icon: "fa-compact-disc", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80", description: "Nimble city agility, modular cargo flexibility, and modern practicality." },
  { name: "Convertible", count: 1, icon: "fa-wind", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80", description: "Pure open-air freedom, sensory exhaust notes, and coastal cruising bliss." },
  { name: "Sports Car", count: 3, icon: "fa-gauge-high", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80", description: "Hair-raising acceleration, race-tuned chassis, and razor-sharp handling." },
  { name: "Luxury Car", count: 7, icon: "fa-gem", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80", description: "First-class passenger sanctuaries with ultra-refined leather and active noise cancellation." },
  { name: "Electric Vehicle", count: 2, icon: "fa-bolt-lightning", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80", description: "Zero emissions, instant maximum torque delivery, and whispering silent journeys." }
];

// Helper functions
window.CarService = {
  getAllCars: () => [...CARS_DATABASE],
  getFeaturedCars: () => CARS_DATABASE.filter(c => c.featured),
  getCarById: (id) => CARS_DATABASE.find(c => c.id === id) || CARS_DATABASE[0],
  getRelatedCars: (carId, limit = 3) => {
    const current = CARS_DATABASE.find(c => c.id === carId);
    if (!current) return CARS_DATABASE.slice(0, limit);
    return CARS_DATABASE
      .filter(c => c.id !== carId && (c.brand === current.brand || c.category === current.category || c.bodyType === current.bodyType))
      .slice(0, limit);
  },
  getAllBrands: () => {
    return BRANDS_DATABASE.map(b => {
      const liveCount = CARS_DATABASE.filter(c => c.brand.toLowerCase() === b.name.toLowerCase()).length;
      return { ...b, count: liveCount || b.count };
    });
  },
  getAllCategories: () => {
    return CATEGORIES_DATABASE.map(cat => {
      const liveCount = CARS_DATABASE.filter(c => 
        c.category.toLowerCase() === cat.name.toLowerCase() || 
        c.bodyType.toLowerCase() === cat.name.toLowerCase()
      ).length;
      return { ...cat, count: liveCount || cat.count };
    });
  },
  
  // Dynamic Card HTML Builder (Standardized for Homepage & Inventory)
  createCarCardHTML: (car) => {
    const badgeColor = car.badge === 'New Arrival' ? 'badge-new' : (car.badge === 'Popular' ? 'badge-popular' : 'badge-featured');
    
    // Category-specific SVG fallback map
    const fallbackMap = {
      'Sedan': 'assets/images/cars/placeholder-sedan.svg',
      'SUV': 'assets/images/cars/placeholder-suv.svg',
      'Sports Car': 'assets/images/cars/placeholder-sports.svg',
      'Electric Vehicle': 'assets/images/cars/placeholder-electric.svg'
    };
    const fallbackImg = fallbackMap[car.category] || fallbackMap[car.bodyType] || 'assets/images/cars/placeholder-car.svg';
    
    return `
      <div class="col-12 col-md-6 col-lg-4 car-card-wrapper" data-brand="${car.brand}" data-category="${car.category}" data-year="${car.year}" data-fuel="${car.fuelType}" data-transmission="${car.transmission}">
        <div class="card car-card h-100 shadow-sm border-0">
          <div class="car-image-container">
            <span class="badge ${badgeColor} position-absolute top-0 start-0 m-3 z-2">
              <i class="fa-solid ${car.badge === 'New Arrival' ? 'fa-sparkles' : 'fa-star'} me-1"></i> ${car.badge}
            </span>
            <button class="btn btn-favorite position-absolute top-0 end-0 m-3 z-2" aria-label="Save to favorites" onclick="toggleFavorite(this, '${car.id}')">
              <i class="fa-regular fa-heart"></i>
            </button>
            <a href="car-details.html?id=${car.id}" class="d-block overflow-hidden">
              <img src="${car.images[0]}" 
                   alt="${car.brand} ${car.model}" 
                   class="car-img-top w-100" 
                   loading="lazy" 
                   onerror="this.onerror=null; this.src='${fallbackImg}'">
            </a>
            <div class="car-price-tag">
              <span class="price-label">Price</span>
              <span class="price-value">${car.formattedPrice}</span>
            </div>
          </div>
          
          <div class="card-body p-4 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <span class="car-brand-name text-uppercase fw-semibold tracking-wider">${car.brand}</span>
              <span class="car-year-badge">${car.year}</span>
            </div>
            
            <h5 class="card-title car-model-title mb-3">
              <a href="car-details.html?id=${car.id}" class="text-decoration-none">${car.model}</a>
            </h5>
            
            <div class="car-specs-grid mb-3">
              <div class="spec-item" title="Mileage">
                <i class="fa-solid fa-gauge text-gold me-1"></i>
                <span>${car.mileageText}</span>
              </div>
              <div class="spec-item" title="Transmission">
                <i class="fa-solid fa-gear text-gold me-1"></i>
                <span>${car.transmission}</span>
              </div>
              <div class="spec-item" title="Fuel Type">
                <i class="fa-solid fa-gas-pump text-gold me-1"></i>
                <span>${car.fuelType}</span>
              </div>
              <div class="spec-item" title="Body Category">
                <i class="fa-solid fa-car text-gold me-1"></i>
                <span>${car.category}</span>
              </div>
            </div>
            
            <div class="mt-auto pt-3 border-top d-flex gap-2 align-items-center justify-content-between">
              <a href="car-details.html?id=${car.id}" class="btn btn-outline-gold w-100 py-2 fw-semibold">
                View Details <i class="fa-solid fa-arrow-right ms-1"></i>
              </a>
              <a href="https://wa.me/8801700000000?text=Hello%20Mamun%20Autos,%20I%20am%20interested%20in%20the%20${encodeURIComponent(car.brand + ' ' + car.model + ' (' + car.year + ')')}" 
                 target="_blank" 
                 class="btn btn-whatsapp-icon" 
                 title="Quick WhatsApp Inquiry" 
                 aria-label="WhatsApp Inquiry">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
