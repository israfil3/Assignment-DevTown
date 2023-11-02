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
export const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.252);
        padding: 10px 30px;

`
export const Ul = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;

`
export const Li = styled.li`
   padding: 0px 20px;
   position: relative;
   list-style: none;

`
export const Links = styled.a`
font-size: 20px;
font-weight: 1.3rem;
`
export const NavStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        ${media.small`
         display:block;
     `}

`

