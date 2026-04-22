import ItemCard from "./components/ItemCard";

async function getItems() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch items")
  }

  return res.json()
}

export default async function Home() {

  const items = await getItems()

  return (
    <main style={{ padding: "24px" }}>
      <h1>My Items</h1>
      {items.map((item) => (
        <ItemCard
        key={item.id}
        title={item.title}
        description={item.description}
        />
      ))}
    </main>
  );
}
