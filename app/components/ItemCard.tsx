export default function ItemCard({ title, description }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "12px"
        }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}