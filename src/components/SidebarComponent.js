import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContainer, SidebarItem, SidebarIcon, SidebarText, Sidebar, SidebarLogo } from './StyledComponents';
import { List } from '@mui/material';
import logo from '../assets/icon1.png';
import dashboardIcon from '../assets/icon4.png';
import learningIcon from '../assets/icon5.png';
import projectsIcon from '../assets/icon6.png';
import tasksIcon from '../assets/icon7.png';
import attendanceIcon from '../assets/icon8.png';
import manageLeaveIcon from '../assets/icon9.png';
import peopleIcon from '../assets/icon10.png';
import settingsIcon from '../assets/icon11.png';

const menuItems = [
  { text: 'Dashboard', icon: dashboardIcon, path: '/dashboard' },
  { text: 'Learning', icon: learningIcon, path: '/learning' },
  { text: 'Projects', icon: projectsIcon, path: '/projects' },
  { text: 'Tasks', icon: tasksIcon, path: '/tasks' },
  { text: 'Attendance', icon: attendanceIcon, path: '/attendance' },
  { text: 'Manage Leave', icon: manageLeaveIcon, path: '/manage-leave' },
  { text: 'People', icon: peopleIcon, path: '/people' },
  { text: 'Settings', icon: settingsIcon, path: '/settings' },
];

const SidebarComponent = () => {
  
  return (
    <Sidebar>
      <SidebarLogo src={logo} alt="Logo" />
      <SidebarContainer>
        <List>
          {menuItems.map((item, index) => (
             <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>

            <SidebarItem >
              <SidebarIcon>
                <img src={item.icon} alt={`${item.text} Icon`} />
              </SidebarIcon>
              <SidebarText>{item.text}</SidebarText>
            </SidebarItem>
            </Link>
          ))}
        </List>
      </SidebarContainer>
    </Sidebar>
  );
};

export default SidebarComponent;
