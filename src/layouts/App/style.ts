import { Flex } from 'antd';
import { styled } from 'styled-components';

export const AppWrapper = styled(Flex)`
    padding: 10px 20px;
    min-height: 100dvh;
    margin: 0 auto;
    max-width: 500px;
    padding-bottom: 100px;
    position: relative;
    background-color: var(--color-bg);
`;

export const ContentWrapper = styled(Flex)`
   flex-shrink: 1;
   flex-grow: 1;
   overflow-x: hidden;
`;
