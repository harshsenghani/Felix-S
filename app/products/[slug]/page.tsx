import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) =>
    product.relatedProductIds.includes(p.id)
  );

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
