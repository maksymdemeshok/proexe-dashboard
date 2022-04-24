import styled from 'styled-components'

const StyledWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.27);
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%' };
  margin: 0 auto;

`;

const Wrapper = (props) => {
    return <StyledWrapper width={props.width}>
        {props.children}
    </StyledWrapper>
}

export default Wrapper