import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarComponent from './components/SidebarComponent';
import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './components/ContentComponent';
import Learning from './components/Learning'; 
import Projects from './components/Projects'; 
import Tasks from './components/Tasks'; 
import Attendance from './components/Attendance'; 
import ManageLeave from './components/ManageLeave'; 
import People from './components/People'; 
import Settings from './components/Settings'; 

const MainComponent = () => {
  return (
    <Router>
      <SidebarComponent  />
      <HeaderComponent />
      <Routes>
          <Route path="/dashboard" element={<ContentComponent />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/manage-leave" element={<ManageLeave />} />
          <Route path="/people" element={<People />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<ContentComponent />} />
        </Routes>
    </Router>
  );
};

export default MainComponent;
