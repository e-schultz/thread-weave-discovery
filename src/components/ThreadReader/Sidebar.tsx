
import React from 'react';
import { ThreadData } from '../../types/thread';

interface SidebarProps {
  threadData: ThreadData;
  currentChunk: number;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onNavigateToChunk: (chunkId: string) => void;
  onSelectConcept: (concept: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  threadData,
  currentChunk,
  sidebarOpen,
  setSidebarOpen,
  searchTerm,
  setSearchTerm,
  onNavigateToChunk,
  onSelectConcept
}) => {
  return (
    <>
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-80 bg-gray-800 border-r border-gray-700 transition-transform duration-300 ease-in-out`}>
        <div className="p-6 border-b border-gray-700">
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-2">{threadData.thread.title}</h1>
            <p className="text-sm text-gray-400 mb-2">{threadData.thread.subtitle}</p>
            <div className="text-xs text-gray-500">
              {threadData.thread.date} • {threadData.thread.duration}
            </div>
          </div>
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search concepts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Thread Navigation */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Thread</h3>
          <div className="space-y-1">
            {threadData.chunks.map((chunk, index) => (
              <button
                key={chunk.id}
                onClick={() => onNavigateToChunk(chunk.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  index === currentChunk
                    ? 'bg-blue-500/20 border-l-2 border-blue-400'
                    : 'hover:bg-gray-700'
                }`}
              >
                <div className="text-sm font-medium">{chunk.title}</div>
                <div className="text-xs text-gray-400 mt-1">{chunk.timestamp}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Concepts */}
        <div className="p-4 border-t border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Concepts</h3>
          <div className="space-y-2">
            {Object.values(threadData.concepts)
              .filter(concept => !searchTerm || concept.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(concept => (
              <button
                key={concept.id}
                onClick={() => onSelectConcept(concept)}
                className="w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="text-sm font-medium">{concept.title}</div>
                <div className="text-xs text-gray-400">{concept.appears_in.length} references</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};
