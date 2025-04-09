import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-3 mt-auto">
            <div className="max-w-3xl mx-auto px-4">
                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} SmartCalc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
