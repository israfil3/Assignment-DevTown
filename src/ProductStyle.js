import styled, { css } from 'styled-components';

export const breakpoints = {
        small: '576px',
        medium: '768px',
        large: '992px',
        xlarge: '1200px',
      };

 export const media = {
        small: (...args) => css`
          @media (max-width: ${breakpoints.small}) {
            ${css(...args)};
          }
        `,
        medium: (...args) => css`
          @media (max-width: ${breakpoints.medium}) {
            ${css(...args)};
          }
        `,
        large: (...args) => css`
          @media (max-width: ${breakpoints.large}) {
            ${css(...args)};
          }
        `,
        xlarge: (...args) => css`
          @media (max-width: ${breakpoints.xlarge}) {
            ${css(...args)};
          }
        `,
  };

  export const Img = styled.img`
            width: 200px;
            height: 200px;
            margin: 0px auto;
  
  `

  export const DivP = styled.div`
        width: 300px;
        border: 1px solid green;
        text-align: center;
        border-radius: 10px;

`
export const DivA = styled.div`
        width: 80%;
        margin:10px auto;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(3,1fr);
        gap: 10px 10px;
      


`
export const P = styled.p`
    margin: 10px 0px;
`

export const DivC = styled.div`
        margin: 15px 0px;  
`

export const H1 = styled.h1`
      text-align: center;
      margin-top: 20px;
`
export const Select = styled.select`
      padding: 7px 10px;

`
