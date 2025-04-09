'use client';

import GoBackButton from '@/components/GoBackButton';
import { useState } from 'react';

export default function MathHelperPage() {
    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(1);

    const fits = Math.floor(b / a);
    const remainder = b % a;
    const ratio = a !== 0 ? (b / a).toFixed(4) : '∞';
    const percentage = a !== 0 ? ((a / b) * 100).toFixed(2) : '∞';

    return (
        <main className="min-h-screen bg-gradient-to-b from-green-100 to-white px-4 py-10">
            <GoBackButton />
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    📐 Math Helper Tools
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Enter value A
                        </label>
                        <input
                            type="number"
                            value={a}
                            onChange={(e) => setA(Number(e.target.value))}
                            className="w-full border border-green-500 rounded-2xl px-4 py-2 text-lg"
                            placeholder="e.g. 3"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Enter value B
                        </label>
                        <input
                            type="number"
                            value={b}
                            onChange={(e) => setB(Number(e.target.value))}
                            className="w-full border border-green-500 rounded-2xl px-4 py-2 text-lg"
                            placeholder="e.g. 10"
                        />
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-2xl mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-green-800">
                        Results
                    </h2>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li>
                            🔁 <strong>{a}</strong> fits into{' '}
                            <strong>{b}</strong> exactly <strong>{fits}</strong>{' '}
                            times
                            {remainder !== 0 &&
                                ` with a remainder of ${remainder}`}
                            .
                        </li>
                        <li>
                            📊 Ratio (B ÷ A): <strong>{ratio}</strong>
                        </li>
                        <li>
                            📈 A is <strong>{percentage}%</strong> of B
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-4 rounded-2xl text-sm text-gray-600 leading-relaxed">
                    <h3 className="font-semibold mb-1">How does this work?</h3>
                    <p>
                        - To find how many times A fits into B, we divide B by A
                        and take the whole number part.
                        <br />- The remainder is what’s left after this full
                        division:{' '}
                        <code>
                            {b} % {a} = {remainder}
                        </code>
                        .
                        <br />- Ratio shows how many A&apos;s make up a B:{' '}
                        <code>
                            {b} ÷ {a} = {ratio}
                        </code>
                        .
                        <br />- Percentage shows what portion of B is A:{' '}
                        <code>
                            ({a} / {b}) × 100 = {percentage}%
                        </code>
                        .
                    </p>
                </div>
            </div>
        </main>
    );
}
