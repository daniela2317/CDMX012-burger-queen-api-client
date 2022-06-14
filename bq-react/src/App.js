import './App.css';
import  * as React from "react";
import Header from './Components/Header';
import Name from './Components/Name';
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';

const App = () => {
    return (
        <div className='gnrlContainer'>
        <Header />
        <Name />
        <Breakfast />
        <Lunch />
        </div>
    );
}

export default App;