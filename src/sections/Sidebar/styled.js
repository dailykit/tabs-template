import styled, { css } from 'styled-components'

export const StyledSidebar = styled.aside(
   ({ visible }) => css`
      top: 40px;
      bottom: 0;
      width: 240px;
      position: absolute;
      background: #003541;
      left: 0;
      transition: 0.3s ease-in-out;
      transform: translateX(${visible ? '0' : '-240px'});
   `
)

export const StyledHeading = styled.h3`
   color: #6b9eb7;
   font-size: 14px;
   padding: 16px 16px 8px 16px;
   text-transform: uppercase;
   font-weight: 400;
   letter-spacing: 0.5px;
`

export const StyledList = styled.ul``

export const StyledListItem = styled.li`
   color: #fff;
   height: 40px;
   display: flex;
   padding: 0 16px;
   cursor: pointer;
   align-items: center;
   font-weight: 300;
   letter-spacing: 0.3px;
   transition: 0.3s ease-in-out;
   :hover {
      background: #014352;
   }
`
