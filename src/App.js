import React, { useState } from 'react';
import Title from './comps/Title';

import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedID, setselectedID] = useState(null)
  const data=[{
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id:3,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id:4,
    image:
      "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id:5,
    image:
      "https://images.unsplash.com/photo-1502219422320-9ca47798b75b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  { id: 6,
      image:"https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }]
//localStorage.clear()
  return (
    <div className="App">
      <Title/>

      <ImageGrid setSelectedImg={setSelectedImg} docs={data} setselectedID={setselectedID}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedID={selectedID} />
      )}
    </div>
  );
}

export default App;
