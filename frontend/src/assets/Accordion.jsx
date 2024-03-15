import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="border border-neutral-400 rounded-md mb-4">
                    <div
                        className="flex justify-between items-center p-4 cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <svg
                            className={`w-6 h-6 ${openIndex === index ? 'transform rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={openIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                            />
                        </svg>
                    </div>
                    {openIndex === index && (
                        <div className="p-4">
                            <p className="opacity-60 font-extralight">{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
