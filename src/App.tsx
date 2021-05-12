import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header/index"

import { GlobalStyle } from "./global"

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
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>test</h1>
      </Modal>
    </>
  );
}
