'use client';

import { useState } from 'react';
import { format, getDaysInMonth, isLeapYear, parseISO } from 'date-fns';
import GoBackButton from '@/components/GoBackButton';

const units = ['days', 'weeks', 'months', 'years'] as const;
type Unit = (typeof units)[number];

export default function DateConversionPage() {
    const [baseDate, setBaseDate] = useState(
        () => new Date().toISOString().split('T')[0]
    );
    const [value, setValue] = useState<number>(1);
    const [fromUnit, setFromUnit] = useState<Unit>('days');
    const [toUnit, setToUnit] = useState<Unit>('weeks');

    const parsedDate = parseISO(baseDate);
    const resultDate = calculateDate(parsedDate, value, fromUnit, toUnit);
    const explanation = getConversionExplanation(
        value,
        fromUnit,
        toUnit,
        parsedDate
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-red-100 to-white py-10 px-4">
            <GoBackButton />
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
                <h1 className="text-3xl font-bold mb-6">
                    📅 Date Unit Converter
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        min={0}
                        className="border rounded-2xl border-red-500 px-4 py-2 text-lg"
                        placeholder="Enter value"
                    />

                    <input
                        type="date"
                        value={baseDate}
                        onChange={(e) => setBaseDate(e.target.value)}
                        className="border rounded-2xl border-red-500 px-4 py-2 text-lg"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value as Unit)}
                        className="w-full border rounded-2xl border-red-500 px-4 py-2 text-lg"
                    >
                        {units.map((u) => (
                            <option key={u} value={u}>
                                From {u}
                            </option>
                        ))}
                    </select>

                    <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value as Unit)}
                        className="w-full border rounded-2xl border-red-500  px-4 py-2 text-lg"
                    >
                        {units.map((u) => (
                            <option key={u} value={u}>
                                To {u}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="bg-red-100 p-4 rounded-2xl mb-4">
                    <p className="font-medium text-gray-700">
                        Converted Value:
                    </p>
                    <p className="text-2xl font-bold mt-2 text-red-800">
                        {resultDate.value.toFixed(4)} {toUnit}
                    </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-2xl text-gray-700 leading-relaxed text-sm">
                    <h2 className="font-semibold mb-2">
                        Conversion Explanation:
                    </h2>
                    <p>{explanation}</p>
                </div>
            </div>
            <div className="mt-8 bg-white px-4 py-8 rounded-2xl shadow">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">
                        How Date Conversion Works
                    </h2>
                    <p className="mb-4 text-lg text-gray-600">
                        This calculator handles date conversions based on
                        calendar-aware calculations, accounting for variable
                        month lengths and leap years.
                    </p>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            • <span className="font-medium">Base Unit:</span>{' '}
                            All conversions use days as the base unit for
                            calculations
                        </p>
                        <p>
                            •{' '}
                            <span className="font-medium">Month Handling:</span>{' '}
                            Uses actual days in the selected month (
                            <code>
                                {getDaysInMonth(new Date(baseDate))} days
                            </code>
                            )
                        </p>
                        <p>
                            •{' '}
                            <span className="font-medium">Year Handling:</span>{' '}
                            Accounts for
                            {isLeapYear(new Date(baseDate)) ? ' ' : ' non-'}leap
                            years in annual calculations
                        </p>
                        <p>
                            •{' '}
                            <span className="font-medium">
                                Conversion Logic:
                            </span>
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                            <li>Weeks: Multiplied/divided by 7 days</li>
                            <li>Months: Based on days in the selected month</li>
                            <li>
                                Years: Uses{' '}
                                {isLeapYear(new Date(baseDate)) ? 366 : 365}{' '}
                                days
                            </li>
                        </ul>
                        <p>
                            • <span className="font-medium">Precision:</span>{' '}
                            Results shown to 4 decimal places for fractional
                            values
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Conversion logic
function calculateDate(
    base: Date,
    value: number,
    from: Unit,
    to: Unit
): { value: number } {
    const days = convertToDays(value, from, base);
    return { value: convertFromDays(days, to, base) };
}

function convertToDays(value: number, unit: Unit, date: Date): number {
    switch (unit) {
        case 'days':
            return value;
        case 'weeks':
            return value * 7;
        case 'months':
            return getDaysInMonth(date) * value;
        case 'years':
            return isLeapYear(date) ? value * 366 : value * 365;
    }
}

function convertFromDays(days: number, unit: Unit, date: Date): number {
    switch (unit) {
        case 'days':
            return days;
        case 'weeks':
            return days / 7;
        case 'months':
            return days / getDaysInMonth(date);
        case 'years':
            return isLeapYear(date) ? days / 366 : days / 365;
    }
}

// Dynamic explanation text
function getConversionExplanation(
    value: number,
    from: Unit,
    to: Unit,
    date: Date
): string {
    const daysInMonth = getDaysInMonth(date);
    const leap = isLeapYear(date);

    if (
        (from === 'days' && to === 'weeks') ||
        (from === 'weeks' && to === 'days')
    ) {
        return `One week is 7 days. ${value} ${from} ${
            from === 'days' ? `÷ 7 = ${value / 7}` : `× 7 = ${value * 7}`
        } ${to}.`;
    }

    if (
        (from === 'days' && to === 'months') ||
        (from === 'months' && to === 'days')
    ) {
        return `The month of ${format(
            date,
            'MMMM yyyy'
        )} has ${daysInMonth} days. So ${
            from === 'days'
                ? `${value} ÷ ${daysInMonth} = ${(value / daysInMonth).toFixed(
                      4
                  )} months`
                : `${value} × ${daysInMonth} = ${value * daysInMonth} days`
        }.`;
    }

    if (
        (from === 'days' && to === 'years') ||
        (from === 'years' && to === 'days')
    ) {
        return `This year is ${
            leap ? 'a leap year (366 days)' : 'not a leap year (365 days)'
        }. So ${
            from === 'days'
                ? `${value} ÷ ${leap ? 366 : 365} = ${(
                      value / (leap ? 366 : 365)
                  ).toFixed(4)} years`
                : `${value} × ${leap ? 366 : 365} = ${
                      value * (leap ? 366 : 365)
                  } days`
        }.`;
    }

    return `Converted ${value} ${from} to ${to} considering the date of ${format(
        date,
        'MMMM do, yyyy'
    )}. The calculation depends on the varying length of months and years.`;
}
