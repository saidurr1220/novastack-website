const TeamCard = ({ name, role, bio }) => {
    return (
        <article className="card card--team">
            <div
                className="card__avatar-placeholder"
                aria-hidden="true"
            />
            <h3>{name}</h3>
            <p className="card__role">{role}</p>
            <p>{bio}</p>
        </article>
    );
};

export default TeamCard;
