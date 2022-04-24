import Wrapper from "../UI/Wrapper";
import styled from "styled-components";
import Button from "../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../store/usersSlice";

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  margin: 50px auto;
  padding: 0px 10px;
  box-sizing:border-box;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.label`
  margin-right: 15px;
`;
const Input = styled.input`
  position: relative;
  width: 80%;
  border: ${(props) =>
    props.isValid ? "1px solid lightgray" : "1px solid red"};
  padding: 5px 10px;
`;

const HeadWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 20px;
  margin-bottom: 15px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;
const AddUser = () => {
  let navigate = useNavigate();
  const [nameIsValid, setNameIsValid] = useState(true);
  const [mailIsValid, setMailIsValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setMail] = useState("");

  const dispatch = useDispatch();
  const onAddUser = () => dispatch(addNewUser({ name: name, email: email }));

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onMailChange = (e) => {
    setMail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      setNameIsValid(true);
      if (email.includes("@")) {
        setMail("");
        setName("");

        onAddUser();
        navigate("/");
      } else {
        setMailIsValid(false);
      }
    } else {
      setNameIsValid(false);
    }
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setMail("");
    setName("");
    navigate("/");
  };

  return (
    <Wrapper width="70%">
      <HeadWrapper>
        <h2>Form</h2>
      </HeadWrapper>

      <StyledForm>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            isValid={nameIsValid}
            onChange={onNameChange}
            value={name}
            id="name"
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="mail">Email</Label>
          <Input
            isValid={mailIsValid}
            onChange={onMailChange}
            value={email}
            id="mail"
            type="email"
          />
        </InputWrapper>
        <ActionsWrapper>
          <Button onClick={cancelHandler} bgcolor="red">
            Cancel
          </Button>
          <Button onClick={submitHandler} bgcolor="green">
            Submit
          </Button>
        </ActionsWrapper>
      </StyledForm>
    </Wrapper>
  );
};

export default AddUser;
