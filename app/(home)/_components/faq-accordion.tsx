import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fakerFAQ } from "@/config/faker";

export const FAQ_Accordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="grid w-full md:grid-cols-2 md:gap-8"
    >
      {/* Col */}
      <div className="flex w-full flex-col">
        {fakerFAQ?.slice(0, 6)?.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id.toString()}
            className="border border-b-0 md:last:border-b"
          >
            <AccordionTrigger className="px-4 py-3 text-sm hover:no-underline md:text-base [&[data-state=open]]:bg-primary [&[data-state=open]]:text-white">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-t px-4 pt-4">
                <p className="text-sm opacity-80">{item.answer}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>

      {/* Col */}
      <div className="flex w-full flex-col">
        {fakerFAQ?.slice(6, 12)?.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id.toString()}
            className="border border-b-0 last:border-b"
          >
            <AccordionTrigger className="px-4 py-3 text-sm hover:no-underline md:text-base [&[data-state=open]]:bg-primary [&[data-state=open]]:text-white">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-t px-4 pt-4">
                <p className="text-sm opacity-80">{item.answer}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
};
