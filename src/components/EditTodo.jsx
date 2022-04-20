import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTodo } from  "../redux/Action/Index"
const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [updatedText, setUpdatedText] = useState({});
  const handleChange = (e) => {
    setUpdatedText(e.target.value);
  };
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        description: updatedText,
      })
    );
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div classname='my-form' >
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your Todo ...</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          onChange={handleChange}
          defaultValue={todo.description}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTodo;
