import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps, type FC } from "react";

import { cn } from "@/lib/utils";

interface FilterCheckboxProps extends Pick<ComponentProps<"input">, "checked" | "name" | "onChange" | "value">, Pick<ComponentProps<"span">, "children" | "className" | "style"> {
  asChild?: boolean;
}

interface FilterGroupProps extends ComponentProps<"div"> {
  label: string;
}

export const Filter: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return <div className={cn("grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 pb-4 border-b", className)} {...props} />;
};
export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  asChild,
  checked,
  children,
  className,
  name,
  onChange,
  style,
  value,
}) => {
  const Comp = asChild ? Slot : "span";

  return (
    <label className="relative shrink-0 select-none group">
      <input
        checked={checked}
        className="absolute -z-1 size-0 opacity-0"
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <Comp
        children={children}
        className={cn([
          "block text-card-foreground bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border",
          "border-slate-300 shadow-xl transition-all cursor-pointer group-hover:scale-125",
          "group-has-[input:focus-visible]:ring-3 group-has-[input:focus-visible]:ring-ring/50",
          "group-has-[input:checked]:border-amber-500/30 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700",
        ], className)}
        style={style}
      />
    </label>
  );
};
export const FilterGroup: FC<FilterGroupProps> = ({ children, className, label, ...props }) => {
  return (
    <div className={cn("grid grid-cols-subgrid col-span-full items-center", className)} {...props}>
      <p children={label} />
      {children}
    </div>
  );
};
