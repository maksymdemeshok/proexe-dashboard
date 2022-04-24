import UsersList from "./components/UsersList";
import styled from "styled-components";
import AddUser from "./components/AddUser";
import { Route, Routes, Link } from "react-router-dom";
import {useEffect } from "react";
import { fetchUsers } from "./store/usersSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  padding: 20px;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Link to="/">
        {" "}
        <h1>Dashboard</h1>
      </Link>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/add-new" element={<AddUser />} />
      </Routes>
    </Container>
  );
}

export default App;
