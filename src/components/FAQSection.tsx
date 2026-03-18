"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "How do I book a property?",
    answer: "You can book directly through our website or mobile app. Simply select your destination, dates, and number of guests to see available properties."
  },
  {
    id: "item-2",
    question: "What are the check-in and check-out times?",
    answer: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request."
  },
  {
    id: "item-3",
    question: "Is there a cancellation policy?",
    answer: "Yes, each property has its own cancellation policy which is clearly displayed during the booking process."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 container mx-auto px-4 max-w-4xl">
      <h2 className="text-4xl font-bold text-[#1A2B4C] text-center mb-16 uppercase tracking-widest">FAQS</h2>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.id} value={faq.id} className="border rounded-2xl px-6 bg-white">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-300">0{index + 1}</span>
                <span className="text-lg font-bold text-[#1A2B4C]">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 pb-6 pl-10">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;