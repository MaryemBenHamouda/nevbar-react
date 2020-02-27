import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';

const Menus=[
  { title:"Home", link:"https://www.google.com" },
  {title:"Service", link:"", subMenu:["For enrepreneurs","For students", "for habbyists"]},
  {title:"contact", link:"https://www.google.com"}
]

function App() {
  return (
    <div className="App">
      <Navbar data={Menus} />
    </div>
  );
}
export default App;
