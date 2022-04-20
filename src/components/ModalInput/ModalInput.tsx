import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Input, InputProps } from '@sparkpointio/sparkswap-uikit'
import { useTranslation } from 'contexts/Localization'

interface ModalInputProps {
  max: string
  symbol: string
  onSelectMax?: () => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  addLiquidityUrl?: string
  inputTitle?: string
  decimals?: number
}

const getBoxShadow = ({ isWarning = false, theme }) => {
  if (isWarning) {
    return theme.shadows.warning
  }

  return theme.shadows.inset
}

const StyledTokenInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  // box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px 8px 0;
  width: 100%;
`

const StyledInput = styled(Input)`
  box-shadow: none;
  flex: 1;
  margin: 0 8px;
  padding: 0 8px;
  background: none;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 80px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`

// const StyledErrorMessage = styled(Text)`
//   position: absolute;
//   bottom: -22px;
//
//   a {
//     display: inline;
//   }
// `

const ModalInput: React.FC<ModalInputProps> = ({
  max,
  // symbol,
  onChange,
  onSelectMax,
  value,
  // addLiquidityUrl,
  // inputTitle,
  decimals = 18,
}) => {
  const { t } = useTranslation()
  const isBalanceZero = max === '0' || !max

  // const displayBalance = (balance: string) => {
  //   if (isBalanceZero) {
  //     return '0'
  //   }
  //   const balanceBigNumber = new BigNumber(balance)
  //   if (balanceBigNumber.gt(0) && balanceBigNumber.lt(0.0001)) {
  //     return balanceBigNumber.toLocaleString()
  //   }
  //   return balanceBigNumber.toFixed(3, BigNumber.ROUND_DOWN)
  // }

  return (
    <div style={{ position: 'relative', margin: '15px 0px' }}>
      <StyledTokenInput isWarning={isBalanceZero}>
        {/* <Flex justifyContent="space-between" pl="16px">
          <Text fontSize="14px">{inputTitle}</Text>
        </Flex> */}
        <Flex alignItems="flex-end" justifyContent="space-around">
          <StyledInput
            pattern={`^[0-9]*[.,]?[0-9]{0,${decimals}}$`}
            inputMode="decimal"
            step="any"
            min="0"
            onChange={onChange}
            placeholder="0"
            value={value}
          />
          <Button size="sm" onClick={onSelectMax} mr="8px" mb="4px">
            {t('Max')}
          </Button>
          {/* <Text fontSize="16px">{symbol}</Text> */}
        </Flex>
      </StyledTokenInput>
      <Flex>
        {/* <Text fontSize="14px" color="textSubtle">
            {t('Available')}: {getFullDisplayBalance}
          </Text>  */}
      </Flex>
      {/* {isBalanceZero && (
        <StyledErrorMessage fontSize="14px" color="failure">
          {t('No tokens to stake')}:{' '}
          <Link fontSize="14px" bold={false} href={addLiquidityUrl} external color="failure">
            {t('Get %symbol%', { symbol })}
          </Link>
        </StyledErrorMessage>
      )} */}
    </div>
  )
}

export default ModalInput
