import "./ModalMovie.css"
import React from "react";
import { Modal, Button,Form } from "react-bootstrap";

function ModalMovie({ movie, show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} className="modal-container">
      <Modal.Header >
        <Modal.Title className="movie--title">{movie && (movie.title || movie.name)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movie && <p>{movie.overview}</p>}
        <Form.Control as="textarea" className="textArea"></Form.Control>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} className="closeBtn">
          Close
        </Button>
        <Button variant="primary" className="saveBtn">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
