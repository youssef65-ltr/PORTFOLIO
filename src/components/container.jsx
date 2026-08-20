import "../styles/container.css"

export default function Container({parent}) {
    return (
        <div className="container">
            <div className="content">
                {parent}
            </div>
        </div>
    )
}