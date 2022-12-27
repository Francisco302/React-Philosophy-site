import './App.css';
import NavBar from './components/NavBar/NavBar';
import Century from './components/Century/Century';
import Category from './components/Category/Category';
import Philosopher from './components/Philosopher/Philosopher';

// Images import
import {
  platonImg
} from './img/index';

function App() {
  return (
    <div>
      <NavBar />

      <Century dataParentToChild = {1998}/>
      <Category theme = {'Realismo'}>
       <Philosopher name = {'Platon'} image = {platonImg} />
       <Philosopher name = {'Platon2'} image = {platonImg}/>
       <Philosopher name = {'Platon3'} />
      </Category>
      
      <Century dataParentToChild = {1998}/>

    </div>
  );
}

export default App;
