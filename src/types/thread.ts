
export interface FrameworkStructureItem {
  platform: string;
  function: string;
  examples?: string[];
}

export interface Concept {
  id: string;
  text: string;
  strength: string;
}

export interface Block {
  type: string;
  title?: string;
  content?: string;
  concepts?: Concept[];
  emphasis?: string[];
  style?: string;
  items?: {
    category: string;
    examples: string[];
    note: string;
  }[];
  structure?: Record<string, FrameworkStructureItem>;
  framework?: Record<string, string[]>;
}

export interface Chunk {
  id: string;
  title: string;
  section_type: string;
  timestamp: string;
  word_count: number;
  key_insight: string;
  emotional_tone: string;
  blocks: Block[];
  connections_out?: string[];
  connections_in?: string[];
  depth_content?: {
    original_thinking?: string;
    process_notes?: string;
    design_implications?: string;
  };
}

export interface ConceptDetail {
  id: string;
  title: string;
  description: string;
  category?: string;
  strength: string;
  signature?: string;
  core_triads?: string[];
  purpose?: string;
  examples?: string[];
  principles?: string[];
  platform_triad?: Record<string, string>;
  appears_in: {
    chunk: string;
    title: string;
    context: string;
  }[];
  referenced_by?: {
    chunk: string;
    context: string;
    quote: string;
  }[];
  related_concepts?: string[];
}

export interface ThreadData {
  thread: {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    duration: string;
    participants: string[];
    themes: string[];
    summary: string;
  };
  chunks: Chunk[];
  concepts: Record<string, ConceptDetail>;
}
