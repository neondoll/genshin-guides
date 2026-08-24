"use client";

import { cn } from "@/lib/utils";
import type { MenuTriggerProps } from "@primereact/types/primitive/menu";
import type { NavigationMenuProps } from "@primereact/types/primitive/navigationmenu";
import { Menu as PRMenu } from "primereact/menu";
import { NavigationMenu as PRNavigationMenu } from "primereact/navigationmenu";
import * as React from "react";

function NavigationMenu({ className, ...props }: NavigationMenuProps) {
  return (
    <PRNavigationMenu
      className={cn(
        `flex items-center w-fit gap-0 p-0.5 rounded-lg
                bg-surface-0 dark:bg-surface-950
                border border-surface-200 dark:border-surface-700
                text-surface-700 dark:text-surface-0
                data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch`,
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuTrigger({ className, ...props }: MenuTriggerProps) {
  return (
    <PRMenu.Trigger
      className={cn(
        `inline-flex items-center gap-2 py-1 px-3 rounded-md cursor-pointer
                bg-transparent border-none outline-none
                text-sm font-medium text-surface-700 dark:text-surface-0
                hover:bg-surface-100 dark:hover:bg-surface-800
                hover:text-surface-800 dark:hover:text-surface-0
                focus-visible:bg-surface-100 dark:focus-visible:bg-surface-800
                data-open:bg-surface-100 dark:data-open:bg-surface-800
                data-expanded:bg-surface-100 dark:data-expanded:bg-surface-800
                transition-colors
                disabled:pointer-events-none disabled:opacity-60`,
        className,
      )}
      {...props}
    />
  );
}

export { NavigationMenu, NavigationMenuTrigger };
