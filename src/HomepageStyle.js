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

export const FooterS  = styled.div`
              display: flex;
              align-items: center;
              background-color: rgba(0, 128, 0, 0.424);
              justify-content: center;
              gap: 150px;
              ${media.small`
              flex-direction: column;
              gap: 10px;
              align-items: left;
              justify-content: left;
              width: 100%;
              `

              }
       `

export const Pf = styled.p`
        font-size: 20px;
        margin: 10px 0px;
        `
export const DivPo = styled.div`
            font-size: 20px;
            margin: 10px 0px;
           
`
  export const Input = styled.input`
            font-size: 20px;
           padding: 6px 8px;
           border-radius: 7px;
           margin: 0px 5px;
           
   `
  export const Icon = styled.div`
       font-size: 25px;
       display: grid;
       grid-template-columns: repeat(4,1fr);
       margin: 6px 0px;
       color: white
`

export const DivLA = styled.div`
        text-align: center;
        padding: 10px 0px;
        background-color: rgba(0, 128, 0, 0.510);
`
