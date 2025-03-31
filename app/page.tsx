import React from "react";
import Link from "next/link";
import { fetchImages } from "./utils/api";
import translations from "@/locales/en.json"; 


export default async function Home() {
  const images = await fetchImages();

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold">{translations.home_title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {images.map((image) => (
          <Link key={image.id} href={`/products/${image.id}`}>
            <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition">
              <img src={image.image} alt={image.title} className="w-full h-60 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
