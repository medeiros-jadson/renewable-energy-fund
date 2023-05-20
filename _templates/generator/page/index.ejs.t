---
to: src/pages/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>';

const <%= h.changeCase.pascal(name) %>Container: React.FC = () => {
  return <<%= h.changeCase.pascal(name) %> />;
};

export default <%= h.changeCase.pascal(name) %>Container;
