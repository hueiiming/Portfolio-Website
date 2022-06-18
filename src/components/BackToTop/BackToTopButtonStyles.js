import styled from "styled-components"

export const ButtonTop = styled.a`
    position: fixed;
    bottom: 50px;
    right: 70px;
    height: 100px;
    cursor: pointer;
    backgroundColor: Transparent;
    backgroundRepeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;

    @media ${props => props.theme.breakpoints.md} {
        right: 20px;
        font-size: 10px;
        height: 40px;
    }

    @media ${props => props.theme.breakpoints.sm} {
        right: 10px;
        font-size: 8px;
        height: 40px;
    }
`
