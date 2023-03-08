import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};
export default MainLayout;