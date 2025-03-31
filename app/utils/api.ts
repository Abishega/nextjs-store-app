export const API_URL = "https://api.sampleapis.com/coffee/hot";


export async function fetchImages() {
  const res = await fetch(API_URL, { next: { revalidate: 10 } }); 
  return res.json();
}


export async function fetchCoffee(id: string) {
     // Use cached data instead of calling API again
  const coffees = await fetchImages();
  return coffees.find((coffee) => coffee.id.toString() === id);
}
