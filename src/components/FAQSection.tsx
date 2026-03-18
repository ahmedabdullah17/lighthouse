"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from 'lucide-react';

const faqs = [
  {
    id: "item-1",
    question: "How do I book a property?",
    answer: "You can book directly through our website or mobile app. Simply select your destination, dates, and number of guests to see available properties. Our real-time availability ensures you get the best options instantly."
  },
  {
    id: "item-2",
    question: "What are the check-in and check-out times?",
    answer: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, depending on property availability and cleaning schedules."
  },
  {
    id: "item-3",
    question: "Is there a cancellation policy?",
    answer: "Yes, each property has its own cancellation policy which is clearly displayed during the booking process. Generally, we offer flexible options for cancellations made at least 7 days in advance."
  },
  {
    id: "item-4",
    question: "Do you provide concierge services?",
    answer: "Absolutely. Lighthouse offers premium concierge services including private chefs, airport transfers, and local tour bookings to ensure your stay is nothing short of extraordinary."
  }
];

const FAQSection = () => {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Support</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id} 
              className="border-none rounded-[2rem] px-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-8 group">
                <div className="flex items-center gap-6 text-left">
                  <span className="text-sm font-black text-secondary/40 group-hover:text-secondary transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-black text-primary group-data-[state=open]:text-secondary transition-colors">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-lg leading-relaxed pb-8 pl-14">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;