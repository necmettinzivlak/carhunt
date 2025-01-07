import { Car } from "@/types/car";

export const carData: Car[] = [
  {
    id: 1,
    brandName: "audi",
    modelName: "a3",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt premium hatchback",
      "Sportback versiyonu popüler",
      "S3 ve RS3 versiyonları mevcut",
    ],
    images: {
      parts: [
        "/images/audi/a3/part1.jpg",
        "/images/audi/a3/part2.jpg",
        "/images/audi/a3/part3.jpg",
      ],
      full: "/images/audi/a3/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 2,
    brandName: "audi",
    modelName: "a4",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Orta sınıf premium sedan",
      "Avant versiyonu station wagon",
      "S4 versiyonu yüksek performanslı",
    ],
    images: {
      parts: [
        "/images/audi/a4/part1.jpg",
        "/images/audi/a4/part2.jpg",
        "/images/audi/a4/part3.jpg",
      ],
      full: "/images/audi/a4/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 3,
    brandName: "audi",
    modelName: "a5",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Sportif coupe tasarım",
      "Sportback ve Cabriolet versiyonları mevcut",
      "A4 platformunu kullanıyor",
    ],
    images: {
      parts: [
        "/images/audi/a5/part1.jpg",
        "/images/audi/a5/part2.jpg",
        "/images/audi/a5/part3.jpg",
      ],
      full: "/images/audi/a5/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 4,
    brandName: "audi",
    modelName: "a6",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Üst sınıf premium sedan",
      "Quattro sistemi standart",
      "S6 ve RS6 versiyonları mevcut",
    ],
    images: {
      parts: [
        "/images/audi/a6/part1.jpg",
        "/images/audi/a6/part2.jpg",
        "/images/audi/a6/part3.jpg",
      ],
      full: "/images/audi/a6/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 5,
    brandName: "audi",
    modelName: "e-tron",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın ilk tam elektrikli SUV modeli",
      "İki elektrik motoru ile quattro sistem",
      "95 kWh batarya kapasitesi",
    ],
    images: {
      parts: [
        "/images/audi/etron/part1.jpg",
        "/images/audi/etron/part2.jpg",
        "/images/audi/etron/part3.jpg",
      ],
      full: "/images/audi/etron/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 6,
    brandName: "audi",
    modelName: "q3",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt premium SUV",
      "Sportback versiyonu coupe tasarımlı",
      "RS Q3 versiyonu 400 beygir üstü",
    ],
    images: {
      parts: [
        "/images/audi/q3/part1.jpg",
        "/images/audi/q3/part2.jpg",
        "/images/audi/q3/part3.jpg",
      ],
      full: "/images/audi/q3/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 7,
    brandName: "audi",
    modelName: "q5",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Orta boy premium SUV",
      "Sportback versiyonu mevcut",
      "TFSI e plug-in hibrit seçeneği var",
    ],
    images: {
      parts: [
        "/images/audi/q5/part1.jpg",
        "/images/audi/q5/part2.jpg",
        "/images/audi/q5/part3.jpg",
      ],
      full: "/images/audi/q5/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 8,
    brandName: "audi",
    modelName: "q8",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın amiral gemisi SUV modeli",
      "Coupe tasarımlı lüks SUV",
      "RS Q8 versiyonu süper SUV",
    ],
    images: {
      parts: [
        "/images/audi/q8/part1.jpg",
        "/images/audi/q8/part2.jpg",
        "/images/audi/q8/part3.jpg",
      ],
      full: "/images/audi/q8/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 9,
    brandName: "audi",
    modelName: "rs3",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "5 silindirli turbo motor",
      "400 beygir üzeri güç",
      "Kompakt süper otomobil",
    ],
    images: {
      parts: [
        "/images/audi/rs3/part1.jpg",
        "/images/audi/rs3/part2.jpg",
        "/images/audi/rs3/part3.jpg",
      ],
      full: "/images/audi/rs3/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 10,
    brandName: "audi",
    modelName: "rs6",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Station wagon gövdesiyle süper otomobil performansı",
      "V8 çift turbo motor",
      "600 beygirin üzerinde güç",
    ],
    images: {
      parts: [
        "/images/audi/rs6/part1.jpg",
        "/images/audi/rs6/part2.jpg",
        "/images/audi/rs6/part3.jpg",
      ],
      full: "/images/audi/rs6/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 11,
    brandName: "bmw",
    modelName: "320",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "3 serisi ailesinin en popüler modeli",
      "G20 kasa kodu ile biliniyor",
      "48V hafif hibrit teknolojisi mevcut",
    ],
    images: {
      parts: [
        "/images/bmw/320/part1.jpg",
        "/images/bmw/320/part2.jpg",
        "/images/bmw/320/part3.jpg",
      ],
      full: "/images/bmw/320/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 12,
    brandName: "bmw",
    modelName: "420",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Büyük ızgara tasarımıyla dikkat çekiyor",
      "3 serisi coupe versiyonu",
      "Gran Coupe versiyonu 4 kapılı",
    ],
    images: {
      parts: [
        "/images/bmw/420/part1.jpg",
        "/images/bmw/420/part2.jpg",
        "/images/bmw/420/part3.jpg",
      ],
      full: "/images/bmw/420/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 13,
    brandName: "bmw",
    modelName: "520",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "İş dünyasının gözdesi",
      "5 serisi ailesinin en çok satan modeli",
      "Touring versiyonu station wagon",
    ],
    images: {
      parts: [
        "/images/bmw/520/part1.jpg",
        "/images/bmw/520/part2.jpg",
        "/images/bmw/520/part3.jpg",
      ],
      full: "/images/bmw/520/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 14,
    brandName: "bmw",
    modelName: "i4",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın elektrikli Gran Coupe modeli",
      "M50 versiyonu 544 beygir",
      "84 kWh batarya kapasitesi",
    ],
    images: {
      parts: [
        "/images/bmw/i4/part1.jpg",
        "/images/bmw/i4/part2.jpg",
        "/images/bmw/i4/part3.jpg",
      ],
      full: "/images/bmw/i4/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 15,
    brandName: "bmw",
    modelName: "X5",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın ilk SUV modeli",
      "M versiyonu 600 beygir üstü",
      "xDrive sistemi ile dört çeker",
    ],
    images: {
      parts: [
        "/images/bmw/x5/part1.jpg",
        "/images/bmw/x5/part2.jpg",
        "/images/bmw/x5/part3.jpg",
      ],
      full: "/images/bmw/x5/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 16,
    brandName: "honda",
    modelName: "accord",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "D segmenti sedan",
      "Hibrit motor seçeneği mevcut",
      "Markanın amiral gemisi sedan modeli",
    ],
    images: {
      parts: [
        "/images/honda/accord/part1.jpg",
        "/images/honda/accord/part2.jpg",
        "/images/honda/accord/part3.jpg",
      ],
      full: "/images/honda/accord/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 17,
    brandName: "honda",
    modelName: "civic",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "11. nesli yeni tasarımıyla dikkat çekiyor",
      "Type-R versiyonu efsane",
      "VTEC motor teknolojisiyle ünlü",
    ],
    images: {
      parts: [
        "/images/honda/civic/part1.jpg",
        "/images/honda/civic/part2.jpg",
        "/images/honda/civic/part3.jpg",
      ],
      full: "/images/honda/civic/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 18,
    brandName: "honda",
    modelName: "crv",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın en çok satan SUV modeli",
      "e:HEV hibrit teknolojisi mevcut",
      "Comfort & Runabout Vehicle'ın kısaltması",
    ],
    images: {
      parts: [
        "/images/honda/crv/part1.jpg",
        "/images/honda/crv/part2.jpg",
        "/images/honda/crv/part3.jpg",
      ],
      full: "/images/honda/crv/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 19,
    brandName: "honda",
    modelName: "jazz",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt sınıfın pratik modeli",
      "Magic Seats özelliği ile ünlü",
      "e:HEV hibrit teknolojisi standart",
    ],
    images: {
      parts: [
        "/images/honda/jazz/part1.jpg",
        "/images/honda/jazz/part2.jpg",
        "/images/honda/jazz/part3.jpg",
      ],
      full: "/images/honda/jazz/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 20,
    brandName: "hyundai",
    modelName: "elantra",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Parametrik dinamik tasarım",
      "C segmenti sedan",
      "N-Line versiyonu sportif",
    ],
    images: {
      parts: [
        "/images/hyundai/elentra/part1.jpg",
        "/images/hyundai/elentra/part2.jpg",
        "/images/hyundai/elentra/part3.jpg",
      ],
      full: "/images/hyundai/elentra/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 21,
    brandName: "hyundai",
    modelName: "i20",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "B segmenti hatchback",
      "N versiyonu 204 beygir",
      "Sensuous Sportiness tasarım dili",
    ],
    images: {
      parts: [
        "/images/hyundai/i20/part1.jpg",
        "/images/hyundai/i20/part2.jpg",
        "/images/hyundai/i20/part3.jpg",
      ],
      full: "/images/hyundai/i20/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 22,
    brandName: "hyundai",
    modelName: "i30",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "C segmenti hatchback",
      "N versiyonu 280 beygir",
      "Fastback versiyonu coupe tarzı",
    ],
    images: {
      parts: [
        "/images/hyundai/i30/part1.jpg",
        "/images/hyundai/i30/part2.jpg",
        "/images/hyundai/i30/part3.jpg",
      ],
      full: "/images/hyundai/i30/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 23,
    brandName: "hyundai",
    modelName: "ioniq 5",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Retro-fütüristik tasarım",
      "800V elektrik mimarisi",
      "Yılın Otomobili ödüllü",
    ],
    images: {
      parts: [
        "/images/hyundai/ioniq5/part1.jpg",
        "/images/hyundai/ioniq5/part2.jpg",
        "/images/hyundai/ioniq5/part3.jpg",
      ],
      full: "/images/hyundai/ioniq5/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 24,
    brandName: "hyundai",
    modelName: "kona",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "B-SUV segmentinin dikkat çekeni",
      "Elektrikli versiyonu mevcut",
      "N versiyonu 280 beygir",
    ],
    images: {
      parts: [
        "/images/hyundai/kona/part1.jpg",
        "/images/hyundai/kona/part2.jpg",
        "/images/hyundai/kona/part3.jpg",
      ],
      full: "/images/hyundai/kona/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 25,
    brandName: "hyundai",
    modelName: "tucson",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Parametrik tasarım diliyle dikkat çekiyor",
      "Hibrit ve plug-in hibrit seçenekleri mevcut",
      "C-SUV segmentinin popüler modeli",
    ],
    images: {
      parts: [
        "/images/hyundai/tucson/part1.jpg",
        "/images/hyundai/tucson/part2.jpg",
        "/images/hyundai/tucson/part3.jpg",
      ],
      full: "/images/hyundai/tucson/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 25,
    brandName: "kia",
    modelName: "ceed",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt sınıfın pratik modeli",
      "Magic Seats özelliği ile ünlü",
      "e:HEV hibrit teknolojisi standart",
    ],
    images: {
      parts: [
        "/images/kia/ceed/part1.jpg",
        "/images/kia/ceed/part2.jpg",
        "/images/kia/ceed/part3.jpg",
      ],
      full: "/images/kia/ceed/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 26,
    brandName: "kia",
    modelName: "sportage",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "SUV segmentinin popüler modeli",
      "Hibrit ve plug-in hibrit seçenekleri mevcut",
      "Yeni tasarım diliyle dikkat çekiyor",
    ],
    images: {
      parts: [
        "/images/kia/sportage/part1.jpg",
        "/images/kia/sportage/part2.jpg",
        "/images/kia/sportage/part3.jpg",
      ],
      full: "/images/kia/sportage/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 27,
    brandName: "kia",
    modelName: "sorento",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "SUV segmentinin popüler modeli",
      "Hibrit ve plug-in hibrit seçenekleri mevcut",
      "Yeni tasarım diliyle dikkat çekiyor",
    ],
    images: {
      parts: [
        "/images/kia/sorento/part1.jpg",
        "/images/kia/sorento/part2.jpg",
        "/images/kia/sorento/part3.jpg",
      ],
      full: "/images/kia/sorento/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 28,
    brandName: "mercedes",
    modelName: "c200",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Premium orta sınıf sedan",
      "Mild-hybrid teknolojisi standart",
      "S-Class'tan ilham alan tasarım",
    ],
    images: {
      parts: [
        "/images/mercedes/c200/part1.jpg",
        "/images/mercedes/c200/part2.jpg",
        "/images/mercedes/c200/part3.jpg",
      ],
      full: "/images/mercedes/c200/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 29,
    brandName: "mercedes",
    modelName: "a180",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Premium orta sınıf sedan",
      "Mild-hybrid teknolojisi standart",
      "S-Class'tan ilham alan tasarım",
    ],
    images: {
      parts: [
        "/images/mercedes/a180/part1.jpg",
        "/images/mercedes/a180/part2.jpg",
        "/images/mercedes/a180/part3.jpg",
      ],
      full: "/images/mercedes/a180/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 30,
    brandName: "mercedes",
    modelName: "cls",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "4 kapılı coupe tasarım",
      "Sportif ve lüks sedan",
      "Aerodinamik siluet",
    ],
    images: {
      parts: [
        "/images/mercedes/cls/part1.jpg",
        "/images/mercedes/cls/part2.jpg",
        "/images/mercedes/cls/part3.jpg",
      ],
      full: "/images/mercedes/cls/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 31,
    brandName: "mercedes",
    modelName: "e200",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "İş dünyasının gözdesi",
      "Konforlu sürüş deneyimi",
      "Teknoloji dolu iç mekan",
    ],
    images: {
      parts: [
        "/images/mercedes/e200/part1.jpg",
        "/images/mercedes/e200/part2.jpg",
        "/images/mercedes/e200/part3.jpg",
      ],
      full: "/images/mercedes/e200/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 32,
    brandName: "mercedes",
    modelName: "gla",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt SUV",
      "Yüksek sürüş pozisyonu",
      "Şehir içi kullanıma uygun",
    ],
    images: {
      parts: [
        "/images/mercedes/gla/part1.jpg",
        "/images/mercedes/gla/part2.jpg",
        "/images/mercedes/gla/part3.jpg",
      ],
      full: "/images/mercedes/gla/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 33,
    brandName: "mercedes",
    modelName: "glc",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: ["Orta boy lüks SUV", "Off-road yetenekleri", "Premium iç mekan"],
    images: {
      parts: [
        "/images/mercedes/glc/part1.jpg",
        "/images/mercedes/glc/part2.jpg",
        "/images/mercedes/glc/part3.jpg",
      ],
      full: "/images/mercedes/glc/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 34,
    brandName: "mercedes",
    modelName: "s400",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Lüks sedan segmentinin öncüsü",
      "En üst düzey konfor",
      "Son teknoloji güvenlik sistemleri",
    ],
    images: {
      parts: [
        "/images/mercedes/s400/part1.jpg",
        "/images/mercedes/s400/part2.jpg",
        "/images/mercedes/s400/part3.jpg",
      ],
      full: "/images/mercedes/s400/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 35,
    brandName: "porsche",
    modelName: "911",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Spor otomobil efsanesi",
      "Arkadan motorlu klasik tasarım",
      "Yarış pistlerinin vazgeçilmezi",
    ],
    images: {
      parts: [
        "/images/porsche/911/part1.jpg",
        "/images/porsche/911/part2.jpg",
        "/images/porsche/911/part3.jpg",
      ],
      full: "/images/porsche/911/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 36,
    brandName: "porsche",
    modelName: "cayenne",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Lüks spor SUV",
      "Yüksek performanslı aile aracı",
      "Porsche DNA'sı taşıyan SUV",
    ],
    images: {
      parts: [
        "/images/porsche/cayenne/part1.jpg",
        "/images/porsche/cayenne/part2.jpg",
        "/images/porsche/cayenne/part3.jpg",
      ],
      full: "/images/porsche/cayenne/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 37,
    brandName: "porsche",
    modelName: "cayman",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Orta motorlu spor otomobil",
      "718 ailesinin üyesi",
      "Kompakt ve çevik yapı",
    ],
    images: {
      parts: [
        "/images/porsche/cayman/part1.jpg",
        "/images/porsche/cayman/part2.jpg",
        "/images/porsche/cayman/part3.jpg",
      ],
      full: "/images/porsche/cayman/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 38,
    brandName: "porsche",
    modelName: "taycan",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Porsche'nin ilk elektrikli otomobili",
      "Yüksek performanslı elektrikli sedan",
      "Fütüristik tasarım",
    ],
    images: {
      parts: [
        "/images/porsche/taycan/part1.jpg",
        "/images/porsche/taycan/part2.jpg",
        "/images/porsche/taycan/part3.jpg",
      ],
      full: "/images/porsche/taycan/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 39,
    brandName: "toyota",
    modelName: "auris",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt hatchback model",
      "Hibrit teknolojisi mevcut",
      "Pratik ve ekonomik",
    ],
    images: {
      parts: [
        "/images/toyota/auris/part1.jpg",
        "/images/toyota/auris/part2.jpg",
        "/images/toyota/auris/part3.jpg",
      ],
      full: "/images/toyota/auris/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 40,
    brandName: "toyota",
    modelName: "chr",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Coupe tarzı crossover",
      "Hibrit güç aktarma sistemi",
      "Keskin tasarım çizgileri",
    ],
    images: {
      parts: [
        "/images/toyota/chr/part1.jpg",
        "/images/toyota/chr/part2.jpg",
        "/images/toyota/chr/part3.jpg",
      ],
      full: "/images/toyota/chr/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 41,
    brandName: "toyota",
    modelName: "corolla",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Dünyanın en çok satan otomobili",
      "Sedan ve hatchback seçenekleri",
      "Hibrit motor seçeneği mevcut",
    ],
    images: {
      parts: [
        "/images/toyota/corolla/part1.jpg",
        "/images/toyota/corolla/part2.jpg",
        "/images/toyota/corolla/part3.jpg",
      ],
      full: "/images/toyota/corolla/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 42,
    brandName: "toyota",
    modelName: "yaris",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt şehir otomobili",
      "Hibrit motor seçeneği",
      "GR versiyonu ralli DNA'sı taşıyor",
    ],
    images: {
      parts: [
        "/images/toyota/yaris/part1.jpg",
        "/images/toyota/yaris/part2.jpg",
        "/images/toyota/yaris/part3.jpg",
      ],
      full: "/images/toyota/yaris/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 43,
    brandName: "volkswagen",
    modelName: "arteon",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "4 kapılı coupe tasarım",
      "Markanın amiral gemisi",
      "Shooting brake versiyonu mevcut",
    ],
    images: {
      parts: [
        "/images/volkswagen/arteon/part1.jpg",
        "/images/volkswagen/arteon/part2.jpg",
        "/images/volkswagen/arteon/part3.jpg",
      ],
      full: "/images/volkswagen/arteon/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 44,
    brandName: "volkswagen",
    modelName: "golf",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt sınıfın efsanesi",
      "GTI ve R versiyonları mevcut",
      "8. nesil üretimde",
    ],
    images: {
      parts: [
        "/images/volkswagen/golf/part1.jpg",
        "/images/volkswagen/golf/part2.jpg",
        "/images/volkswagen/golf/part3.jpg",
      ],
      full: "/images/volkswagen/golf/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 45,
    brandName: "volkswagen",
    modelName: "passat",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "D segmentinin güvenilir modeli",
      "Station wagon versiyonu popüler",
      "Plug-in hibrit seçeneği mevcut",
    ],
    images: {
      parts: [
        "/images/volkswagen/passat/part1.jpg",
        "/images/volkswagen/passat/part2.jpg",
        "/images/volkswagen/passat/part3.jpg",
      ],
      full: "/images/volkswagen/passat/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 46,
    brandName: "volkswagen",
    modelName: "polo",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Şehir içi kullanımın gözdesi",
      "GTI versiyonu sportif sürüş sunuyor",
      "Ekonomik motor seçenekleri",
    ],
    images: {
      parts: [
        "/images/volkswagen/polo/part1.jpg",
        "/images/volkswagen/polo/part2.jpg",
        "/images/volkswagen/polo/part3.jpg",
      ],
      full: "/images/volkswagen/polo/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 47,
    brandName: "volkswagen",
    modelName: "tiguan",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın en çok satan SUV modeli",
      "R-Line versiyonu sportif görünüm sunuyor",
      "Allspace versiyonu 7 koltuklu",
    ],
    images: {
      parts: [
        "/images/volkswagen/tiguan/part1.jpg",
        "/images/volkswagen/tiguan/part2.jpg",
        "/images/volkswagen/tiguan/part3.jpg",
      ],
      full: "/images/volkswagen/tiguan/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 48,
    brandName: "volkswagen",
    modelName: "touareg",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın lüks SUV modeli",
      "V6 ve V8 motor seçenekleri",
      "Hava süspansiyon sistemi mevcut",
    ],
    images: {
      parts: [
        "/images/volkswagen/touareg/part1.jpg",
        "/images/volkswagen/touareg/part2.jpg",
        "/images/volkswagen/touareg/part3.jpg",
      ],
      full: "/images/volkswagen/touareg/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 49,
    brandName: "volkswagen",
    modelName: "troc",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt crossover model",
      "Sportif tasarım çizgileri",
      "R versiyonu yüksek performans sunuyor",
    ],
    images: {
      parts: [
        "/images/volkswagen/troc/part1.jpg",
        "/images/volkswagen/troc/part2.jpg",
        "/images/volkswagen/troc/part3.jpg",
      ],
      full: "/images/volkswagen/troc/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 50,
    brandName: "volvo",
    modelName: "c40",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Tamamen elektrikli coupe SUV",
      "Çift motorlu AWD sistem",
      "Yüksek güvenlik teknolojileri",
    ],
    images: {
      parts: [
        "/images/volvo/c40/part1.jpg",
        "/images/volvo/c40/part2.jpg",
        "/images/volvo/c40/part3.jpg",
      ],
      full: "/images/volvo/c40/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 51,
    brandName: "volvo",
    modelName: "s60",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Orta sınıf premium sedan",
      "Polestar versiyonu yüksek performanslı",
      "T8 hibrit motor seçeneği",
    ],
    images: {
      parts: [
        "/images/volvo/s60/part1.jpg",
        "/images/volvo/s60/part2.jpg",
        "/images/volvo/s60/part3.jpg",
      ],
      full: "/images/volvo/s60/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 52,
    brandName: "volvo",
    modelName: "s90",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Markanın amiral gemisi sedan",
      "İskandinav lüks tasarımı",
      "Plug-in hibrit teknolojisi",
    ],
    images: {
      parts: [
        "/images/volvo/s90/part1.jpg",
        "/images/volvo/s90/part2.jpg",
        "/images/volvo/s90/part3.jpg",
      ],
      full: "/images/volvo/s90/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 53,
    brandName: "volvo",
    modelName: "v60",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Premium station wagon",
      "Cross Country versiyonu mevcut",
      "Geniş bagaj hacmi",
    ],
    images: {
      parts: [
        "/images/volvo/v60/part1.jpg",
        "/images/volvo/v60/part2.jpg",
        "/images/volvo/v60/part3.jpg",
      ],
      full: "/images/volvo/v60/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 54,
    brandName: "volvo",
    modelName: "xc40",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt premium SUV",
      "Recharge versiyonu elektrikli",
      "Modern şehir yaşamına uygun",
    ],
    images: {
      parts: [
        "/images/volvo/xc40/part1.jpg",
        "/images/volvo/xc40/part2.jpg",
        "/images/volvo/xc40/part3.jpg",
      ],
      full: "/images/volvo/xc40/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 55,
    brandName: "volvo",
    modelName: "xc60",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Orta boy premium SUV",
      "En çok satan Volvo modeli",
      "Gelişmiş sürüş asistanları",
    ],
    images: {
      parts: [
        "/images/volvo/xc60/part1.jpg",
        "/images/volvo/xc60/part2.jpg",
        "/images/volvo/xc60/part3.jpg",
      ],
      full: "/images/volvo/xc60/fullimage.jpg",
    },
    difficulty: 2,
  },
  {
    id: 56,
    brandName: "volvo",
    modelName: "xc90",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 40,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Büyük boy premium SUV",
      "7 koltuk seçeneği",
      "T8 Twin Engine hibrit",
    ],
    images: {
      parts: [
        "/images/volvo/xc90/part1.jpg",
        "/images/volvo/xc90/part2.jpg",
        "/images/volvo/xc90/part3.jpg",
      ],
      full: "/images/volvo/xc90/fullimage.jpg",
    },
    difficulty: 3,
  },
  {
    id: 57,
    brandName: "togg",
    modelName: "t10x",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 45,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Türkiye'nin ilk yerli elektrikli SUV'u",
      "Çift motorlu AWD seçeneği mevcut",
      "300 ve 400 beygir güç seçenekleri",
    ],
    images: {
      parts: [
        "/images/togg/t10x/part1.jpg",
        "/images/togg/t10x/part2.jpg",
        "/images/togg/t10x/part3.jpg",
      ],
      full: "/images/togg/t10x/fullimage.jpg",
    },
    difficulty: 3,
  }
  ,{
    id: 58,
    brandName: "fiat",
    modelName: "500",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2, 
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Retro tasarımlı şehir otomobili",
      "Elektrikli versiyonu mevcut",
      "Abarth versiyonu yüksek performanslı"
    ],
    images: {
      parts: [
        "/images/fiat/500/part1.jpg",
        "/images/fiat/500/part2.jpg",
        "/images/fiat/500/part3.jpg",
      ],
      full: "/images/fiat/500/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 59,
    brandName: "fiat",
    modelName: "egea",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Türkiye'de üretilen kompakt sedan",
      "Hatchback ve Cross versiyonları mevcut",
      "Ekonomik motor seçenekleri"
    ],
    images: {
      parts: [
        "/images/fiat/egea/part1.jpg",
        "/images/fiat/egea/part2.jpg",
        "/images/fiat/egea/part3.jpg",
      ],
      full: "/images/fiat/egea/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 60,
    brandName: "fiat",
    modelName: "linea",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt sedan model",
      "Tofaş fabrikasında üretildi",
      "Ekonomik aile otomobili"
    ],
    images: {
      parts: [
        "/images/fiat/linea/part1.jpg",
        "/images/fiat/linea/part2.jpg",
        "/images/fiat/linea/part3.jpg",
      ],
      full: "/images/fiat/linea/fullimage.jpg",
    },
    difficulty: 1,
  },
  {
    id: 61,
    brandName: "fiat",
    modelName: "punto",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt hatchback model",
      "Abarth versiyonu üretildi",
      "Ekonomik şehir otomobili"
    ],
    images: {
      parts: [
        "/images/fiat/punto/part1.jpg",
        "/images/fiat/punto/part2.jpg",
        "/images/fiat/punto/part3.jpg",
      ],
      full: "/images/fiat/punto/fullimage.jpg",
    },
    difficulty: 1,
  }
  ,{
    id: 62,
    brandName: "ford",
    modelName: "courier",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt ticari araç",
      "Fiesta platformunu kullanıyor",
      "Ekonomik dizel motor seçeneği"
    ],
    images: {
      parts: [
        "/images/ford/courier/part1.jpg",
        "/images/ford/courier/part2.jpg",
        "/images/ford/courier/part3.jpg",
      ],
      full: "/images/ford/courier/fullimage.jpg",
    },
    difficulty: 1
  },
  {
    id: 63,
    brandName: "ford",
    modelName: "fiesta",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt şehir otomobili",
      "ST versiyonu yüksek performanslı",
      "Ekonomik benzinli motorlar"
    ],
    images: {
      parts: [
        "/images/ford/fiesta/part1.jpg",
        "/images/ford/fiesta/part2.jpg",
        "/images/ford/fiesta/part3.jpg",
      ],
      full: "/images/ford/fiesta/fullimage.jpg",
    },
    difficulty: 1
  },
  {
    id: 64,
    brandName: "ford",
    modelName: "focus",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "C segmenti hatchback",
      "ST ve RS versiyonları mevcut",
      "Sedan ve station wagon seçenekleri"
    ],
    images: {
      parts: [
        "/images/ford/focus/part1.jpg",
        "/images/ford/focus/part2.jpg",
        "/images/ford/focus/part3.jpg",
      ],
      full: "/images/ford/focus/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 65,
    brandName: "ford",
    modelName: "mondeo",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "D segmenti sedan",
      "Hibrit motor seçeneği mevcut",
      "Vignale lüks donanım paketi"
    ],
    images: {
      parts: [
        "/images/ford/mondeo/part1.jpg",
        "/images/ford/mondeo/part2.jpg",
        "/images/ford/mondeo/part3.jpg",
      ],
      full: "/images/ford/mondeo/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 66,
    brandName: "ford",
    modelName: "ranger",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Orta boy pickup",
      "Raptor versiyonu off-road odaklı",
      "Güçlü dizel motorlar"
    ],
    images: {
      parts: [
        "/images/ford/ranger/part1.jpg",
        "/images/ford/ranger/part2.jpg",
        "/images/ford/ranger/part3.jpg",
      ],
      full: "/images/ford/ranger/fullimage.jpg",
    },
    difficulty: 2
  }

  ,{
    id: 67,
    brandName: "opel",
    modelName: "astra",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt sınıf temsilcisi",
      "GSe versiyonu hibrit ve sportif",
      "Sports Tourer station wagon seçeneği"
    ],
    images: {
      parts: [
        "/images/opel/astra/part1.jpg",
        "/images/opel/astra/part2.jpg",
        "/images/opel/astra/part3.jpg",
      ],
      full: "/images/opel/astra/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 68,
    brandName: "opel",
    modelName: "corsa",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "B segmenti şehir otomobili",
      "Elektrikli versiyonu mevcut",
      "GSi versiyonu sportif sürüş sunuyor"
    ],
    images: {
      parts: [
        "/images/opel/corsa/part1.jpg",
        "/images/opel/corsa/part2.jpg",
        "/images/opel/corsa/part3.jpg",
      ],
      full: "/images/opel/corsa/fullimage.jpg",
    },
    difficulty: 1
  },
  {
    id: 69,
    brandName: "opel",
    modelName: "insignia",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "D segmenti büyük sedan",
      "Sports Tourer station wagon seçeneği",
      "GSi versiyonu yüksek performanslı"
    ],
    images: {
      parts: [
        "/images/opel/insignia/part1.jpg",
        "/images/opel/insignia/part2.jpg",
        "/images/opel/insignia/part3.jpg",
      ],
      full: "/images/opel/insignia/fullimage.jpg",
    },
    difficulty: 2
  }
  ,{
    id: 70,
    brandName: "peugeot",
    modelName: "5008",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "7 koltuklu SUV",
      "i-Cockpit dijital gösterge paneli",
      "GT Line versiyonu sportif görünüm sunuyor"
    ],
    images: {
      parts: [
        "/images/peugeot/5008/part1.jpg",
        "/images/peugeot/5008/part2.jpg",
        "/images/peugeot/5008/part3.jpg",
      ],
      full: "/images/peugeot/5008/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 71,
    brandName: "peugeot", 
    modelName: "508",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 35,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "D segmenti fastback sedan",
      "Plug-in hibrit versiyonu mevcut",
      "GT versiyonu yüksek performans sunuyor"
    ],
    images: {
      parts: [
        "/images/peugeot/508/part1.jpg",
        "/images/peugeot/508/part2.jpg",
        "/images/peugeot/508/part3.jpg",
      ],
      full: "/images/peugeot/508/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 72,
    brandName: "peugeot",
    modelName: "206",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Efsanevi kompakt hatchback",
      "RC ve GTi versiyonları mevcut",
      "Cabrio versiyonu üretildi"
    ],
    images: {
      parts: [
        "/images/peugeot/206/part1.jpg",
        "/images/peugeot/206/part2.jpg",
        "/images/peugeot/206/part3.jpg",
      ],
      full: "/images/peugeot/206/fullimage.jpg",
    },
    difficulty: 1
  },
  {
    id: 73,
    brandName: "peugeot",
    modelName: "307",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "C segmenti hatchback",
      "CC versiyonu katlanır metal tavan",
      "Break station wagon seçeneği"
    ],
    images: {
      parts: [
        "/images/peugeot/307/part1.jpg",
        "/images/peugeot/307/part2.jpg",
        "/images/peugeot/307/part3.jpg",
      ],
      full: "/images/peugeot/307/fullimage.jpg",
    },
    difficulty: 2
  }
  ,{
    id: 74,
    brandName: "renault",
    modelName: "clio",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt şehir otomobili",
      "RS versiyonu yüksek performanslı",
      "E-Tech hibrit seçeneği mevcut"
    ],
    images: {
      parts: [
        "/images/renault/clio/part1.jpg",
        "/images/renault/clio/part2.jpg",
        "/images/renault/clio/part3.jpg",
      ],
      full: "/images/renault/clio/fullimage.jpg",
    },
    difficulty: 1
  },
  {
    id: 75,
    brandName: "renault",
    modelName: "megane",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "C segmenti hatchback",
      "RS versiyonu performans odaklı",
      "E-Tech tam elektrikli seçeneği"
    ],
    images: {
      parts: [
        "/images/renault/megane/part1.jpg",
        "/images/renault/megane/part2.jpg",
        "/images/renault/megane/part3.jpg",
      ],
      full: "/images/renault/megane/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 76,
    brandName: "renault",
    modelName: "fluence",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "C segmenti sedan",
      "Megane platformu üzerine inşa edildi",
      "Elektrikli versiyonu üretildi"
    ],
    images: {
      parts: [
        "/images/renault/fluence/part1.jpg",
        "/images/renault/fluence/part2.jpg",
        "/images/renault/fluence/part3.jpg",
      ],
      full: "/images/renault/fluence/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 77,
    brandName: "renault",
    modelName: "symbol",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Ekonomik sedan model",
      "Clio platformu üzerine inşa edildi",
      "Geniş bagaj hacmi"
    ],
    images: {
      parts: [
        "/images/renault/symbol/part1.jpg",
        "/images/renault/symbol/part2.jpg",
        "/images/renault/symbol/part3.jpg",
      ],
      full: "/images/renault/symbol/fullimage.jpg",
    },
    difficulty: 1
  }
  ,{
    id: 78,
    brandName: "seat",
    modelName: "leon",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt hatchback model",
      "Cupra versiyonu yüksek performanslı",
      "MQB platformu üzerine inşa edildi"
    ],
    images: {
      parts: [
        "/images/seat/leon/part1.jpg",
        "/images/seat/leon/part2.jpg",
        "/images/seat/leon/part3.jpg",
      ],
      full: "/images/seat/leon/fullimage.jpg",
    },
    difficulty: 2
  },
  {
    id: 79,
    brandName: "seat",
    modelName: "ibiza",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 25,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt şehir otomobili",
      "Polo platformu üzerine inşa edildi",
      "Sportif tasarım çizgileri"
    ],
    images: {
      parts: [
        "/images/seat/ibiza/part1.jpg",
        "/images/seat/ibiza/part2.jpg",
        "/images/seat/ibiza/part3.jpg",
      ],
      full: "/images/seat/ibiza/fullimage.jpg",
    },
    difficulty: 1
  },
  {
    id: 80,
    brandName: "seat",
    modelName: "toledo",
    year: 2023,
    brandPoints: {
      base: 10,
      perHint: -2,
      perPart: -2,
    },
    modelPoints: {
      base: 30,
      perHint: -5,
      perPart: -5,
    },
    hints: [
      "Kompakt sedan model",
      "Geniş bagaj hacmi",
      "Ekonomik motor seçenekleri"
    ],
    images: {
      parts: [
        "/images/seat/toledo/part1.jpg",
        "/images/seat/toledo/part2.jpg",
        "/images/seat/toledo/part3.jpg",
      ],
      full: "/images/seat/toledo/fullimage.jpg",
    },
    difficulty: 2
  }
].sort(() => Math.random() - 0.5); // Diziyi rastgele karıştır
console.log(carData.length);
