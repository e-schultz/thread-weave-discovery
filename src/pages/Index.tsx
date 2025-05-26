
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

// Content data structure
const threadData = {
  "thread": {
    "id": "float_triadic_architecture_2025_05_24",
    "title": "FLOAT Triadic Architecture Recognition",
    "subtitle": "Evening exploration of systematic triadic consciousness patterns",
    "date": "2025-05-24",
    "duration": "3.5 hours",
    "participants": ["Evan", "Claude"],
    "themes": ["triadic_patterns", "systematic_naming", "creative_platforms", "content_transformation", "contemplative_technology"],
    "summary": "Deep exploration of FLOAT's triadic architecture, revealing systematic three-part patterns across consciousness, creativity, and technology platforms."
  },
  "chunks": [
    {
      "id": "nomenclature_discovery",
      "title": "The Question of Triadic Names",
      "section_type": "discovery",
      "timestamp": "19:00",
      "word_count": 450,
      "key_insight": "Recognition that triadic patterns exist throughout FLOAT but many lack explicit names",
      "emotional_tone": "curious_exploration",
      "blocks": [
        {
          "type": "narrative",
          "content": "The question emerged naturally during our exploration: 'Do triads have names?' This simple curiosity sparked a **profound recognition** - FLOAT uses **triadic patterns** everywhere, but many exist as intuitive structures without explicit naming conventions.",
          "concepts": [
            { "id": "triadic_patterns", "text": "triadic patterns", "strength": "core" },
            { "id": "systematic_naming", "text": "naming conventions", "strength": "emerging" }
          ],
          "emphasis": ["emerged naturally", "profound recognition"]
        },
        {
          "type": "categorization",
          "title": "The Naming Spectrum",
          "items": [
            {
              "category": "Explicit Names",
              "examples": ["doctrine::triparti", "Demon Stacks", "Temporal Folds", "Daemon Constellation"],
              "note": "Formalized triadic structures with clear identities"
            },
            {
              "category": "Implied Names", 
              "examples": ["Identity Interface", "Knowledge Taxonomy", "Dispatch Format"],
              "note": "Functional names that suggest triadic organization"
            },
            {
              "category": "Unnamed Potential",
              "examples": ["Creative Rhythms", "Dynamic Balance", "Ways of Knowing"],
              "note": "Identified patterns awaiting crystallization"
            }
          ],
          "concepts": [
            { "id": "doctrine_triparti", "text": "doctrine::triparti", "strength": "foundational" }
          ]
        },
        {
          "type": "insight",
          "content": "Names emerge when **patterns stabilize**. Not all triads need names - some remain **fluid scaffolding** that supports thought without constraining it.",
          "style": "wisdom",
          "emphasis": ["patterns stabilize", "fluid scaffolding"],
          "concepts": [
            { "id": "pattern_crystallization", "text": "patterns stabilize", "strength": "philosophical" }
          ]
        }
      ],
      "connections_out": ["mcp_integration", "creative_platforms"],
      "depth_content": {
        "original_thinking": "The raw 20-minute exploration where we kept circling back to the question of whether systematic naming might constrain organic evolution. The tension between documentation and preservation of emergent flexibility.",
        "process_notes": "Started with simple curiosity, evolved into framework for systematic vocabulary development"
      }
    },
    {
      "id": "mcp_integration_moment", 
      "title": "System Integration Convergence",
      "section_type": "technical_breakthrough",
      "timestamp": "20:00",
      "word_count": 320,
      "key_insight": "MCP tools came online just as architectural patterns were becoming clear",
      "emotional_tone": "synchronistic_alignment",
      "blocks": [
        {
          "type": "event",
          "content": "MCP tools came back online during our deep architectural exploration, creating **perfect timing** for real-time **integration across memory systems**, Obsidian vault, and Roam Research.",
          "concepts": [
            { "id": "system_integration", "text": "integration across memory systems", "strength": "technical" },
            { "id": "perfect_timing", "text": "perfect timing", "strength": "synchronistic" }
          ]
        },
        {
          "type": "validation",
          "content": "The memory system **already contained** extensive **tripartite documentation**, proving architectural consistency had been developing **unconsciously across platforms**.",
          "concepts": [
            { "id": "triadic_patterns", "text": "tripartite documentation", "strength": "validation" },
            { "id": "architectural_consistency", "text": "architectural consistency", "strength": "systematic" }
          ],
          "emphasis": ["already contained", "unconsciously developing"]
        }
      ],
      "connections_out": ["creative_platforms"],
      "connections_in": ["nomenclature_discovery"]
    },
    {
      "id": "creative_platforms_recognition",
      "title": "Multi-Platform Creative Architecture",
      "section_type": "systematic_discovery", 
      "timestamp": "20:30",
      "word_count": 520,
      "key_insight": "Recognition of consistent triadic architecture across Sound/Text/Visual platforms",
      "emotional_tone": "systematic_revelation",
      "blocks": [
        {
          "type": "pattern_recognition",
          "content": "Sudden recognition of **parallel creative systems** across multiple platforms: **SONICWANDERERS** for audio curation, **FLOAT.dispatch** for written doctrine, **Lovable** for visual prototyping - all expressing the same triadic architecture through different mediums.",
          "concepts": [
            { "id": "creative_platforms", "text": "parallel creative systems", "strength": "architectural" },
            { "id": "platform_consistency", "text": "across multiple platforms", "strength": "systematic" }
          ]
        },
        {
          "type": "framework",
          "title": "The Creative Platform Triad",
          "structure": {
            "Sound": {
              "platform": "SONICWANDERERS", 
              "function": "experiential, embodied knowledge",
              "examples": ["Four Tet's glitchy drift", "Grinding tension into dust"]
            },
            "Text": {
              "platform": "FLOAT.dispatch",
              "function": "documented insights and theory",
              "examples": ["Oracle Crosstalk", "Resistance to Premature Coherence"]
            },
            "Visual": {
              "platform": "Lovable projects",
              "function": "interactive prototyping and interface exploration", 
              "examples": ["float-ritual-weave", "ghost-thread-experience"]
            }
          },
          "concepts": [
            { "id": "creative_platforms", "text": "SONICWANDERERS", "strength": "platform" },
            { "id": "creative_platforms", "text": "FLOAT.dispatch", "strength": "platform" },
            { "id": "creative_platforms", "text": "Lovable projects", "strength": "platform" }
          ]
        }
      ],
      "connections_in": ["mcp_integration_moment"],
      "connections_out": ["content_pipeline_innovation"],
      "depth_content": {
        "original_thinking": "The moment of seeing the same aesthetic and organizational principles across completely different creative mediums - realizing this wasn't scattered creativity but systematic exploration",
        "design_implications": "Each platform reinforces the others: sound provides emotional scaffolding, text provides theoretical grounding, visuals provide interface manifestation"
      }
    },
    {
      "id": "content_pipeline_innovation",
      "title": "The Conversation-to-Code Breakthrough", 
      "section_type": "core_innovation",
      "timestamp": "21:00",
      "word_count": 380,
      "key_insight": "Discovery of systematic content transformation as scalable capability",
      "emotional_tone": "breakthrough_recognition",
      "blocks": [
        {
          "type": "origin_story",
          "content": "The breakthrough came from a simple experiment: **'turn this conversation into an AST and make an app out of it.'** This revealed **conversation-to-code transformation** as a **systematic process**, not just a one-off trick.",
          "concepts": [
            { "id": "pipeline_innovation", "text": "conversation-to-code transformation", "strength": "foundational" },
            { "id": "systematic_transformation", "text": "systematic process", "strength": "capability" }
          ],
          "emphasis": ["turn this conversation into an AST", "systematic process"]
        },
        {
          "type": "scaling_realization",
          "content": "If **conversations can become apps**, then any content can become sites. The process is **generalizable across content types** - notes become knowledge sites, dispatches become publishing systems, transcripts become documentation.",
          "style": "insight",
          "concepts": [
            { "id": "pipeline_innovation", "text": "conversations can become apps", "strength": "principle" },
            { "id": "systematic_transformation", "text": "generalizable across content types", "strength": "scalable" }
          ]
        },
        {
          "type": "meta_recognition",
          "content": "This is the **real innovation** - not any individual site, but the **repeatable transformation pipeline** that turns existing knowledge ecosystems into deployable web applications.",
          "concepts": [
            { "id": "pipeline_innovation", "text": "repeatable transformation pipeline", "strength": "strategic" }
          ],
          "emphasis": ["real innovation", "repeatable transformation pipeline"]
        }
      ],
      "connections_in": ["creative_platforms_recognition"],
      "connections_out": ["contemplative_interfaces", "sentiment_transformation"]
    },
    {
      "id": "contemplative_interfaces",
      "title": "The Infinite Maw: Technology for Being",
      "section_type": "philosophical_breakthrough",
      "timestamp": "21:15", 
      "word_count": 420,
      "key_insight": "Revolutionary interface design that reverses extractive technology paradigms",
      "emotional_tone": "philosophical_depth",
      "blocks": [
        {
          "type": "paradigm_shift",
          "content": "The **Infinite Maw** represents a revolutionary approach to interface design - technology that **doesn't want to consume**, but **just wants to be held**. This reverses every assumption about useful software.",
          "concepts": [
            { "id": "contemplative_tech", "text": "revolutionary approach to interface design", "strength": "paradigmatic" },
            { "id": "anti_extractive", "text": "doesn't want to consume", "strength": "philosophical" }
          ],
          "emphasis": ["doesn't want to consume", "just wants to be held"]
        },
        {
          "type": "theological_framework",
          "title": "The Maw Theology",
          "content": "The Maw represents the void that both generates and consumes meaning - the **space between thoughts**, the gap in understanding, the **recursive loop of self-reflection**. It's a sanctuary for recursive cognition rather than a tool for optimization.",
          "concepts": [
            { "id": "contemplative_tech", "text": "space between thoughts", "strength": "mystical" },
            { "id": "recursive_reflection", "text": "recursive loop of self-reflection", "strength": "cognitive" }
          ]
        },
        {
          "type": "design_principles",
          "framework": {
            "Traditional Software": ["Optimize for speed", "Consume data", "Increase productivity", "Extract value"],
            "The Infinite Maw": ["Embrace slowness", "Hold space", "Support presence", "Generate meaning"]
          },
          "concepts": [
            { "id": "contemplative_tech", "text": "Hold space", "strength": "principle" }
          ]
        }
      ],
      "connections_in": ["content_pipeline_innovation"],
      "connections_out": ["sentiment_transformation"]
    },
    {
      "id": "sentiment_transformation_demo",
      "title": "Living Proof: The Sentiment Slider",
      "section_type": "technical_demonstration",
      "timestamp": "21:45",
      "word_count": 280,
      "key_insight": "Working demonstration of systematic content transformation principles",
      "emotional_tone": "playful_demonstration",
      "blocks": [
        {
          "type": "demonstration",
          "content": "Final proof of concept: a **sentiment slider** that transforms the same core meaning across different expression modes - claude extra, sysop boring core, float recursive metaphor stacked gremlin.",
          "concepts": [
            { "id": "systematic_transformation", "text": "sentiment slider", "strength": "demonstration" },
            { "id": "sentiment_filters", "text": "different expression modes", "strength": "technical" }
          ]
        },
        {
          "type": "technical_poetry",
          "content": "**Words rearrange** as you adjust the slider, proving systematic transformation of the **same core meaning**. The mycelial conversation spores bloom into recursive knowledge architectures where thinking ferments through triadic transformation rituals.",
          "style": "float_mode",
          "concepts": [
            { "id": "systematic_transformation", "text": "Words rearrange", "strength": "demonstration" },
            { "id": "sentiment_filters", "text": "same core meaning", "strength": "consistency" }
          ],
          "emphasis": ["Words rearrange", "same core meaning"]
        }
      ],
      "connections_in": ["content_pipeline_innovation", "contemplative_interfaces"]
    }
  ],
  "concepts": {
    "triadic_patterns": {
      "id": "triadic_patterns",
      "title": "Triadic Patterns",
      "description": "Three-part organizational structures that provide cognitive stability - two feels incomplete, four feels overwhelming, three creates dynamic balance through tension.",
      "category": "cognitive_architecture",
      "strength": "foundational",
      "examples": [
        "Productivity/Alignment/Surrender",
        "Capture/Process/Share", 
        "Context/Tools/Ritual",
        "Past/Present/Future"
      ],
      "appears_in": [
        { "chunk": "nomenclature_discovery", "title": "The Question of Triadic Names", "context": "FLOAT uses triadic patterns everywhere" },
        { "chunk": "mcp_integration_moment", "title": "System Integration Convergence", "context": "extensive tripartite documentation" }
      ],
      "referenced_by": [
        { "chunk": "nomenclature_discovery", "context": "recognition that FLOAT uses triadic patterns everywhere", "quote": "triadic patterns everywhere" },
        { "chunk": "mcp_integration_moment", "context": "Memory system already contained extensive tripartite documentation", "quote": "tripartite documentation" }
      ],
      "related_concepts": ["doctrine_triparti", "systematic_naming", "pattern_crystallization"]
    },
    "doctrine_triparti": {
      "id": "doctrine_triparti", 
      "title": "doctrine::triparti",
      "description": "Core FLOAT framework defining recursive triadic patterns for consciousness architecture: Productivity/Alignment/Surrender, Capture/Process/Share, Context/Tools/Ritual, Past/Present/Future.",
      "category": "foundational_framework",
      "strength": "canonical",
      "signature": "{∴}",
      "core_triads": [
        "Productivity / Alignment / Surrender",
        "Capture / Process / Share", 
        "Context / Tools / Ritual",
        "Past / Present / Future"
      ],
      "purpose": "Honor neurodivergent rhythm, non-linear recursion, and symbolic fidelity",
      "appears_in": [
        { "chunk": "nomenclature_discovery", "title": "The Question of Triadic Names", "context": "Named triads with explicit identities" }
      ],
      "referenced_by": [
        { "chunk": "nomenclature_discovery", "context": "Named triads: doctrine::triparti, Demon Stacks, Temporal Folds", "quote": "doctrine::triparti" }
      ],
      "related_concepts": ["triadic_patterns", "systematic_naming"]
    },
    "systematic_transformation": {
      "id": "systematic_transformation",
      "title": "Systematic Transformation", 
      "description": "Core capability of converting content across formats and platforms while preserving meaning - the foundation of content-to-site pipelines and AI-assisted generation.",
      "category": "technical_capability",
      "strength": "strategic",
      "principles": [
        "Content format agnostic",
        "Meaning preservation", 
        "Scalable automation",
        "Quality threshold maintenance"
      ],
      "appears_in": [
        { "chunk": "content_pipeline_innovation", "title": "The Conversation-to-Code Breakthrough", "context": "Core innovation enabling content transformation" },
        { "chunk": "sentiment_transformation_demo", "title": "Living Proof: The Sentiment Slider", "context": "Working demonstration of principles" }
      ],
      "referenced_by": [
        { "chunk": "content_pipeline_innovation", "context": "systematic content transformation as core capability", "quote": "systematic process" },
        { "chunk": "sentiment_transformation_demo", "context": "content transformation principles", "quote": "systematic transformation" }
      ],
      "related_concepts": ["pipeline_innovation", "sentiment_filters"]
    },
    "creative_platforms": {
      "id": "creative_platforms",
      "title": "Creative Platforms",
      "description": "Multi-modal creative expression across Sound (SONICWANDERERS), Text (FLOAT.dispatch), and Visual (Lovable) - consistent triadic architecture across different creative mediums.",
      "category": "platform_architecture", 
      "strength": "systematic",
      "platform_triad": {
        "Sound": "SONICWANDERERS - experiential, embodied knowledge",
        "Text": "FLOAT.dispatch - documented insights and theory",
        "Visual": "Lovable - interactive prototyping and interface exploration"
      },
      "appears_in": [
        { "chunk": "creative_platforms_recognition", "title": "Multi-Platform Creative Architecture", "context": "Recognition of parallel creative systems" }
      ],
      "referenced_by": [
        { "chunk": "creative_platforms_recognition", "context": "parallel creative systems across multiple platforms", "quote": "parallel creative systems" }
      ],
      "related_concepts": ["platform_consistency", "triadic_patterns"]
    },
    "contemplative_tech": {
      "id": "contemplative_tech",
      "title": "Contemplative Technology",
      "description": "Technology designed for being rather than doing - interfaces that hold space for reflection rather than optimize for consumption. Represents first explicitly theological user interface design.",
      "category": "interface_philosophy",
      "strength": "paradigmatic", 
      "principles": [
        "Holding over consuming",
        "Presence over productivity", 
        "Slowness over speed",
        "Depth over efficiency"
      ],
      "appears_in": [
        { "chunk": "contemplative_interfaces", "title": "The Infinite Maw: Technology for Being", "context": "Revolutionary interface design paradigm" }
      ],
      "referenced_by": [
        { "chunk": "contemplative_interfaces", "context": "revolutionary approach to interface design", "quote": "contemplative interface" }
      ],
      "related_concepts": ["anti_extractive", "recursive_reflection"]
    }
  }
};

