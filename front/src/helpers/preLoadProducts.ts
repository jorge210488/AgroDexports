// import { IAgroProduct } from "@/interface/types"

// export const productsToPreLoad: IAgroProduct[] = [
//   {
//     id: 1,
//     images:[ "https://cdn.usegalileo.ai/sdxl10/efc9218c-9049-4496-8555-512cbbe0ed74.png"  ],
//     name: "Espinaca",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     images: ["https://cdn.usegalileo.ai/sdxl10/44fb0323-1367-45a5-b1fa-bbf923124e56.png"],
//     name: "Col Organica",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     images: ["https://cdn.usegalileo.ai/sdxl10/d0efad32-3aa0-4047-a6c6-6e413f5ce13a.png"],
//     name: "Tomate",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     images: ["https://i.etsystatic.com/21909926/r/il/d9863a/2980282924/il_570xN.2980282924_eu8f.jpg"],
//     name: "Zanahoria",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     images: ["https://cdn.usegalileo.ai/sdxl10/4e888dd2-9166-4885-b582-0eda25665981.png"],
//     name: "Zanahoria",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 6,
//     images: ["https://cdn.usegalileo.ai/sdxl10/fda5c103-de76-4d6c-b2aa-8737a697424c.png"],
//     name: "Tomate",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 7,
//     images: ["https://cdn.usegalileo.ai/sdxl10/5ab02c52-c298-4f97-a266-4940bde454e4.png"],
//     name: "col organica",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     images: ["https://cdn.usegalileo.ai/sdxl10/d0efad32-3aa0-4047-a6c6-6e413f5ce13a.png"],
//     name: "Tomate",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
//   {
//     id: 9,
//     images: ["https://media.istockphoto.com/id/1383034582/es/v%C3%ADdeo/primer-plano-de-cultivo-de-col-org%C3%A1nica-fresca-el-repollo-crece-en-el-campo-abierto-org%C3%A1nico.jpg?s=640x640&k=20&c=bLtH19QcdJXGk94X3I4UVvPtXGq_GysfGB-dMe_YMfo="],
//     name: "Col Organica",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     pricePerUnit: 100.99,
//     variety: "",
//     origin: "",
//     harvestDate: "",
//     unitType: "",
//     stock: "",
//     nutritionalInfo: {
//       calories: 20,
//       protein: 1,
//       fat: 0.2,
//       carbs: 3,
//     },
//     uses: ["Ensaladas", "Salsas", "Guisos"],
//     certifications: "Orgánico, Fair Trade",
//     shippingOptions: {
//       method: "Refrigerated",
//       deliveryTime: "15-20 días",
//       seaFreight: "Marsk",
//     },
//     reviews: [
//       {
//         userName: "Juan Pérez",
//         rating: 5,
//         comment: "Producto muy fresco y de excelente calidad.",
//       },
//     ],
//   },
// ]
