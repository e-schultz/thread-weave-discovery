
import React from 'react';
import { Block, FrameworkStructureItem } from '../../types/thread';

interface ContentBlockProps {
  block: Block;
  processContent: (content: string, concepts?: any[]) => string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ block, processContent }) => {
  return (
    <div className="space-y-4">
      {block.title && (
        <h2 className="text-xl font-semibold text-gray-200">{block.title}</h2>
      )}
      
      {block.type === 'narrative' && (
        <div
          className="text-lg leading-relaxed text-gray-300"
          dangerouslySetInnerHTML={{
            __html: processContent(block.content!, block.concepts)
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
              __html: processContent(block.content!, block.concepts)
            }}
          />
        </blockquote>
      )}

      {block.type === 'framework' && block.structure && (
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(block.structure).map(([key, value]) => {
            const structureItem = value as FrameworkStructureItem;
            return (
              <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-400 mb-3">{key}</h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium">{structureItem.platform}</p>
                  <p className="text-sm text-gray-400">{structureItem.function}</p>
                  <div className="space-y-1">
                    {structureItem.examples?.map((example, exIndex) => (
                      <div key={exIndex} className="text-xs text-gray-500">• {example}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {block.type === 'design_principles' && block.framework && (
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(block.framework).map(([key, values]) => (
            <div key={key} className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-3">{key}</h3>
              <ul className="space-y-1">
                {values.map((value, index) => (
                  <li key={index} className="text-sm text-gray-300">• {value}</li>
                ))}
              </ul>
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
            __html: processContent(block.content!, block.concepts)
          }}
        />
      )}
    </div>
  );
};
