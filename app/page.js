'use client'

import { useEffect, useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ItemCard from "./components/ItemCard";

export default function Home() {

  const [items, setItems] = useState([])

  async function loadItems() {
    const res = await fetch('api/items')
    const data = await res.json()
    setItems(data)
  }

  useEffect(() => {
    loadItems()
  }, [])

  function handleNewItem(item) {
    setItems((prev) => [item, ...prev])
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>My Items</h1>

      <AddItemForm onItemCreated={handleNewItem}/>

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
