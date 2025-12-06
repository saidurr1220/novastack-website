const Button = ({ children, type = "button", onClick, disabled = false }) => {
    return (
        <button type={type} className="btn" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
