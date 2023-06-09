// import React from 'react';

// const App = (props) => {
//   return <div>App</div>;
// }
// export default App;

// rsc + tab => react functional component
// rcc + tab => react class component
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif />
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;
