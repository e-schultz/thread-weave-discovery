
import React from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface MobileHeaderProps {
  currentChunk: number;
  totalChunks: number;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  currentChunk,
  totalChunks,
  sidebarOpen,
  setSidebarOpen,
  onPrevious,
  onNext
}) => {
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <Search size={20} />
        </button>
        <div className="text-sm text-gray-400">
          {currentChunk + 1} / {totalChunks}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPrevious}
            disabled={currentChunk === 0}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            disabled={currentChunk === totalChunks - 1}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
