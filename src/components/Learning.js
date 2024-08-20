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
const Learning = () => {
  return (
    <CenteredContainer>
    <div>
      <h2>Learning</h2>
      <p>Welcome to the Learning.</p>
    </div>
    </CenteredContainer>
  );
};

export default Learning;