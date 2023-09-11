import styled from 'styled-components'
import { BackdropProps } from './Background.interface'

export const SCCHMBackdrop = styled.div<BackdropProps>`
  backdrop-filter: blur(2.5px);
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ zIndex }) => zIndex || 1};
`
