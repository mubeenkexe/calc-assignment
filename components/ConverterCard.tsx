import Link from 'next/link';
import { JSX } from 'react';

export default function ConverterCard({
    title,
    description,
    href,
    icon,
    color,
    bgColor,
    containerBorder,
}: {
    title: string;
    description: string;
    href: string;
    icon: JSX.Element;
    color: string;
    bgColor: string;
    containerBorder?: string;
}) {
    return (
        <Link
            href={href}
            className={`group relative bg-white/90 backdrop-blur-sm border ${containerBorder} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br ${color} to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative">
                <div
                    className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${bgColor}`}
                >
                    {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </Link>
    );
}
