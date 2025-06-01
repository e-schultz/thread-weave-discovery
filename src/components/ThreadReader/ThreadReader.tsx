import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { threadData } from '../../data/threadData';
import { integratedThreadData } from '../../data/integratedThreadData';
import { ConceptDetail } from '../../types/thread';
import { MobileHeader } from './MobileHeader';
import { Sidebar } from './Sidebar';
import { ContentBlock } from './ContentBlock';
import { ConceptOverlay } from './ConceptOverlay';

export const ThreadReader = () => {
  const [currentChunk, setCurrentChunk] = useState(0);
  const [selectedConcept, setSelectedConcept] = useState<ConceptDetail | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [useIntegratedView, setUseIntegratedView] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Select data source based on view toggle
  const currentData = useIntegratedView ? integratedThreadData : threadData;

  // Process content to add concept links
  const processContent = (content: string, concepts: any[] = []) => {
    let processedContent = content;
    
    // Replace **text** with bold
    processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Add concept links
    concepts.forEach(concept => {
      const regex = new RegExp(`\\b(${concept.text})\\b`, 'gi');
      processedContent = processedContent.replace(regex, 
        `<span class="concept-link" data-concept="${concept.id}">$1</span>`
      );
    });
    
    return processedContent;
  };

  // Handle concept click
  const handleConceptClick = (conceptId: string) => {
    const concept = currentData.concepts[conceptId];
    if (concept) {
      setSelectedConcept(concept);
    }
  };

  // Navigate to chunk containing concept
  const navigateToChunk = (chunkId: string) => {
    const chunkIndex = currentData.chunks.findIndex(chunk => chunk.id === chunkId);
    if (chunkIndex !== -1) {
      setCurrentChunk(chunkIndex);
      setSelectedConcept(null);
      
      // Smooth scroll to top
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
      }
    }
  };

  // Reset chunk index when switching views
  useEffect(() => {
    if (currentChunk >= currentData.chunks.length) {
      setCurrentChunk(0);
    }
  }, [useIntegratedView, currentData.chunks.length, currentChunk]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedConcept && e.key === 'Escape') {
        setSelectedConcept(null);
        return;
      }
      
      if (!selectedConcept) {
        if (e.key === 'ArrowLeft' && currentChunk > 0) {
          setCurrentChunk(currentChunk - 1);
        } else if (e.key === 'ArrowRight' && currentChunk < currentData.chunks.length - 1) {
          setCurrentChunk(currentChunk + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentChunk, selectedConcept, currentData.chunks.length]);

  // Set up concept link click handlers
  useEffect(() => {
    const links = document.querySelectorAll('.concept-link');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const conceptId = (e.target as HTMLElement).getAttribute('data-concept');
      if (conceptId) {
        handleConceptClick(conceptId);
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  });

  const currentChunkData = currentData.chunks[currentChunk];

  const handlePrevious = () => {
    if (currentChunk > 0) {
      setCurrentChunk(currentChunk - 1);
    }
  };

  const handleNext = () => {
    if (currentChunk < currentData.chunks.length - 1) {
      setCurrentChunk(currentChunk + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Mobile Header */}
      <MobileHeader
        currentChunk={currentChunk}
        totalChunks={currentData.chunks.length}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          threadData={currentData}
          currentChunk={currentChunk}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onNavigateToChunk={navigateToChunk}
          onSelectConcept={setSelectedConcept}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div ref={mainContentRef} className="max-w-4xl mx-auto p-6 lg:p-8">
            {/* View Toggle */}
            <div className="mb-6 flex justify-end">
              <button
                onClick={() => setUseIntegratedView(!useIntegratedView)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  useIntegratedView 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <Layers size={16} />
                <span className="text-sm">
                  {useIntegratedView ? 'Integrated View' : 'Original View'}
                </span>
              </button>
            </div>

            {/* Chunk Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  {currentChunkData.section_type.replace('_', ' ')}
                </span>
                <span className="text-gray-400 text-sm">{currentChunkData.timestamp}</span>
                {useIntegratedView && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                    INTEGRATED
                  </span>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {currentChunkData.title}
              </h1>
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-gray-300 font-medium">{currentChunkData.key_insight}</p>
              </div>
            </header>

            {/* Blocks */}
            <div className="space-y-8">
              {currentChunkData.blocks.map((block, index) => (
                <ContentBlock
                  key={index}
                  block={block}
                  processContent={processContent}
                />
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  disabled={currentChunk === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                
                <div className="text-sm text-gray-400">
                  {currentChunk + 1} of {currentData.chunks.length}
                </div>
                
                <button
                  onClick={handleNext}
                  disabled={currentChunk === currentData.chunks.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Overlay */}
      <ConceptOverlay
        selectedConcept={selectedConcept}
        onClose={() => setSelectedConcept(null)}
        onNavigateToChunk={navigateToChunk}
      />
    </div>
  );
};
