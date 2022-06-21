import type { Appearance, Dimension, StyledButtonProps } from './types';
import type { ButtonHTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';
import { appearanceMixin } from './appearanceMixin';
import { dimensionMixin } from './dimensionMixin';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;

  /** Размер кнопки */
  dimension?: Dimension;

  /** Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле */
  displayAsDisabled?: boolean;

  /** Отображать кнопку квадратной*/
  displayAsSquare?: boolean;

  /** Состояние загрузки */
  loading?: boolean;
}

const ButtonContent = styled.div<{ dimension?: Dimension; $loading?: boolean }>`
  vertical-align: top;

  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 24px;

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  [data-dimension='s'] & {
    height: 20px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledButton = styled.button.attrs<
  StyledButtonProps,
  { 'data-dimension'?: Dimension; 'data-appearance'?: string }
>((props) => ({
  'data-dimension': props.dimension,
  'data-appearance': [props.appearance, props.displayAsDisabled ? 'disabled' : undefined]
    .filter((val) => val !== undefined)
    .join(' '),
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  appearance: none;
  vertical-align: center;

  ${appearanceMixin};

  ${dimensionMixin}

  ${ButtonContent} {
    visibility: ${(p) => (p.$loading ? 'hidden' : 'visible')};
  }

  &:hover {
    cursor: pointer;
  }

  pointer-events: ${(p) => (p.$loading || p.disabled ? 'none' : 'all')};
`;

const StyledSpinner = styled(Spinner)<{ dimension?: Dimension }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ appearance = 'primary', dimension = 'xl', type = 'button', loading = false, children, ...props }, ref) => {
    const spinnerDimension = dimension === 's' ? 's' : 'm';
    const spinnerInverse = appearance !== 'secondary' && appearance !== 'ghost';

    return (
      <StyledButton ref={ref} appearance={appearance} dimension={dimension} type={type} $loading={loading} {...props}>
        {loading && <StyledSpinner dimension={spinnerDimension} inverse={spinnerInverse} />}
        <ButtonContent>
          {React.Children.toArray(children).map((child, index) =>
            typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
          )}
        </ButtonContent>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
