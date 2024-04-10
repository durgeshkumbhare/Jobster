import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  img {
    margin-top: 5rem;
    width: 90vw;
    display: block;
    max-width: 600px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3{
    margin-top: 1.5rem;
    font-weight: 500;
  }
  p{
    margin-top: -1rem;
    color: #829ab1;
  }
`;

export default Wrapper;
