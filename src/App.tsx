import './App.css'
import { Datatable } from './components/Datatable'
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import NewUser from './components/NewUser';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <div className='drawer'>
        <div className="drawer-left"></div>
        <div className="drawer-right">
          <h3>User Management</h3>
          <div className='new-user'>
            <NewUser />
          </div>
          <Datatable />
          <Toaster richColors position="top-right" />
        </div>
      </div>
    </div>
  )
}

export default App
