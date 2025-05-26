
import React from 'react';
import { ConceptDetail } from '../../types/thread';

interface ConceptOverlayProps {
  selectedConcept: ConceptDetail | null;
  onClose: () => void;
  onNavigateToChunk: (chunkId: string) => void;
}

export const ConceptOverlay: React.FC<ConceptOverlayProps> = ({
  selectedConcept,
  onClose,
  onNavigateToChunk
}) => {
  if (!selectedConcept) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedConcept.title}</h2>
              {selectedConcept.category && (
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  {selectedConcept.category.replace('_', ' ')}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-gray-300 leading-relaxed">{selectedConcept.description}</p>
          
          {selectedConcept.examples && (
            <div>
              <h3 className="font-semibold mb-3">Examples</h3>
              <div className="flex flex-wrap gap-2">
                {selectedConcept.examples.map((example, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 rounded text-sm">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedConcept.principles && (
            <div>
              <h3 className="font-semibold mb-3">Principles</h3>
              <ul className="space-y-1">
                {selectedConcept.principles.map((principle, index) => (
                  <li key={index} className="text-gray-300">• {principle}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedConcept.core_triads && (
            <div>
              <h3 className="font-semibold mb-3">Core Triads</h3>
              <ul className="space-y-1">
                {selectedConcept.core_triads.map((triad, index) => (
                  <li key={index} className="text-gray-300">• {triad}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedConcept.platform_triad && (
            <div>
              <h3 className="font-semibold mb-3">Platform Triad</h3>
              <div className="space-y-2">
                {Object.entries(selectedConcept.platform_triad).map(([key, value]) => (
                  <div key={key} className="bg-gray-700/50 rounded p-3">
                    <span className="font-medium text-blue-400">{key}:</span> {value}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-3">Appears In</h3>
            <div className="space-y-2">
              {selectedConcept.appears_in.map((appearance, index) => (
                <button
                  key={index}
                  onClick={() => onNavigateToChunk(appearance.chunk)}
                  className="w-full text-left p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="font-medium">{appearance.title}</div>
                  <div className="text-sm text-gray-400 mt-1">{appearance.context}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
