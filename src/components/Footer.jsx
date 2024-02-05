export default function Footer() {
    const d = new Date()
    let year = d.getFullYear()

    return (
        <footer className="my-10">
            <p>{year}</p>
        </footer>
    )
}