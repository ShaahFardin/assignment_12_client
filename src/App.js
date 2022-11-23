import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/PublicRoute';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
