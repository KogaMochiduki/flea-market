import { styled } from 'styled-components'
import { theme } from '@/themes'
import { toPropValue } from '@/utils/styles'

/**
 * テキストインプット
 */
const Input = styled.input<{ hasError?: boolean; hasBorder?: boolean }>`
  ${toPropValue('color', 'black', theme)}
  ${({ hasBorder, hasError }) => {
    const styles = []
    if (hasBorder) {
      styles.push('border: 1px solid ')
      if (hasError) {
        styles.push(theme.colors.danger)
      } else {
        styles.push(theme.colors.border)
      }
      styles.push(';\n' + 'border-radius: 5px;')
    } else {
      styles.push('border: none;')
    }
    return styles.join('\n')
  }}
  padding: 11px 12px 12px 9px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: ${theme.colors.gray};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

Input.defaultProps = {
  hasBorder: true,
}

export default Input
