import React from "react";

import Logo from "../components/Logo";

const Header = () => {
    return (
        <header className="border-b-2 text-gray-600">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Logo/>
                <nav className="align-right ml-8 font-bold">
                    <a href="/">Home page</a>
                </nav>
            </div>
        </header>
    );
};
export default Header;