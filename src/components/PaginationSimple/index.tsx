import * as React from 'react';
import styled from 'styled-components';
import { uid } from '#src/components/common/uid';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  overflow-x: scroll;
  list-style: none;

  & > li {
    margin-right: 8px;
  }

  & > li:last-child {
    margin-right: 0;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;
`;

const ItemContentWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

const ItemContent = styled.div`
  display: inline-flex;
  height: 4px;
  width: 16px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 20']};

  [aria-selected='true'] & {
    background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }
`;

const Item = styled.button`
  width: 24px;
  height: 12px;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};

  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  appearance: none;
  border: 2px solid transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    border-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    & ${ItemContent} {
      background-color: ${({ theme }) => theme.color['Primary/Primary 80']};
    }
  }
  &:focus,
  & > ${ItemContentWrapper} {
    outline: none;
  }

  &:hover ${ItemContent} {
    background-color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }
  &:active ${ItemContent} {
    background-color: ${({ theme }) => theme.color['Primary/Primary 80']};
  }
`;

export interface PaginationSimpleProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onChange'> {
  /**  Общее количество секций */
  totalItems: number;
  /** Номер выбранной секции (нумерация с 0) */
  currentItem: number;
  /** Колбек на изменение текущей секции */
  onChange: (event: any, item: number) => void;
}

export const PaginationSimple: React.FC<PaginationSimpleProps> = ({
  totalItems,
  currentItem,
  onChange,
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {children &&
        React.Children.toArray(children).map((child, index) => {
          const id = uid();
          const handleChange = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) =>
            onChange(event, index);
          return (
            <li aria-selected={currentItem === index} key={id} onClick={handleChange}>
              {child}
            </li>
          );
        })}
    </Wrapper>
  );
};

export const PaginationSimpleItem: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <Item {...props}>
      <ItemContentWrapper tabIndex={-1}>
        <ItemContent />
      </ItemContentWrapper>
    </Item>
  );
};

PaginationSimple.displayName = 'PaginationSimple';
