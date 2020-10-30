import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  height: 834px;
  width: 450px;
  border-radius: 0px;
  background: #222222;
  position: fixed;
  top: 0px;
  z-index: 5;
  left: calc(50% - 200px);
`

const ModalBg = styled.div`
  positon: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  background-color: black;
  background: rgba(0, 0, 0, 0.7);
  z-index: 4;
`

const ProdImg = styled.div`
  width: 409px;
  height: 276px;
  left: 41px;
  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.2));
  border-radius: 0px 0px 0px 50px;
  background: bisque;
  margin-left: 41px;
`

const OrderModal = () => (
  <div className="order-modal">
    <ModalBg />
    <Modal>
      <ProdImg />
    </Modal>
  </div>
)

export default OrderModal
