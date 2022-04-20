import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@sparkpointio/sparkswap-uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import { Token } from 'config/constants/types'
import TokenPairImage from 'components/TokenPairImage'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  farmSymbol?: string
  tokenSymbol?: string
  rewardToken?: string
  token: Token
  quoteToken: Token
  pairToken?: Token
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  farmSymbol,
  rewardToken,
  token,
  pairToken,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Flex flexDirection="row" alignItems="">
        <Heading mb="4px" style={{ textAlign: 'left' }}>
          Stake <br /> {lpLabel.split(' ')[0]} <br /> Earn {rewardToken}
        </Heading>
      </Flex>
      <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={pairToken} width={64} height={64} />
      {/* <Image src={`/images/farms/${farmImage}.svg`} alt={tokenSymbol} width={64} height={64} /> */}
    </Wrapper>
  )
}

export default CardHeading
