import './App.css';
import Product2 from './Components/Product2';
import Counter2 from './Components/Counter2';
import BGColor from './Components/BGColor';
import AddCount from './Components/AddCount';
import ProdDestr from './Components/ProdDestr';
import Todo from './Todo App/Todo';
import TwoDataBinding from './Components/TwoDataBinding';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Product2 />
      <Counter2 />
      <BGColor /> 
      <AddCount />
      <ProdDestr />
      <Todo />
      <TwoDataBinding />

    </div>
  );
}

export default App;
