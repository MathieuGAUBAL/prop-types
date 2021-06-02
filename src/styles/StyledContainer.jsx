import styled from 'styled-components';

 const StyledContainer = styled.div`
    display: ${(props) => props.flex ? 'flex;' : 'block'};
    ${(props) => props.flexWrap ? 'flex-wrap: wrap;' : 'no-wrap'}
    ${(props) => props.justifySpaceAround ? 'justify-content: space-around;' : 'text-align :center;'};
    `   


export default StyledContainer;