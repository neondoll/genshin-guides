import { type ComponentProps, type FC } from "react";

import { Card as UiCard, CardTitle as UiCardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

export {
  CardAction as CardAction,
  CardContent as CardContent,
  CardDescription as CardDescription,
  CardFooter as CardFooter,
  CardHeader as CardHeader,
} from "../ui/card";

export const Card: FC<ComponentProps<typeof UiCard>> = ({ className, ...props }) => {
  return (
    <UiCard
      className={cn([
        "bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl",
        "dark:from-slate-800 dark:to-slate-900 dark:border-slate-700",
      ], className)}
      {...props}
    />
  );
};
export const CardTitle: FC<ComponentProps<typeof UiCardTitle>> = ({ className, ...props }) => {
  return <UiCardTitle className={cn("text-xl font-bold", className)} {...props} />;
};
