import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Sidebar = styled.div`
  width: 420px; /* Adjust the width as needed */
  height: 100vh;
  background-color: #1D2125;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 0; /* Adjust padding as needed */
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distributes space between items equally */
  height: 100%;
  width: 100%;
  padding: 20px 0; /* Add some padding if needed */
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 15px 20px; /* Adjust padding for the sidebar item */
  
  &:hover, &.active { /* Add 'active' class to handle clicked state */
    background-color: #A668F4; /* Purple hover effect */
    color: #FFFFFF;
  }
`;


export const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px; /* Adjust icon size */
    height: 40px;
    margin-left:60px;
    margin-right:30px;
  }
`;

export const SidebarText = styled(Typography)`
  color: #fff;
  font-family: Open Sans, sans-serif; /* Added fallback font */
  font-size: 20px; /* Increased font size */
  flex-grow: 1;
`;
export const SidebarLogo = styled.img`
  width: 140px; /* Ensure the logo width is within the sidebar, considering margins */
  height: auto;
  margin-left:80px;
  margin-top:20px;
  margin-bottom:20px;
  display: block;
  box-sizing: border-box; /* Include padding and border in element's width/height */
  align-self: flex-start; /* Align the logo to the left side */
`;

export const Header = styled.div`
  width: calc(100% - 420px);
  height: 85px;
  background-color: #1D2125;
  position: fixed;
  top: 0;
  left: 420px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  box-sizing: border-box;
  color: white;
`;

export const Content = styled.div`
  position: fixed;
  left: 420px;
  top: 85px;
  
  width: calc(100% - 420px);
  height: calc(100vh - 85px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 300px;
  height:300px;
  margin-bottom: 15px;
`;

export const TypographyText = styled(Typography)`
  margin: 5px 0;
  font-family: Open Sans, sans-serif; /* Added fallback font */
`;
