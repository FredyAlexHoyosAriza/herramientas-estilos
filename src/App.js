import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mx-2 bg-purple-400'>Elemento 1</div>
      <div className='mx-2 bg-blue-600'>Elemento 2</div>
      <div className='mx-2 bg-yellow-700'>Elemento 3</div>
      <div className='mx-2 bg-green-800'>Elemento 4</div>
      <button className='border-4 border-blue-900 p-2 text-red-400 font-bold rounded-lg shadow-lg hover:bg-violet-600 hover:cursor-pointer'>Boton 1</button>
      <button className='boton'>Boton 2</button>
    </div>
  );
}

export default App;
