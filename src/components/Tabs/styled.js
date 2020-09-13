import tw, { css } from 'twin.macro'
import styled from '@emotion/styled'

export const StyledTabs = styled.ul`
   ${tw`flex flex-1`}
`

export const StyledTab = styled.li(
   ({ active }) => css`
      width: 220px;
      grid-template-columns: 1fr 40px;
      background: ${active ? '#fff' : 'transparent'};
      ${tw`h-10 grid cursor-pointer items-center border-r border-blue-300`}
      span {
         ${tw`pl-3 truncate`}
      }
      button {
         ${tw`h-10 flex items-center justify-center hover:bg-gray-200`}
      }
      &.in_dropdown {
         ${active &&
         css`
            color: #fff;
            background: ${active ? '#1a202c' : 'transparent'};
            svg {
               stroke: #fff;
            }
            button:hover {
               svg {
                  stroke: #000;
               }
            }
         `}
      }
   `
)

export const Button = styled.button`
   ${tw`h-10 w-10 border-0 flex items-center justify-center bg-transparent border-l border-blue-300 hover:bg-white`}
   svg {
      ${tw`stroke-current`}
   }
`

export const Dropdown = styled.div`
   ${tw`bg-white overflow-y-auto fixed rounded`}
   top: 44px;
   right: 8px;
   width: 240px;
   z-index: 1000;
   max-height: 240px;
   box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
   li {
      ${tw`w-full`}
      border-right: none;
   }
   ul > p {
      ${tw`h-10 flex items-center px-3`}
   }
`
