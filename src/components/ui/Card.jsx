const Card = ({ title, description, children }) => {
    return (
        <article className="card">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
            {children}
        </article>
    );
};

export default Card;
