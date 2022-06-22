import './App.css';
import Home from './Pages';
import {Routes,Route} from 'react-router-dom';
import Header from './component/Header';
import Singlecocktail from './Pages/Singlecocktail';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cocktail/:id" element={<Singlecocktail/>}/>
        </Routes>
    </div>
  );
}

export default App;
