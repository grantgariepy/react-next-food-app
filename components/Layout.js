import Footer from "./Footer";
import Navbar from "./Navbar";



const Layout = ({ children }) => {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
            </style>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
