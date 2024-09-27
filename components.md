# UI Components Guide

This document outlines the process for adding new UI components to the MemoryNest project.

## Adding a New Component

1. Create a new file in the appropriate directory under `src/components/`.
2. Use TypeScript for all new components.
3. Export the component as the default export.
4. Use Next.js Image component instead of HTML `<img>` tags.
5. Avoid direct imports from 'shadcn'. Use local imports instead.

## Example

```typescript
import React from 'react';
import Image from 'next/image';

interface MyComponentProps {
  title: string;
  imageUrl: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={imageUrl} alt={title} width={300} height={200} />
    </div>
  );
};

export default MyComponent;
```

## Usage

Import and use the component in other files:

```typescript
import MyComponent from '@/components/MyComponent';

// In your JSX
<MyComponent title="Example" imageUrl="/path/to/image.jpg" />
```

## Best Practices

- Keep components small and focused on a single responsibility.
- Use TypeScript interfaces to define prop types.
- Use functional components with hooks instead of class components.
- Implement proper error handling and loading states.
- Write unit tests for your components.

## Available Custom Components

- GraphView
- Relive
- Timeline
- MyBooks
- FavoriteContacts
- SuggestedJourneys

Refer to individual component files for usage details and props.