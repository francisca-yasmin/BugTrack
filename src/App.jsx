import React from "react";
import Home from './pages/Home.jsx';
import { Header } from './components/Header.jsx';


// estrutura basica do react é atraves de funções
function App() {
// para trazer o resultado da função eu coloco o que eu quero no return
  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App