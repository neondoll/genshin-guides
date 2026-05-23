import { type ComponentProps, type CSSProperties, type ReactNode, type Ref } from "react";

import { cn } from "@/lib/utils";

export function Table({
  childrenAfterTable,
  childrenBeforeTable,
  className,
  containerClassName,
  containerRef,
  containerStyle,
  ...props
}: ComponentProps<"table"> & {
  childrenAfterTable?: ReactNode;
  childrenBeforeTable?: ReactNode;
  containerClassName?: string;
  containerRef?: Ref<HTMLDivElement>;
  containerStyle?: CSSProperties;
}) {
  return (
    <div
      className={cn("overflow-x-auto relative w-full", containerClassName)}
      data-slot="table-container"
      ref={containerRef}
      style={containerStyle}
    >
      {childrenBeforeTable}
      <table className={cn("w-full text-sm caption-bottom", className)} data-slot="table" {...props} />
      {childrenAfterTable}
    </div>
  );
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} data-slot="table-body" {...props} />;
}

export function TableCaption({ className, ...props }: ComponentProps<"caption">) {
  return (
    <caption className={cn("mt-4 text-sm text-muted-foreground", className)} data-slot="table-caption" {...props} />
  );
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
        className,
      )}
      data-slot="table-cell"
      {...props}
    />
  );
}

export function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
  return (
    <tfoot
      className={cn("font-medium bg-muted/50 border-t [&>tr]:last:border-b-0", className)}
      data-slot="table-footer"
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "px-2 h-10 font-medium text-left text-foreground align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        "[&>[role=checkbox]]:translate-y-0.5",
        className,
      )}
      data-slot="table-head"
      {...props}
    />
  );
}

export function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return <thead className={cn("[&_tr]:border-b", className)} data-slot="table-header" {...props} />;
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
      data-slot="table-row"
      {...props}
    />
  );
}
