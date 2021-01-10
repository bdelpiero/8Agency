import React from "react";
import { Modal } from "react-bootstrap";
import styles from "../../styles/RegisterForm.module.css";

const SuccessModal = ({ showModal, handleClose }) => (
  <Modal
    show={showModal}
    onHide={handleClose}
    centered
    dialogClassName={styles.dialog}
    contentClassName={styles.content}>
    <Modal.Header closeButton={true} style={{ borderBottom: 0 }}></Modal.Header>
    <Modal.Body
      className={styles.modal}
      style={{ padding: "20px 50px 50px 50px" }}>
      <h3>Obrigado pelo seu interesse.</h3>
      <p>
        Entraremos em contato com você em breve no e-mail que você preencheu no
        formulário"
      </p>
    </Modal.Body>
  </Modal>
);

export default SuccessModal;
