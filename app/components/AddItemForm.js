'use client'

import { useState } from 'react'

export default function AddItemForm({ onItemCreated }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)

        try {
            const res = await fetch('api/items', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, description})
            })

            if(!res.ok) {
                throw new Error('Failed to create item')
            }

            const newItem = await res.json()

            setTitle('')
            setDescription('')

            onItemCreated(newItem)
        } catch(err) {
            console.error(err)
            alert('Error creating item')
        } finally {
            setLoading(false)
        }
    }

    return (
            <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
                <h2>Add Item</h2>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '8px'}}
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '8px'}}
                />

                <button type="submit" disabled={loading}>
                   {loading ? 'Creating...' : 'Create Item'}
                </button>
            </form>
        )
}