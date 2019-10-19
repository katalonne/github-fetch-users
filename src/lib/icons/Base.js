import React from 'react'
import styled from '@emotion/styled'

const SvgWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: ${props => `${props.iconSize || 32}px`};
  height: ${props => `${props.iconSize || 32}px`};
  min-width: ${props => `${props.iconSize || 32}px`};
  min-height: ${props => `${props.iconSize || 32}px`};
  position: relative;
  color: inherit;
`

const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

export const Icon = ({ size = 32, children, a11yTitle, ...props }) => (
  <SvgWrapper iconSize={size} className="icon" {...props}>
    <InlineSvg
      aria-label={a11yTitle}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fit
    >
      {children}
    </InlineSvg>
  </SvgWrapper>
)