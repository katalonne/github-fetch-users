import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Icon } from './Base'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  animation: ${rotate} 1s cubic-bezier(0.65, 0.25, 0.25, 0.75) infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Spinner = ({ size, ...props }) => (
  <Rotate {...props}>
    <Icon a11yTitle="Spinner" size={size}>
      <g>
        <path
          d="M25 16a9 9 0 1 0-18 0 9 9 0 0 0 18 0zm4 0c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13z"
          fillOpacity=".25"
        />
        <path d="M16 7V3c3.423 0 6.722 1.338 9.192 3.808l-2.828 2.828A8.964 8.964 0 0 0 15.999 7z" />
      </g>
    </Icon>
  </Rotate>
)

Spinner.propTypes = {
  size: PropTypes.number,
}

Spinner.defaultProps = {
  size: 32,
}