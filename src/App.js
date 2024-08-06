import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen">
      <main className='w-full'>
        <Header />
        <div className="flex-1 flex flex-row">
          <Sidebar />
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;

