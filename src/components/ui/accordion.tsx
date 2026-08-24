"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "@primeicons/react";
import { AccordionContentProps, AccordionPanelProps, AccordionRootProps, AccordionTriggerProps } from "primereact/accordion";
import { Accordion as PRAccordion } from "primereact/accordion";
import * as React from "react";

function Accordion({ className, ...props }: AccordionRootProps) {
  return <PRAccordion.Root className={cn("", className)} motionProps={{ hideStrategy: "none" }} {...props} />;
}

function AccordionPanel({ className, ...props }: AccordionPanelProps) {
  return <PRAccordion.Panel className={cn("flex flex-col border-b border-surface-200 dark:border-surface-700", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <PRAccordion.Header>
      <PRAccordion.Trigger
        className={cn(
          `cursor-pointer disabled:pointer-events-none disabled:opacity-60 flex items-center justify-between p-4 font-semibold w-full
        bg-surface-0 dark:bg-surface-900
        text-surface-500 dark:text-surface-400 text-sm
        hover:text-surface-700 dark:hover:text-surface-0
        data-content-open:text-surface-700 dark:data-content-open:text-surface-0
        transition-colors duration-200
        focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary`,
          className,
        )}
        {...props}
      >
        {children}
        <PRAccordion.Indicator match="open">
          <ChevronUp />
        </PRAccordion.Indicator>

        <PRAccordion.Indicator match="closed">
          <ChevronDown />
        </PRAccordion.Indicator>
      </PRAccordion.Trigger>
    </PRAccordion.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <PRAccordion.Content className={cn("bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 text-sm h-(--px-accordion-content-height) transition-[height] duration-200 ease-out overflow-hidden", className)} {...props}>
      <div className="px-4 pb-4">{children}</div>
    </PRAccordion.Content>
  );
}

export { Accordion, AccordionContent, AccordionPanel, AccordionTrigger };
