"use client";
// import { useEffect, useState } from "react";
import detailsProductStyles from "../../styles/detailsProduct.module.css";
import getAllProducts from "../../../../getData/getAllProducts";
import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
export default async function SacsADos() {
  const params = useParams();
  const id = params.id;
  // const products = await getAllProducts();
  // const product = products.find((p) => p.product_id === id);

  // ========================================================================================================

  const { data, error } = useSWR(`http://localhost:3000/api/products`, fetcher);
  if (error) return "Failed to load";
  if (!data) return "Loading...";

  const products = data;
  const product = products.find((p) => p.product_id === id);

  console.log("data!!!", product);

  return (
    <>
      <div className={detailsProductStyles.productContainer}>
        <div className={detailsProductStyles.productImage}>
          <img
            src={`${product.largeImage}`}
            // src={isClient ? `${product.largeImage}` :null}
            alt={product.title}
          />
        </div>
        <div className={detailsProductStyles.productTitle}>
          {product.title}
        </div>
        <div className={detailsProductStyles.productPrice}>
          {product.price}€
        </div>
      </div>

      <div className={detailsProductStyles.productDescription}>
        {product.title}
      </div>

      <div className={detailsProductStyles.secureLogo}>
        <img
          src="/images/secure-logo.png"
          height={62}
          width={245}
          alt="secure logo"
        />
      </div>
    </>
  );
}
// ========================================================================================================
