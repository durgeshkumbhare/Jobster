import styled from 'styled-components'

const Wrapper = styled.main`
nav{
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;
}
h1{
    font-weight: 600;
    span{
        color:#3b82f6;
    }
}
p{
    color: #627d98;
}
.page{
    height: calc(100vh - 5rem);
    width: 90vw;
    max-width: 1120px;
    display: grid;
    align-items: center;
    margin: 0 auto;
}
.hero-img{
    display: none;
}
@media (min-width: 992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .hero-img{
        display: block;
    }
}
`
export default Wrapper
