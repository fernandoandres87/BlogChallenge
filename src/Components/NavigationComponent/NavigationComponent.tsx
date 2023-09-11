import { FC } from 'react'
import { SCNCNavigation } from './NavigationComponent.style'

export type NavigationComponentProps = {
  label: string
  isSelected: boolean
  handleClickNavigation: () => void
}

export const NavigationComponent: FC<NavigationComponentProps> = ({
  label,
  isSelected,
  handleClickNavigation = () => null,
}) => (
  <SCNCNavigation onClick={handleClickNavigation} isSelected={isSelected}>
    {label}
  </SCNCNavigation>
)
