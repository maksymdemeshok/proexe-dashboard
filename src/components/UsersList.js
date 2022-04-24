import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../UI/Button";
import User from "./User";
import Wrapper from "../UI/Wrapper";
import { Link } from "react-router-dom";
import { sortUsers } from "../store/usersSlice";


const ListHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  margin-bottom: 15px;
`;
const TableContainer = styled.div`
  padding: 20px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  overflow-x: auto;
  & p {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
`;
const Table = styled.table`
  border: 1px solid gray;
  width: 100%;

  border-collapse: collapse;
  & thead {
    background-color: lightgray;
  }
  & thead th {
    padding: 20px;
  }
`;

const UsersList = () => {

    const users = useSelector((state) => state.users.users);

    const dispatch = useDispatch()
    
  return (
    <Wrapper>
      <ListHead>
        <h2>User list</h2>
        <Link to="/add-new">
          <Button bgcolor="blue">Add new</Button>
        </Link>
      </ListHead>

      <TableContainer>
        {!users.length && <p>No users added yet</p>}
        {users.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th style={{cursor:'pointer'}} onClick={()=>{dispatch(sortUsers())}}>Username(A-Z)</th>
                <th>Email</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return <User key={user.id} {...user} />;
              })}
            </tbody>
          </Table>
        )}
      </TableContainer>
    </Wrapper>
  );
};

export default UsersList;
