import '../assets/stylesheets/application.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

// Functional Component
const Hello = (props) => {
  console.log(props);

  const { name, age } = props;
  return <h1>Hello I'm {name}, {age} years old 🐆!!</h1>;
};

// Class Component
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//   return <h1>Hello I'm {name}, {age} years old 🐆!!</h1>;
//   }
// }

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(<Hello name="Chieri" age="21"/>);
