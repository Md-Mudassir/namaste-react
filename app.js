const heading = React.createElement(
  'h1',
  {
    id: 'title',
    class: 'heading',
  },
  'Hello world from React!'
);

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    heading,
    React.createElement('h1', {}, 'hello from h1'),
    React.createElement('h2', {}, 'hello from h2'),
  ],
  React.createElement('div', { id: 'parent2' }, [
    heading,
    React.createElement('h1', {}, 'hello from h1'),
    React.createElement('h2', {}, 'hello from h2'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
