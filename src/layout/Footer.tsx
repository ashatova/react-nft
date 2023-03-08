import React from "react";

import {currentYear} from "../utils/dates";

const Footer = () => {
    return (
        <footer className="border-t-2 p-4 text-center">
            <span className="text-sm text-gray-500">
                © {currentYear} NFT. All Rights Reserved.
            </span>
        </footer>
    );
};
export default Footer;