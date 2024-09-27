import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import all custom components
import GraphView from '../components/GraphView';
import Relive from '../components/Relive';
import Timeline from '../components/Timeline';
import MyBooks from '../components/MyBooks';
import FavoriteContacts from '../components/FavoriteContacts';
import SuggestedJourneys from '../components/SuggestedJourneys';

describe('Component Imports', () => {
  test('all components can be imported and rendered without crashing', () => {
    const components = [
      GraphView,
      Relive,
      Timeline,
      MyBooks,
      FavoriteContacts,
      SuggestedJourneys,
    ];

    components.forEach((Component) => {
      expect(() => render(<Component />)).not.toThrow();
    });
  });
});