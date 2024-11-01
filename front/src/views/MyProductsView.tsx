"use client";
import React, { useEffect, useState } from "react";
import MyProductList from "../components/MyProductsList";
import { IAgriProduct, ISettingsUserProps } from "@/interface/types";
import { getCategories, getCompanyProducts } from "@/server/getProduct";
import { useUserStore } from "@/store/useUserStore";
import { getUserSettings } from "@/server/getUserSettings";

const MyProductsView: React.FC = () => {
  const [productsArray, setProductsArray] = useState<IAgriProduct[]>([]);
  const [userCompanies, setUserCompanies] = useState<{ company_id: string; company_name: string }[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token, user_id } = useUserStore();

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        if (token && user_id) {
          const userData: ISettingsUserProps = await getUserSettings(user_id, token);

          const validCompanies = (userData.companies || [])
            .filter((company): company is { company_id: string; company_name: string } =>
              company.company_id !== undefined && company.company_name !== undefined
            )
            .map((company) => ({
              company_id: company.company_id as string,
              company_name: company.company_name as string,
            }));

          setUserCompanies(validCompanies);

          if (validCompanies.length > 0) {
            setSelectedCompany(validCompanies[0].company_id);
            const products = await getCompanyProducts(validCompanies[0].company_id);
            if (products.length === 0) {
              setError("You currently have no products loaded for this company.");
              setProductsArray([]); // Clear products array explicitly
            } else {
              setProductsArray(products);
              setError(null); // Clear error if products are found
            }
          }
        }
      } catch (err: any) {
        setError("Error loading user settings.");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err: any) {
        setError("Error loading categories.");
      }
    };

    fetchUserSettings();
    fetchCategories();
  }, [token, user_id]);

  const updateProductsArray = (productId: string, newActiveStatus: boolean) => {
    setProductsArray((prevProducts) =>
      prevProducts.map((product) =>
        product.company_product_id === productId
          ? { ...product, isActive: newActiveStatus }
          : product
      )
    );
  };

  const handleCompanyChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const companyId = event.target.value;
    setSelectedCompany(companyId);

    try {
      setIsLoading(true);
      const products = await getCompanyProducts(companyId);
      if (products.length === 0) {
        setError("You currently have no products loaded for this company.");
        setProductsArray([]); // Clear products array explicitly
      } else {
        setProductsArray(products);
        setError(null); // Clear error if products are found
      }
    } catch (err: any) {
      setError("You currently have no products loaded for this company.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 font-inter">
        <h1 className="text-[96px] text-center mb-12 font-inter">My Products</h1>
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 font-inter">
      <h1 className="text-[96px] text-center mb-12 font-inter">My Products</h1>

      {userCompanies.length === 0 ? (
        <div className="text-center text-gray-500">No companies registered</div>
      ) : (
        <div className="mb-4 text-center">
          <label htmlFor="companySelect" className="mr-2">Select Company:</label>
          <select
            id="companySelect"
            value={selectedCompany || ""}
            onChange={handleCompanyChange}
            className="border border-black px-4 py-2"
          >
            {userCompanies.map((company) => (
              <option key={company.company_id} value={company.company_id}>
                {company.company_name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={`${productsArray.length === 0 ? "border border-black w-full h-64" : ""}`}>
        {error ? (
          <div className="text-center text-gray-500">{error}</div>
        ) : (
          productsArray.map((product) => (
            <MyProductList
              key={product.company_product_id}
              {...product}
              onDeleteSuccess={(productId, newActiveStatus) => updateProductsArray(productId, newActiveStatus)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyProductsView;
