import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { backgroundColor, colorTextMixin, DropDownItemDimension, paddings, styleTextMixin } from './mixins';

export interface DropDownItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Отключение секции */
  disabled?: boolean;
  /** Размер DropDownItems */
  dimension?: DropDownItemDimension;
  /** Активная секция DropDownItems */
  selected?: boolean;
  /** Значение DropDownItems */
  value?: string | number | undefined;
}

const Item = styled.li<{
  dimension: DropDownItemDimension;
  selected?: boolean;
  width?: number;
  id?: string;
}>`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: wrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  ${paddings}
  ${styleTextMixin}
  ${colorTextMixin}
  ${backgroundColor}
  
  &:hover {
    background-color: ${(p) => p.theme.color.background.secondary};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(p) => p.theme.color.background.secondary};
  }

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: ${(p) => p.theme.color.background.primary};
    color: ${(p) => p.theme.color.text.tertiary};
    && *[fill^='#'] {
      fill: ${(p) => p.theme.color.text.tertiary};
    }
  }
`;

export const DropDownItem = React.forwardRef<HTMLLIElement, DropDownItemProps>(
  ({ children, disabled, dimension = 'l', selected = false, id, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        dimension={dimension}
        tabIndex={!disabled ? props.tabIndex || 0 : undefined}
        selected={selected}
        id={id}
        data-disabled={disabled}
        {...props}
      >
        {children}
      </Item>
    );
  },
);
