import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative bg-white/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Instant Conversions
                            </h3>
                            <p className="text-gray-600">
                                Real-time calculations with live previews and
                                immediate results
                            </p>
                        </div>
                    </div>

                    <div className="group relative bg-white/90 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <div className="w-12 h-12 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.81V8.688ZM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062a1.125 1.125 0 0 1-1.683-.977V8.688Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Lightning Fast
                            </h3>
                            <p className="text-gray-600">
                                Optimized algorithms deliver results faster than
                                you can blink
                            </p>
                        </div>
                    </div>

                    <div className="group relative bg-white/90 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-purple-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                100% Accurate
                            </h3>
                            <p className="text-gray-600">
                                Precision-engineered calculations with
                                error-proof validation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
