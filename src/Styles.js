export const drawerStyles = (isMobile) => ({
  width: isMobile ? '200px' : '250px',
  height: '100%',
  backgroundColor: '#1D2125',
  color: '#fff',
});

export const logoStyles = {
  width: '40%',
  margin: '20px auto',
  display: 'block',
};

export const linkContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px 20px',
};

export const listItemTextStyles = {
  color: '#738496',
  marginLeft: '10px',
};

export const navContainerStyles = (isMobile) => ({
  width: isMobile ? '200px' : '250px',
  flexShrink: { sm: 0 },
});

export const rootContainerStyles = {
  display: 'flex',
  height: '100vh',
};

export const iconButtonStyles = {
  marginLeft: 1,
  position: 'absolute',
  top: 10,
  left: 10,
  color: '#fff',
};

export const drawerPaperStyles = {
  boxSizing: 'border-box',
  width: '200px',
};

export const headerContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#1D2125',
};

export const headerTitleStyles = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.5em',
};

export const contentContainerStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

export const contentAreaStyles = {
  flex: 1,
  p: 3,
  overflowY: 'auto',
};
