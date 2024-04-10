import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  margin: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin: 1rem;
  }
  @media (min-width: 1120px) {
    margin: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`
export default Wrapper
