import styled from "styled-components";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/usersSlice";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const Row = styled.tr`
  border-bottom: 1px solid gray;
  text-align: center;
  & td {
    padding: 20px;
  }
`;

const User = ({ id, name, username, email, address }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteUser({ id }));
  const deleteHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const modalCancel = () => {
    setShowModal(false);
  };

  const deleteConfirm = () => {
    setShowModal(false);
    onDelete();
  };

  return (
    <>
      <Row>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{address.city}</td>
        <td>
          <Button bgcolor="orange">edit</Button>
        </td>
        <td>
          <Button onClick={deleteHandler} bgcolor="red">
            delete
          </Button>
        </td>
      </Row>
      {showModal && (
        <DeleteModal
          modalCancel={modalCancel}
          deleteConfirm={deleteConfirm}
          name={name}
        />
      )}
    </>
  );
};

export default User;
