import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Records from './components/Records';
import Settings from './components/Settings';
import Header from "./components/Header";
import UserRecords from "./components/UserRecords";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />       
        <div className="flex-1 flex flex-col">
          <Header />
          
          {/* Main content */}
          <main className="flex-1 overflow-auto mt-[8px] ml-4"> 
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<User />} />
              <Route path="/users/userRecords/:userId" element={<UserRecords />} />
              <Route path="/records" element={<Records />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
