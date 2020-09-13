import tw, { css } from 'twin.macro'
import styled from '@emotion/styled'

export const StyledSidebar = styled.aside(
   ({ visible }) => css`
      ${tw`bottom-0 absolute left-0 bg-gray-900 text-white`}
      top: 40px;
      width: 240px;
      transition: 0.3s ease-in-out;
      transform: translateX(${visible ? '0' : '-240px'});
   `
)

export const StyledList = styled.ul`
   ${tw`p-2 space-y-1`}
`

export const StyledListItem = styled.li`
   ${tw`px-3 h-10 flex cursor-pointer items-center rounded hover:bg-gray-800`}
`
