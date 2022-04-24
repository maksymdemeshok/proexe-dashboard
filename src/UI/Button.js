import styled from 'styled-components'

const StyledBtn = styled.button`
    border:none;
    border-radius:5px;
    padding: 10px 25px;
    background-color: ${props => props.bgcolor};
    font-size: 18px;
    color: white;
    cursor:pointer;
    &:hover {
        background-color: ${props => 'dark' + props.bgcolor}
    }
    
`

const Button = (props) => {
    return <StyledBtn bgcolor={props.bgcolor} onClick={props.onClick}>
    {props.children}
    </StyledBtn>
}

export default Button;