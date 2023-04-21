// MyButton.tsx
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
background: palevioletred;
border-radius: 3px;
border: none;
color: white;
`;

interface Props {
    children?: ReactNode
}

const MyButton = ({children} : Props) => {
    return (
        <StyleButton >
            {children}

            <p> Additional text local change</p> 
            </StyleButton>
    )
}

export default MyButton;
