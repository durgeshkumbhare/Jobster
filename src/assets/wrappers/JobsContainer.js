import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 1rem;
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 1rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
    }
  }
`
export default Wrapper
