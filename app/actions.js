'use server'

import { revalidatePath } from "next/cache"

export async function createItem(formData) {
    const title = formData.get('title')
    const description = formData.get('description')

    await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, description })
    })

    revalidatePath('/')
}