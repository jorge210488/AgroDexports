"use client"
import { IAgriProduct } from '@/interface/types';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react'

const ProductCard: React.FC<IAgriProduct> = ({company_product_id, company ,company_id, carbs, fat, calories, protein, category, stock, minimum_order, harvest_date, company_product_name, company_product_img, company_product_description, company_price_x_kg, discount, origin}) => {
  
  const router = useRouter();

  const truncateDescription = (description: string) => {
    if (description.length > 44) {
      return `${description.slice(0, 44)}...`;
    }
    return description;
  };

    const handleButtonProduct = () => {
        
        const product = { 
          company_product_id,
          company_id,
          company_product_img,
          company_product_name,
          category,
          company,
          origin,
          harvest_date,
          company_price_x_kg,
          minimum_order,
          stock,
          company_product_description,
          calories,
          fat,
          protein,
          carbs,
          discount
        };
        localStorage.setItem("selectedProduct", JSON.stringify(product));

        //guardar company por separado
        localStorage.setItem("companyId", company_id);

         //guardar product ID por separado
         localStorage.setItem("productId", company_product_id);

         window.dispatchEvent(new CustomEvent('productSelected', { 
          detail: product 
        }));

        // Redirigir a la página del producto con el id
        router.push(`/detailproduct/${company_id}`);
    }
  
  return (
        <div className="relative border h-[28rem] p-[2rem] rounded shadow-lg w-[100%] ">
          <Image 
        src={company_product_img || '/placeholder-image.png'} // Reemplazar con una imagen por defecto si es undefined
        alt={company_product_name || 'Product Image'} 
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded" 
      />
          <h2 className="text-lg text-black font-bold">{company_product_name}</h2>
          <p className="text-gray-600">{truncateDescription(company_product_description)}</p>
          <p className="text-green-700 font-bold absolute bottom-20 ">${company_price_x_kg}</p>
          <button onClick={handleButtonProduct} className="absolute bottom-5 bg-[#242424] text-white px-4 py-2 rounded w-[12.3rem] flex items-center m-auto">
            <p className="text-white text-[1rem] absolute right-7 ">Product details</p>
            <ShoppingCart/>
          </button>
        </div>
  );
}

export default ProductCard;

