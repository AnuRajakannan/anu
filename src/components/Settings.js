import React from 'react';
import styled from 'styled-components';
export const CenteredContainer = styled.div`
  position: fixed;
  left: 420px;
  top: 85px;
  width: calc(100% - 420px);
  height: calc(100vh - 85px);
  overflow-y: auto;
  padding:20px;
`;
const Settings = () => {
  return (
    <CenteredContainer>
    <div>
      <h2>Settings</h2>
      <p>Welcome to the Settings.</p>
    </div>
    </CenteredContainer>
  );
};

export default Settings;