import { type ComponentProps, type FC } from "react";

import { TabsList as UiTabsList, TabsTrigger as UiTabsTrigger } from "../ui/tabs";
import { cn } from "@/lib/utils";

export {
  Tabs as Tabs,
  TabsContent as TabsContent,
} from "../ui/tabs";

export const TabsList: FC<ComponentProps<typeof UiTabsList>> = ({ className, ...props }) => {
  return (
    <UiTabsList className={cn("gap-2 p-1 h-auto bg-muted/50 rounded-2xl backdrop-blur-sm", className)} {...props} />
  );
};
export const TabsTrigger: FC<ComponentProps<typeof UiTabsTrigger>> = ({ className, ...props }) => {
  return (
    <UiTabsTrigger
      className={cn([
        "px-6 py-3 text-lg text-muted-foreground rounded-xl border-0 transition-all hover:text-foreground",
        "hover:bg-slate-200/70 data-[state=active]:text-foreground data-[state=active]:bg-gradient-to-r",
        "data-[state=active]:from-amber-400 data-[state=active]:to-amber-200 data-[state=active]:shadow-lg",
        "dark:hover:text-foreground dark:hover:bg-slate-700/70 dark:data-[state=active]:text-foreground",
        "dark:data-[state=active]:bg-gradient-to-r dark:data-[state=active]:from-amber-600",
        "dark:data-[state=active]:to-amber-800",
      ], className)}
      {...props}
    />
  );
};
