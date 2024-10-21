// "use client"

// import React, { useState } from 'react';

// const ProductSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div className="px-4 py-3">
//       <label className="flex flex-col min-w-40 h-12 w-full">
//         <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
//           <div
//             className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0"
//             data-icon="MagnifyingGlass"
//             data-size="24px"
//             data-weight="regular"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
//             </svg>
//           </div>
//           <input
//             placeholder="Search for products by name..."
//             className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             type='text'
//           />
//         </div>
//       </label>
//     </div>
//   );
// };

// export default ProductSearch;

"use client"

import React, { useState } from 'react';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex items-center px-4 py-3">
      <div className="flex w-1/2"> 
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>

              </svg>
            </div>

            <input
              placeholder="Search for products by name..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
            />
          </div>
        </label>
      </div>
      <form action="">
      <div className="flex flex-row mx-8 space-y-2 w-1/2"> 
        <div className="flex w-full mx-8">
          <select className="rounded-xl px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="grains-and-cereals">Grains and Cereals</option>
            <option value="dried-legumes">Dried Legumes</option>
            <option value="herbs-and-spices">Herbs and Spices</option>
            <option value="nuts-and-seeds">Nuts and Seeds</option>
            <option value="edible-flowers">Edible Flowers</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex w-full mx-8">
          <select className="rounded-xl px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">All Countries</option>
            <option value="argentina">Argentina</option>
            <option value="colombia">Colombia</option>
            <option value="peru">Perú</option>
          </select>
        </div>
        <div className="flex w-full mx-8">
          <select className="rounded-xl px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">Crop Type</option>
            <option value="Conventional">Conventional</option>
            <option value="Organic">Organic</option>
          </select>
        </div>
      </div>
      </form>
    </div>
  );
};

export default ProductSearch;