import { type FC, type ReactNode, type RefObject, useCallback, useEffect, useRef } from "react";

import { Table } from "../ui/table";
import { cn } from "@/lib/utils";

export interface CellBackgroundConfig {
  columnIndex?: number;
  rowIndex: number;
  className?: string;
  backgroundColor: string;
}

interface CellBackgroundOverlayProps {
  cellBackgrounds: CellBackgroundConfig[];
  containerRef: RefObject<HTMLDivElement>;
}

interface GradientConfig {
  columnIndex?: number;
  headerText?: string;
  className?: string;
  gradientClass: string; // например: 'from-green-500 to-yellow-500'
  opacity?: string; // например: 'opacity-20'
  direction?: "bg-linear-to-b" | "bg-linear-to-r"; // по умолчанию to-b
}

interface GradientOverlayProps {
  containerRef: RefObject<HTMLDivElement>;
  gradient: GradientConfig;
  index: number;
}

interface GradientTableProps {
  cellBackgrounds?: CellBackgroundConfig[];
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  gradients: GradientConfig[];
}

// Компонент для одного градиентного оверлея
const GradientOverlay: FC<GradientOverlayProps> = ({ containerRef, gradient, index }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    const table = container.querySelector("table");
    const tbody = table?.querySelector("tbody");
    if (!table || !tbody) return;

    let targetCell: HTMLTableCellElement | null = null;

    if (gradient.className) {
      targetCell = tbody.querySelector(`td.${gradient.className}`);
    }
    else if (gradient.columnIndex) {
      targetCell = tbody.querySelector(`td:nth-child(${gradient.columnIndex})`);
    }
    else if (gradient.headerText) {
      const headers = table.querySelectorAll("thead th");
      let colIndex = -1;
      headers.forEach((th, i) => {
        if (th.textContent?.trim() === gradient.headerText) {
          colIndex = i + 1;
        }
      });
      if (colIndex !== -1) {
        targetCell = tbody.querySelector(`td:nth-child(${colIndex})`);
      }
    }

    if (!targetCell) {
      overlay.style.display = "none";
      return;
    }

    overlay.style.display = "";

    const containerRect = container.getBoundingClientRect();
    const cellRect = targetCell.getBoundingClientRect();
    const tbodyRect = tbody.getBoundingClientRect();

    // Простая формула: начинаем от начала tbody, высота = высота tbody
    const left = cellRect.left - containerRect.left;
    const width = cellRect.width;
    const top = tbodyRect.top - containerRect.top;
    const height = tbodyRect.height;

    overlay.style.left = `${left}px`;
    overlay.style.width = `${width}px`;
    overlay.style.top = `${top}px`;
    overlay.style.height = `${height}px`;
  }, [containerRef, gradient]);

  useEffect(() => {
    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);
    const container = containerRef.current;

    if (container) {
      resizeObserver.observe(container);

      const table = container.querySelector("table");
      if (table) {
        resizeObserver.observe(table);

        const thead = table.querySelector("thead");
        if (thead) resizeObserver.observe(thead);

        const tbody = table.querySelector("tbody");
        if (tbody) resizeObserver.observe(tbody);
      }
    }

    window.addEventListener("resize", updatePosition);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, [updatePosition, containerRef]);

  return (
    <div
      className={cn(
        "absolute pointer-events-none transition-all duration-200",
        gradient.direction || "bg-linear-to-b",
        gradient.gradientClass,
        gradient.opacity || "opacity-100",
      )}
      data-gradient-index={index}
      ref={overlayRef}
      style={{ zIndex: 0 }}
    />
  );
};
const CellBackgroundOverlay: FC<CellBackgroundOverlayProps> = ({ cellBackgrounds, containerRef }) => {
  const cellsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  const updatePositions = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const table = container.querySelector("table");
    const tbody = table?.querySelector("tbody");
    if (!table || !tbody) return;

    const containerRect = container.getBoundingClientRect();

    cellBackgrounds.forEach((config, index) => {
      const key = `cell-bg-${index}`;
      let overlay = cellsRef.current.get(key);

      if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "absolute pointer-events-none";
        overlay.style.zIndex = "0";
        overlay.setAttribute("data-cell-bg-index", String(index));
        container.appendChild(overlay);
        cellsRef.current.set(key, overlay);
      }

      let targetCell: HTMLTableCellElement | null = null;

      // Находим нужную ячейку
      const rows = tbody.querySelectorAll("tr");
      if (config.rowIndex < rows.length) {
        const row = rows[config.rowIndex];
        if (config.columnIndex) {
          targetCell = row.querySelector(`td:nth-child(${config.columnIndex})`);
        }
        else if (config.className) {
          targetCell = row.querySelector(`td.${config.className}`);
        }
      }

      if (targetCell) {
        const cellRect = targetCell.getBoundingClientRect();
        overlay.style.display = "";
        overlay.style.left = `${cellRect.left - containerRect.left}px`;
        overlay.style.top = `${cellRect.top - containerRect.top}px`;
        overlay.style.width = `${cellRect.width}px`;
        overlay.style.height = `${cellRect.height}px`;
        overlay.style.backgroundColor = config.backgroundColor;
      }
      else {
        overlay.style.display = "none";
      }
    });

    // Удаляем неиспользуемые оверлеи
    cellsRef.current.forEach((overlay, key) => {
      const index = parseInt(key.replace("cell-bg-", ""));
      if (index >= cellBackgrounds.length) {
        overlay.remove();
        cellsRef.current.delete(key);
      }
    });
  }, [containerRef, cellBackgrounds]);

  useEffect(() => {
    updatePositions();

    const resizeObserver = new ResizeObserver(updatePositions);
    const container = containerRef.current;

    if (container) {
      resizeObserver.observe(container);

      const table = container.querySelector("table");
      if (table) resizeObserver.observe(table);
    }

    window.addEventListener("resize", updatePositions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePositions);

      // Очищаем все оверлеи
      cellsRef.current.forEach(overlay => overlay.remove());
      cellsRef.current.clear();
    };
  }, [updatePositions, containerRef]);

  return null; // Оверлеи создаются динамически
};
// Основной компонент таблицы
export const GradientTable: FC<GradientTableProps> = ({
  cellBackgrounds = [],
  children,
  className,
  containerClassName,
  gradients,
}) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <Table
      children={children}
      childrenAfterTable={(
        <>
          {gradients.map((gradient, index) => (
            <GradientOverlay
              containerRef={containerRef}
              gradient={gradient}
              index={index}
              key={`gradient-${index}-${gradient.gradientClass}`}
            />
          ))}
          <CellBackgroundOverlay cellBackgrounds={cellBackgrounds} containerRef={containerRef} />
          <style>
            {`
            .gradient-table-container { isolation: isolate }
            .gradient-table-container table { position: relative; z-index: 1 }
            .gradient-table-container thead th { border-bottom: 1px solid var(--border) }
            .gradient-table-container tbody td,
            .gradient-table-container tbody th { position: relative; z-index: 2; background-clip: padding-box }
            .gradient-table-container tbody tr { position: relative; z-index: 1 }
            .gradient-table-container tbody tr.border-b td { border-bottom: 1px solid var(--border) }
            .gradient-table-container tbody.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child td { border-bottom: none }
            .gradient-table-container tbody tr:hover { z-index: 3 }
            `}
          </style>
        </>
      )}
      className={className}
      containerClassName={cn("gradient-table-container relative inline-block", containerClassName)}
      containerRef={containerRef}
      containerStyle={{ isolation: "isolate" }}
      style={{ position: "relative", zIndex: 1, borderCollapse: "separate", borderSpacing: "0" }}
    />
  );
};
