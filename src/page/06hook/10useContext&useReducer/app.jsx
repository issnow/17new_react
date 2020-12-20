import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Btn from './btn.jsx'
import Text from './text.jsx'
import ColorProvider from './colorContext.jsx';
export default function App() {
  return (
    <ColorProvider>
      <Text />
      <Btn />
    </ColorProvider>
  )
}
