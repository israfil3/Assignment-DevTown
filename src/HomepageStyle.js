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

export const H1 = styled.h1`
       font-size : 35px;
       margin: 10px 0px;

   `

   export const P = styled.p`
   font-size : 20px;
   margin: 10px 0px;


`

   export const Div = styled.div`
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 50px;
       margin: 20px 0px
       ${
        media.small`
          flex-direction: column;
        `
       }
       ${
        media.medium`
          flex-direction: column;
        `
       }

   `
   export const Button = styled.button`
            background: green;
            padding: 10px 14px;
            font-size: 15px;
            margin : 10px 0px;
            border: 0;
            color: white;
            border-radius: 7px;
`

export const LotImg  = styled.div`
       width: 50%;
       ${media.small`
            width: 100%;
       `

       }

`



