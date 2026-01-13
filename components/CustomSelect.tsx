"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    id: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

export default function CustomSelect({ id, options, value, onChange, placeholder }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => { 
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                className={`w-full px-4 py-3 text-left rounded border transition flex justify-between items-center ${isOpen ? "border-primary ring-1 ring-primary" : "border-gray-300"
                    } bg-white outline-none`}
                onClick={() => setIsOpen(!isOpen)}
                id={id}
            >
                <span className={`block ${selectedOption ? "text-gray-600" : "text-gray-400"}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base border border-gray-300 overflow-auto focus:outline-none sm:text-sm">
                    <li
                        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 hidden"

                    >
                        {/* Placeholder item option if needed, usually just hidden or handled by empty state */}
                    </li>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`cursor-pointer select-none relative py-2 pl-4 pr-9 ${option.value === value ? "text-primary bg-primary-light font-medium" : "text-gray-900 hover:bg-gray-100"
                                }`}
                            onClick={() => handleSelect(option.value)}
                        >
                            <span className="block">{option.label}</span>
                            {option.value === value && (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary">
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
