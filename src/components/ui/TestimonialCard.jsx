const TestimonialCard = ({ quote, name, role }) => {
    return (
        <figure className="card card--testimonial">
            <blockquote>“{quote}”</blockquote>
            <figcaption>
                <p className="card__name">{name}</p>
                <p className="card__role">{role}</p>
            </figcaption>
        </figure>
    );
};

export default TestimonialCard;
