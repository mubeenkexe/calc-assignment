import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'SmartCalc — Time, Date & Math Tools',
    description:
        'SmartCalc is a modern, multi-tool web app that helps you convert time, calculate dates, and solve quick math problems — all in one place.',
    keywords: [
        'Time converter',
        'Date calculator',
        'Math helper',
        'How many times A fits into B',
        'Convert seconds to minutes',
        'Calculate date difference',
        'Smart calculator',
    ],
    authors: [{ name: 'Mubeen K', url: 'https://github.com/mubeenkexe' }],
    creator: 'SmartCalc Team',
    openGraph: {
        title: 'SmartCalc — Time, Date & Math Tools',
        description:
            'Convert time, calculate date differences, and solve math with ease using SmartCalc.',
        url: 'https://your-site.com',
        siteName: 'SmartCalc',
        images: [
            {
                url: 'https://your-site.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SmartCalc Preview Image',
            },
        ],
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
