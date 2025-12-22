import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import type { ComponentProps } from "react";

import { Check, ChevronRight, Circle } from "./icons";
import { cn } from "@/lib/utils";

interface DropdownMenuItemProps extends ComponentProps<typeof Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

interface DropdownMenuSubTriggerProps extends ComponentProps<typeof SubTrigger> {
  inset?: boolean;
}

type DropdownMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>;

export function DropdownMenu({ ...props }: ComponentProps<typeof Root>) {
  return <Root data-slot="dropdown-menu" {...props} />;
}

export function DropdownMenuCheckboxItem({ checked, children, className, ...props }: DropdownMenuCheckboxItemProps) {
  return (
    <CheckboxItem
      checked={checked}
      className={cn([
        "flex relative gap-2 items-center py-1.5 pr-2 pl-8 text-sm rounded-sm outline-hidden cursor-default",
        "select-none focus:text-accent-foreground focus:bg-accent data-[disabled]:opacity-50",
        "data-[disabled]:pointer-events-none [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
        className,
      ])}
      data-slot="dropdown-menu-checkbox-item"
      {...props}
    >
      <span className="flex absolute left-2 justify-center items-center size-3.5 pointer-events-none">
        <ItemIndicator>
          <Check className="size-4" />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  );
}

export function DropdownMenuContent({ className, sideOffset = 4, ...props }: ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        className={cn([
          "overflow-x-hidden overflow-y-auto z-50 p-1 min-w-[8rem]",
          "max-h-(--radix-dropdown-menu-content-available-height) text-popover-foreground bg-popover rounded-md border",
          "shadow-md origin-(--radix-dropdown-menu-content-transform-origin) data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0",
          "data-[state=open]:zoom-in-95",
          className,
        ])}
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  );
}

export function DropdownMenuGroup({ ...props }: ComponentProps<typeof Group>) {
  return <Group data-slot="dropdown-menu-group" {...props} />;
}

export function DropdownMenuItem({ className, inset, variant = "default", ...props }: DropdownMenuItemProps) {
  return (
    <Item
      className={cn([
        "flex relative gap-2 items-center px-2 py-1.5 text-sm rounded-sm outline-hidden cursor-default select-none",
        "focus:text-accent-foreground focus:bg-accent data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
        "data-[inset]:pl-8 data-[variant=destructive]:text-destructive",
        "data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:focus:bg-destructive/10",
        "data-[variant=destructive]:*:[svg]:!text-destructive [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        "dark:data-[variant=destructive]:focus:bg-destructive/20",
        className,
      ])}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    />
  );
}

export function DropdownMenuLabel({ className, inset, ...props }: ComponentProps<typeof Label> & { inset?: boolean }) {
  return (
    <Label
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

export function DropdownMenuPortal({ ...props }: ComponentProps<typeof Portal>) {
  return <Portal data-slot="dropdown-menu-portal" {...props} />;
}

export function DropdownMenuTrigger({ ...props }: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

export function DropdownMenuRadioGroup({ ...props }: ComponentProps<typeof RadioGroup>) {
  return <RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

export function DropdownMenuRadioItem({ children, className, ...props }: ComponentProps<typeof RadioItem>) {
  return (
    <RadioItem
      className={cn([
        "flex relative gap-2 items-center py-1.5 pr-2 pl-8 text-sm rounded-sm outline-hidden cursor-default",
        "select-none focus:text-accent-foreground focus:bg-accent data-[disabled]:opacity-50",
        "data-[disabled]:pointer-events-none [&_svg]:shrink-0 [&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
        className,
      ])}
      data-slot="dropdown-menu-radio-item"
      {...props}
    >
      <span className="flex absolute left-2 justify-center items-center size-3.5 pointer-events-none">
        <ItemIndicator>
          <Circle className="size-2 fill-current" />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  );
}

export function DropdownMenuSeparator({ className, ...props }: ComponentProps<typeof Separator>) {
  return (
    <Separator className={cn("-mx-1 my-1 h-px bg-border", className)} data-slot="dropdown-menu-separator" {...props} />
  );
}

export function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      data-slot="dropdown-menu-shortcut"
      {...props}
    />
  );
}

export function DropdownMenuSub({ ...props }: ComponentProps<typeof Sub>) {
  return <Sub data-slot="dropdown-menu-sub" {...props} />;
}

export function DropdownMenuSubContent({ className, ...props }: ComponentProps<typeof SubContent>) {
  return (
    <SubContent
      className={cn([
        "overflow-hidden z-50 p-1 min-w-[8rem] text-popover-foreground bg-popover rounded-md border shadow-lg",
        "origin-(--radix-dropdown-menu-content-transform-origin) data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=open]:zoom-in-95",
        className,
      ])}
      data-slot="dropdown-menu-sub-content"
      {...props}
    />
  );
}

export function DropdownMenuSubTrigger({ children, className, inset, ...props }: DropdownMenuSubTriggerProps) {
  return (
    <SubTrigger
      className={cn([
        "flex gap-2 items-center px-2 py-1.5 text-sm rounded-sm outline-hidden cursor-default select-none",
        "focus:text-accent-foreground focus:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground",
        "data-[state=open]:bg-accent [&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        "[&_svg:not([class*='text-'])]:text-muted-foreground",
        className,
      ])}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </SubTrigger>
  );
}
