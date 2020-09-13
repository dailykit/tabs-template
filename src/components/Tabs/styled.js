import tw, {css} from 'twin.macro'
import styled from '@emotion/styled'

export const StyledTabs = styled.ul`
   ${tw`flex`}
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
      div {
         ${tw`h-10 flex items-center justify-center hover:bg-gray-200`}
      }
   `
)
