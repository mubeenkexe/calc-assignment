'use client';

import GoBackButton from '@/components/GoBackButton';
import { useState } from 'react';

const timeUnits = [
    { label: 'Seconds', value: 'seconds' },
    { label: 'Minutes', value: 'minutes' },
    { label: 'Hours', value: 'hours' },
    { label: 'Days', value: 'days' },
    { label: 'Weeks', value: 'weeks' },
    { label: 'Months', value: 'months' },
    { label: 'Years', value: 'years' },
];

const unitInSeconds: Record<string, number> = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    months: 2629800, // avg month (30.44 days)
    years: 31557600, // avg year (365.25 days)
};

export default function TimeConverterPage() {
    const [inputValue, setInputValue] = useState(1);
    const [inputUnit, setInputUnit] = useState('seconds');

    const seconds = inputValue * unitInSeconds[inputUnit];

    const converted = Object.entries(unitInSeconds).map(
        ([unit, valueInSec]) => ({
            unit,
            value: seconds / valueInSec,
        })
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-10 px-6">
            <GoBackButton />
            <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
                <h1 className="text-3xl font-bold mb-6">🕒 Time Converter</h1>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                        className="w-full sm:w-1/2 border border-blue-500 rounded-2xl px-4 py-2 text-lg"
                        min={0}
                    />
                    <select
                        value={inputUnit}
                        onChange={(e) => setInputUnit(e.target.value)}
                        className="w-full sm:w-1/2 border border-blue-500 rounded-2xl px-4 py-2 text-lg"
                    >
                        {timeUnits.map((unit) => (
                            <option key={unit.value} value={unit.value}>
                                {unit.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {converted.map((c) => (
                        <div
                            key={c.unit}
                            className="bg-gray-100 p-4 rounded-2xl flex justify-between"
                        >
                            <span className="capitalize font-medium">
                                {c.unit}
                            </span>
                            <span>
                                {c.value.toLocaleString(undefined, {
                                    maximumFractionDigits: 6,
                                })}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-8 bg-white    px-4 py-8 rounded-2xl shadow">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">
                        How Time Conversion Works
                    </h2>
                    <p className="mb-4 text-lg text-gray-600">
                        This converter uses standardized time units to calculate
                        equivalent values across different measurements. The
                        base unit is seconds, and all conversions are calculated
                        relative to this base.
                    </p>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            •{' '}
                            <span className="font-medium">
                                From Input Unit:
                            </span>{' '}
                            We first convert your input value to seconds using
                            these ratios:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-2">
                            <li>
                                Minutes: <code>1 = 60 seconds</code>
                            </li>
                            <li>
                                Hours: <code>1 = 3600 seconds</code>
                            </li>
                            <li>
                                Days: <code>1 = 86400 seconds</code>
                            </li>
                            <li>
                                Weeks: <code>1 = 604800 seconds</code>
                            </li>
                        </ul>

                        <p>
                            •{' '}
                            <span className="font-medium">
                                To Output Units:
                            </span>{' '}
                            We then convert from seconds to your target unit
                            using the inverse of these ratios
                        </p>

                        <p>
                            •{' '}
                            <span className="font-medium">
                                Precision Handling:
                            </span>{' '}
                            Values are displayed with up to 6 decimal places,
                            but trailing zeros are automatically removed for
                            cleaner display
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
