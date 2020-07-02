import React from 'react';

import { Container } from './styles';


function ToolTip({ title, className, children }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default ToolTip;
