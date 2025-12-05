const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p>
                    © {new Date().getFullYear()} NovaStack Technologies. All rights
                    reserved.
                </p>
                <p className="footer__secondary">
                    Building reliable, modern web platforms for ambitious teams.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
