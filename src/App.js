import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1529px] mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
