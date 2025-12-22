import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="relative">
        {/* Внешнее вращающееся кольцо */}
        <div className="w-16 h-16 border-4 border-amber-900/30 border-t-amber-500 rounded-full animate-spin"></div>
        {/* Внутренний статичный элемент */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border-4 border-transparent border-t-amber-300 rounded-full animate-spin animation-delay-[-0.3s]"></div>
        </div>
      </div>
      {/* Текст */}
      <div className="ml-4 text-center">
        <div className="text-amber-300 font-bold">Загрузка данных...</div>
        <div className="text-sm text-slate-400">Genshin Impact DB</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
