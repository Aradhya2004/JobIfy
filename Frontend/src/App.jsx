import Navbar from './components/shared/Navbar'
import { Routes, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Footer from './components/shared/Footer';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/description/:id" element={<JobDescription />} />
        <Route exact path="/admin/companies" element={<ProtectedRoute><Companies /></ProtectedRoute>} />
        <Route exact path="/admin/companies/create" element={<CompanyCreate />} />
        <Route exact path="/admin/companies/:id" element={<CompanySetup />} />
        <Route exact path="/admin/jobs" element={<AdminJobs />} />
        <Route exact path="/admin/jobs/create" element={<PostJob />} />
        <Route exact path="/admin/jobs/:id/applicants" element={<Applicants />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