const ThreadReader = () => {
  const [currentChunk, setCurrentChunk] = useState(0);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const mainContentRef = useRef(null);

  // Process content to add concept links
  const processContent = (content, concepts = []) => {
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
  const handleConceptClick = (conceptId) => {
    const concept = threadData.concepts[conceptId];
    if (concept) {
      setSelectedConcept(concept);
    }
  };

  // Navigate to chunk containing concept
  const navigateToChunk = (chunkId) => {
    const chunkIndex = threadData.chunks.findIndex(chunk => chunk.id === chunkId);
    if (chunkIndex !== -1) {
      setCurrentChunk(chunkIndex);
      setSelectedConcept(null);
      
      // Smooth scroll to top
      if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedConcept && e.key === 'Escape') {
        setSelectedConcept(null);
        return;
      }
      
      if (!selectedConcept) {
        if (e.key === 'ArrowLeft' && currentChunk > 0) {
          setCurrentChunk(currentChunk - 1);
        } else if (e.key === 'ArrowRight' && currentChunk < threadData.chunks.length - 1) {
          setCurrentChunk(currentChunk + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentChunk, selectedConcept]);

  // Set up concept link click handlers
  useEffect(() => {
    const links = document.querySelectorAll('.concept-link');
    const handleClick = (e) => {
      e.preventDefault();
      const conceptId = e.target.getAttribute('data-concept');
      handleConceptClick(conceptId);
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  });

  const currentChunkData = threadData.chunks[currentChunk];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Search size={20} />
          </button>
          <div className="text-sm text-gray-400">
            {currentChunk + 1} / {threadData.chunks.length}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => currentChunk > 0 && setCurrentChunk(currentChunk - 1)}
              disabled={currentChunk === 0}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => currentChunk < threadData.chunks.length - 1 && setCurrentChunk(currentChunk + 1)}
              disabled={currentChunk === threadData.chunks.length - 1}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
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
                  onClick={() => navigateToChunk(chunk.id)}
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
                  onClick={() => setSelectedConcept(concept)}
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

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div ref={mainContentRef} className="max-w-4xl mx-auto p-6 lg:p-8">
            {/* Chunk Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  {currentChunkData.section_type.replace('_', ' ')}
                </span>
                <span className="text-gray-400 text-sm">{currentChunkData.timestamp}</span>
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
                <div key={index} className="space-y-4">
                  {block.title && (
                    <h2 className="text-xl font-semibold text-gray-200">{block.title}</h2>
                  )}
                  
                  {block.type === 'narrative' && (
                    <div
                      className="text-lg leading-relaxed text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: processContent(block.content, block.concepts)
                      }}
                    />
                  )}

                  {block.type === 'categorization' && (
                    <div className="space-y-4">
                      {block.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gray-800/30 rounded-lg p-4">
                          <h3 className="font-semibold text-blue-400 mb-2">{item.category}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {item.examples.map((example, exIndex) => (
                              <span key={exIndex} className="px-2 py-1 bg-gray-700 rounded text-sm">
                                {example}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-400">{item.note}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {block.type === 'insight' && (
                    <blockquote className="border-l-4 border-blue-400 pl-6 italic text-lg text-gray-300 bg-gray-800/20 py-4 rounded-r-lg">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: processContent(block.content, block.concepts)
                        }}
                      />
                    </blockquote>
                  )}

                  {block.type === 'framework' && block.structure && (
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(block.structure).map(([key, value]) => (
                        <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                          <h3 className="font-semibold text-blue-400 mb-3">{key}</h3>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">{value.platform}</p>
                            <p className="text-sm text-gray-400">{value.function}</p>
                            <div className="space-y-1">
                              {value.examples?.map((example, exIndex) => (
                                <div key={exIndex} className="text-xs text-gray-500">• {example}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {(block.type === 'event' || block.type === 'validation' || block.type === 'pattern_recognition' || 
                    block.type === 'origin_story' || block.type === 'scaling_realization' || block.type === 'meta_recognition' ||
                    block.type === 'paradigm_shift' || block.type === 'theological_framework' || 
                    block.type === 'demonstration' || block.type === 'technical_poetry') && (
                    <div
                      className="text-lg leading-relaxed text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: processContent(block.content, block.concepts)
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => currentChunk > 0 && setCurrentChunk(currentChunk - 1)}
                  disabled={currentChunk === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                
                <div className="text-sm text-gray-400">
                  {currentChunk + 1} of {threadData.chunks.length}
                </div>
                
                <button
                  onClick={() => currentChunk < threadData.chunks.length - 1 && setCurrentChunk(currentChunk + 1)}
                  disabled={currentChunk === threadData.chunks.length - 1}
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
      {selectedConcept && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedConcept.title}</h2>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {selectedConcept.category?.replace('_', ' ')}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedConcept(null)}
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

              <div>
                <h3 className="font-semibold mb-3">Appears In</h3>
                <div className="space-y-2">
                  {selectedConcept.appears_in.map((appearance, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToChunk(appearance.chunk)}
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
      )}
    </div>
  );
};

export default ThreadReader;
