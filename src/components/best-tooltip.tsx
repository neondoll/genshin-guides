import type { FC } from "react";

import { Spotlight } from "./ui/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const BestTooltip: FC<{ className?: string; value?: boolean | string }> = ({ className, value }) => {
  return value && (
    <Tooltip>
      <TooltipTrigger asChild>
        <Spotlight className={className} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{typeof value === "string" ? value : "Является лучшим выбором"}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default BestTooltip;
