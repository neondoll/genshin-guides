import type { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="text-xl text-amber-300">Загрузка данных...</div>
    </div>
  );
};
export const LoadingError: FC<{ error: string }> = ({ error }) => {
  return (
    <div className="bg-red-900/30 border border-red-700 rounded-2xl p-6 text-center">
      <div className="text-red-300 text-lg mb-2">Ошибка загрузки</div>
      <div className="text-slate-300">{error}</div>
    </div>
  );
};
