import { css } from 'styled-components';

export const grid = ({ value }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${value}, 1fr));
    gap: 2rem;
`