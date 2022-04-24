import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import ReactDOM from "react-dom";

const BackdropStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;
`;
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.27);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  max-width: 450px;
  width: 100%;
  overflow: hidden;

  & div {
    padding: 10px 20px;
    border-bottom: 1px solid gray;
  }
  div > p {
    padding: 20px;
    text-align: center;
    font-weight: 400;
  }
  div > h3 {
    text-align: center;
    font-weight: 600;
  }

  & .actions {
    border: none;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
  }
`;

const Backdrop = (props) => {
  return (
    <BackdropStyled>
      <Container>
        <div>
          <h2>Delete</h2>
        </div>
        <div>
          <p>Do you really want to delete this user? </p>
          <h3>{props.name}</h3>
        </div>
        <div className="actions">
          <Button onClick={props.modalCancel} bgcolor="gray">
            Cancel
          </Button>
          <Button onClick={props.deleteConfirm} bgcolor="red">
            Delete
          </Button>
        </div>
      </Container>
    </BackdropStyled>
  );
};
const DeleteModal = ({ name, deleteConfirm, modalCancel }) => {
  return ReactDOM.createPortal(
    <Backdrop
      name={name}
      modalCancel={modalCancel}
      deleteConfirm={deleteConfirm}
    />,
    document.getElementById("modal-root")
  );
};

export default DeleteModal;
