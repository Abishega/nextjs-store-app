import React from "react";
import { fetchCoffee } from "../../utils/api";
import Image from "next/image";
import Link from "next/link";


export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ProductContent id={params.id} />
    </React.Suspense>
  );
}

async function ProductContent({ id }: { id: string }) {
  const coffee = await fetchCoffee(id); 

  if (!coffee) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  return (
    <>
      <meta name="description" content={coffee.description} />
      <meta property="og:title" content={coffee.title} />
      <meta property="og:description" content={coffee.description} />
      <meta property="og:image" content={coffee.image} />
      <div className="p-10 flex flex-col items-center">
        <Image src={coffee.image} alt={coffee.title} width={500} height={500} priority />
        <h1 className="text-2xl font-bold mt-4">{coffee.title}</h1>
        <p className="text-gray-600 mt-2">{coffee.description}</p>
        <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </>
  );
}
