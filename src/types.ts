import React from 'react'

export interface HeaderProps {
  label?: string | undefined
  showLabel?: boolean
  hideLabel?: boolean
  headerShadow?: boolean
  navigationType?: 'DRAWER' | 'STACK' | undefined
  preventDefault?: boolean | undefined
  onBackPress?: () => void
  RenderMainContainer?: React.FC | undefined
  RenderLeftContainer?: React.FC | undefined
  isCloseNavigation?: boolean
}
