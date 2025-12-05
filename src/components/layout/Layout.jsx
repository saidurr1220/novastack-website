import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="app-shell">
            <Navbar />
            <main className="app-shell__content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
