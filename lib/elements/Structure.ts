import styled from '../theme';

export const Box = styled.div`
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid ${props => props.theme.lightGrey};
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: ${props => props.theme.lightGrey};
    margin: 20px 0;
`