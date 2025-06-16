
# FLOAT Thread Reader

A sophisticated thread reader application for exploring complex conversation threads with concept mapping and integrated views.

## Project Overview

This application provides an interactive interface for reading and analyzing conversation threads, with advanced features for concept discovery, cross-referencing, and integrated content views.

## Features

### Core Functionality
- **Thread Navigation**: Navigate through conversation chunks with keyboard shortcuts (arrow keys) or UI controls
- **Concept Mapping**: Interactive concept highlighting and cross-referencing throughout content
- **Dual View Modes**: Switch between original thread view and integrated view with enhanced content
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Search Integration**: Search through chunks and concepts in the sidebar

### Advanced Features
- **Tripartite Classification**: Content organized into Concept, Framework, and Metaphor categories
- **Signal Detection**: Identifies and highlights important patterns and connections
- **Concept Overlay**: Detailed concept information with related chunks and cross-references
- **Mobile-First Design**: Collapsible sidebar and optimized mobile navigation

## Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React hooks with local state

### Key Components
- `ThreadReader`: Main application component with state management
- `Sidebar`: Navigation and search functionality
- `ContentBlock`: Renders different types of content blocks
- `ConceptOverlay`: Detailed concept information modal
- `MobileHeader`: Mobile-optimized navigation header

### Data Structure
The application processes structured thread data with:
- **Chunks**: Individual conversation segments with metadata
- **Concepts**: Identified concepts with cross-references and details
- **Blocks**: Content blocks with various types (text, lists, emphasis, etc.)

## Usage

### Navigation
- Use **Left/Right arrow keys** to navigate between chunks
- Click **Previous/Next buttons** for mouse navigation
- Use the **sidebar** to jump to specific chunks or search content

### Concept Exploration
- Click on **highlighted concepts** in the text to see detailed information
- View **related chunks** and cross-references in the concept overlay
- Navigate directly to chunks containing specific concepts

### View Modes
- **Original View**: Shows the base thread content
- **Integrated View**: Enhanced view with additional integrated content and insights
- Toggle between views using the **Layers button** in the top-right

### Search
- Use the **search bar** in the sidebar to find specific content
- Search works across chunk titles, content, and concepts

## Development

### Getting Started

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

```
src/
├── components/
│   ├── ThreadReader/
│   │   ├── ThreadReader.tsx      # Main application component
│   │   ├── Sidebar.tsx           # Navigation and search
│   │   ├── ContentBlock.tsx      # Content rendering
│   │   ├── ConceptOverlay.tsx    # Concept details modal
│   │   └── MobileHeader.tsx      # Mobile navigation
│   └── ui/                       # shadcn/ui components
├── data/
│   ├── threadData.ts            # Original thread data
│   └── integratedThreadData.ts  # Enhanced integrated data
├── types/
│   └── thread.ts                # TypeScript type definitions
└── pages/
    └── Index.tsx                # Main page component
```

### Key Technologies

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety with comprehensive interfaces
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Vite**: Fast build tool with hot module replacement
- **shadcn/ui**: Accessible, customizable UI components

### Data Processing

The application supports multiple data formats and processing modes:
- **Tripartite Classification**: Automatic categorization of content
- **Signal Detection**: Pattern recognition for important content
- **Concept Linking**: Automatic cross-referencing of related concepts
- **Metadata Integration**: Rich metadata for enhanced search and navigation

## Deployment

### Lovable Platform
This project is built with Lovable and can be deployed directly:
1. Open your [Lovable Project](https://lovable.dev/projects/0c28613d-35af-4107-81c1-a36fb438278f)
2. Click **Share → Publish** to deploy

### Custom Domain
Connect a custom domain through Project > Settings > Domains in the Lovable interface.

### Manual Deployment
The project generates standard web application code that can be deployed to any static hosting service:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

This project follows modern React development practices:
- Functional components with hooks
- TypeScript for type safety
- Responsive design principles
- Accessible UI components
- Modular component architecture

## License

This project is built with Lovable and follows standard web application licensing practices.

## Links

- **Lovable Project**: https://lovable.dev/projects/0c28613d-35af-4107-81c1-a36fb438278f
- **Documentation**: https://docs.lovable.dev/
- **Community**: https://discord.com/channels/1119885301872070706/1280461670979993613
