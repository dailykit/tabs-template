import tw from 'twin.macro'
import styled from '@emotion/styled'

export const StyledHeader = styled.header`
   ${tw`flex bg-blue-200`}
`

export const StyledMenu = styled.div`
   ${tw`w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white focus:bg-white`}
`

export const StyledNav = styled.div`
   ${tw`flex border-l border-r border-blue-300`}
   button {
      ${tw`h-10 w-10 border-0 flex items-center justify-center cursor-pointer bg-transparent hover:bg-white focus:bg-white`}
   }
`
