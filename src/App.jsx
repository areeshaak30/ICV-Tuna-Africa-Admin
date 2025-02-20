import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import ForgotPassword from "./components/forgot-password";
import ResetPassword from "./components/reset-password";
import PasswordChanged from "./components/password-changed";
import LayoutWrapper from "./components/LayoutWrapper";
import DashboardPage from "./pages/DashboardPage";
import UserPage from "./pages/UserPage";
import UserRecordPage from "./pages/UserRecordPage";
import RecordPage from "./pages/RecordPage";
import SettingPage from "./pages/SettingPage";

function App() {
  return (
    <Router>
      {/* <div className="flex h-screen"> */}
        {/* <Sidebar /> */}
        {/* <div className="flex-1 flex flex-col"> */}
          {/* <Header /> */}

          {/* Main content */}
          {/* <main className="flex-1 overflow-auto mt-[10px] ml-4"> */}
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/password-changed" element={<PasswordChanged />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/users/userRecords/:userId" element={<UserRecordPage />} />
              <Route path="/records" element={<RecordPage />} />
              <Route path="/settings" element={<SettingPage />} />
            </Routes>
          {/* </main> */}
        {/* </div> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
