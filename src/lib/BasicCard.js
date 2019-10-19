import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import { H4 } from './Heading'
import { Image } from './Image'
import { Card } from './Card'
import { SkeletonLine } from './Skeleton'
import { color, transition } from './theme'

const StyledH4 = styled(H4)`
  color: ${props => (props.colored ? color.earth : color.space)};
  transition: color ${transition};
  a:hover &,
  a:focus & {
    color: ${props => (props.colored ? color.earthLight : color.spaceMedium)};
  }
`

export const BasicCard = ({
  loading,
  adornment,
  imageUrl,
  imageWidth,
  imageHeight,
  title,
  moreUrl,
  subtitle,
  info,
  link,
  ...props
}) => (
  <Card
    {...props}
    adornment={adornment}
    image={
      imageUrl && (
        <Image
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt={title}
          lazyLoad={loading ? false : true}
          rounded
        />
      )
    }
  >
    <StyledH4 colored={!imageUrl}>
      {loading ? <SkeletonLine width={1 / 1.12} /> : title}
    </StyledH4>
    {loading 
      ? 
      <SkeletonLine width={1 / 1.3} /> 
      :
      <Link component={Button} to={moreUrl} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    }
  </Card>
)

BasicCard.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAspectRatio: PropTypes.string,
}

BasicCard.defaultProps = {
  imageAspectRatio: '3x2',
}
