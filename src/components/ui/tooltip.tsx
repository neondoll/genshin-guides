import { Arrow, Content, Portal, Provider, Root, Trigger } from "@radix-ui/react-tooltip";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Tooltip({ ...props }: ComponentProps<typeof Root>) {
  return (
    <TooltipProvider>
      <Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

export function TooltipContent({ children, className, sideOffset = 0, ...props }: ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        className={cn([
          "z-50 px-3 py-1.5 w-fit text-xs text-background text-balance bg-foreground rounded-md",
          "origin-(--radix-tooltip-content-transform-origin) animate-in fade-in-0 zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className,
        ])}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        <Arrow
          className="z-50 size-2.5 bg-foreground rounded-[2px] rotate-45 translate-y-[calc(-50%_-_2px)] fill-foreground"
        />
      </Content>
    </Portal>
  );
}

export function TooltipProvider({ children, delayDuration = 0, ...props }: ComponentProps<typeof Provider>) {
  return <Provider children={children} data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />;
}

export function TooltipTrigger({ ...props }: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="tooltip-trigger" {...props} />;
}
