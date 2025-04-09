import Link from 'next/link';
import React from 'react';

const GoBackButton = () => {
    return (
        <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 bg-white shadow-md hover:shadow-xl rounded-2xl px-4 py-2 transition-all duration-200 hover:-translate-y-0.5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
            </svg>
            Go Back
        </Link>
    );
};

export default GoBackButton;
