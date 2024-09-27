import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      query: {},
    };
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: import('next/image').ImageProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return {
      type: 'img',
      props: {
        ...props,
        alt: props.alt || '',
      },
    };
  },
}));