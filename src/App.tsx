import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header/index"

import { GlobalStyle } from "./global"
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {

  const [ isNewTransactionModalOpen ,setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

    return (
    <>
      <GlobalStyle />
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
    </>
  );
}
