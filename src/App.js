import React, { useState } from 'react';
import './App.css';
import Folder from './Folder';
let arr = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'Public',
      isFolder: true,
      items: [
        {
          name: 'Public Nested 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'hello.html',
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: 'SRC',
      isFolder: true,
      items: [
        {
          name: 'SRC Nested 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'hello.html',
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Learn Pagination</h1>
      <Folder explorer={arr} />
    </div>
  );
}

export default App;
