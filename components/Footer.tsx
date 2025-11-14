
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111111] border-t-2 border-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-sm text-neutral-500">
                    &copy; {new Date().getFullYear()} Interview Success Blueprint MY. All Rights Reserved. Not a get-rich-quick scheme. Just solid career advice.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
