import styled from "styled-components";

export const StyledTransactionTable = styled.table`
width: 70%;
thead{
    background-color: gray;
}
`

export const StyledTransaction= styled.tr`
/* background-color: green; */
background-color: ${(props) => ( backgroundColor(props.type))};
`

function backgroundColor(type) {
    // console.log('backgroundColor', type.children)
    if (type === 'payment') return 'red';
    if (type === 'withdrawal') return 'blue';
    if (type === 'invoice') return 'green;'
    if (type === 'deposit') return 'olive';
}