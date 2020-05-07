import React from 'react';
import styled from 'styled-components'

const Modal = ({closeModal}) => {
    const Modal = styled.div`
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-y: initial !important;
      color: hsl(229, 25%, 31%);
    `;

    const style = {
        overflowY: 'auto',
        background: 'white',
        padding: '1rem 2rem',
        borderRadius: '15px',
    }

    const topModal = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '2rem',
    };

    return (
      <Modal onClick={closeModal}>
        <div style={style}>
          <div style={topModal}>
            <h2>RULES</h2>
            <img src="./img/icon-close.svg" alt="close" onClick={closeModal} />
          </div>

          <img src="./img/image-rules.svg" alt="rules" />
        </div>
      </Modal>
    );
}
 
export default Modal;