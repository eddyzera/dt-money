import React from 'react';
import { Header } from './components/Header';
import {GlobalStyle} from './styles/globalStyle'

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}