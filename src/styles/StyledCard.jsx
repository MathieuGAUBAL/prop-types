import styled from 'styled-components';

const StyledCard = styled.div`
    display:block;
    width:${(props) => props.width};
    height:${(props) => props.height};
    padding:1rem;
    border:${(props) => props.border};
    box-shadow : ${(props) => props.boxShadow};
    margin: ${(props) => props.margin};
`

export default StyledCard;