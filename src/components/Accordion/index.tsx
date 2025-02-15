import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';

import { typography } from '#src/components/Typography';
import { DefaultFontColorName } from '#src/components/themes/common';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '#src/components/common/keyboardKey';

import { Collapse } from './Collapse';
import { moveFocus, nextItem, previousItem } from './utils';

type Dimension = 'l' | 'm';

const Chevron = styled(ChevronDownOutline)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
  [data-dimension='m'] & {
    width: 20px;
    height: 20px;
  }
`;

const ItemTitleContent = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  padding: 16px 16px 15px 16px;
  [data-dimension='m'] && {
    padding: 10px 16px 9px 16px;
  }

  [data-icon='left'] & {
    flex-direction: row-reverse;
  }
`;

const TitleContent = styled.span`
  display: inline-flex;
  flex: 1 1 auto;
`;

const ItemTitle = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  width: 100%;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  overflow: visible;
  color: ${(p) => p.theme.color[DefaultFontColorName]};
  ${typography['Subtitle/Subtitle 2']}
  &:hover {
    background: ${(p) => p.theme.color['Opacity/Hover']};
  }
  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      top: -1px;
      left: 0;
      bottom: -1px;
      right: 0;
    }
  }
  &:focus,
  & > ${ItemTitleContent} {
    outline: none;
  }

  [data-dimension='m'] & {
    min-height: 38px;
    ${typography['Subtitle/Subtitle 3']}
  }
`;

const ItemWrapper = styled.div<{ opened?: boolean; disabled?: boolean }>`
  border-bottom: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  & > ${ItemTitle} ${Chevron} {
    transform: ${(p) => (p.opened ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
  ${({ disabled }) => disabled && 'pointer-events: none;'}
`;

const ItemContent = styled.div<{ contentMaxHeight: number | string }>`
  color: ${(p) => p.theme.color[DefaultFontColorName]};
  overflow-y: auto;
  max-height: ${(p) => p.contentMaxHeight};
  padding: 4px 16px 16px 16px;
  ${typography['Body/Body 1 Long']}
  [data-dimension='m'] & {
    padding: 4px 16px 10px 16px;
    ${typography['Body/Body 2 Long']}
  }
`;

const AccordionWrapper = styled.div<{ hideTopDivider: boolean; hideBottomDivider: boolean; dimension?: Dimension }>`
  position: relative;

  & > ${ItemWrapper}:first-child {
    & ${ItemTitleContent} {
      padding: ${({ dimension }) => (dimension === 'l' ? '15px 16px' : '9px 16px')};
    }
    border-top: 1px solid
      ${({ theme, hideTopDivider }) => (hideTopDivider ? 'transparent' : theme.color['Neutral/Neutral 20'])};
  }
  & > ${ItemWrapper}:last-child {
    border-bottom: 1px solid
      ${({ theme, hideBottomDivider }) => (hideBottomDivider ? 'transparent' : theme.color['Neutral/Neutral 20'])};
  }
`;

export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick' | 'title'> {
  /** Заголовок компонента */
  title: React.ReactNode;
  /** дефолтное (изначальное) состояние компонента (раскрыт/свернут) при неконтролируемом режиме работы */
  defaultExpanded?: boolean;
  /** состояние компонента (раскрыт/свернут) при контролируемом режиме работы */
  expanded?: boolean;
  /** Колбек на клик по компоненту */
  onClick?: (title: React.ReactNode, expanded: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
  /**  Устанавливает максимальную высоту, на которую открывается контент до появления вертикального скрола */
  contentMaxHeight?: number | string;
  /** Отключение компонента */
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  title,
  id,
  defaultExpanded,
  expanded: userExpanded,
  onClick,
  contentMaxHeight = '100vh',
  disabled,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const collapseOpened = userExpanded === undefined ? expanded : userExpanded;

  const itemId = React.useMemo(() => id || uid(), [id]);
  const ITEM_TITLE_ID = `accordion_title_${itemId}`;
  const ITEM_CONTENT_ID = `accordion_content_${itemId}`;

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (userExpanded === undefined) {
        onClick?.(title, !expanded, event);
        setExpanded(!expanded);
      } else {
        onClick?.(title, !userExpanded, event);
      }
    },
    [expanded, userExpanded, onClick, title],
  );
  return (
    <ItemWrapper opened={collapseOpened} data-disabled={disabled} disabled={disabled}>
      <ItemTitle
        onClick={handleClick}
        role="button"
        type="button"
        aria-expanded={collapseOpened}
        aria-controls={ITEM_CONTENT_ID}
        id={ITEM_TITLE_ID}
        {...props}
      >
        <ItemTitleContent tabIndex={-1}>
          <TitleContent>{title}</TitleContent>
          <Chevron aria-hidden />
        </ItemTitleContent>
      </ItemTitle>
      <Collapse opened={collapseOpened} contentMaxHeight={contentMaxHeight}>
        <ItemContent
          contentMaxHeight={contentMaxHeight}
          role="region"
          aria-labelledby={ITEM_TITLE_ID}
          id={ITEM_CONTENT_ID}
        >
          {children}
        </ItemContent>
      </Collapse>
    </ItemWrapper>
  );
};

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Расположение иконки шеврона в заголовке. По умолчанию иконка выравнивается по правому краю. */
  iconPosition?: 'right' | 'left';
  /** Скрыть верхний разделитель (верхнюю серую полоску) */
  hideTopDivider?: boolean;
  /** Скрыть нижний разделитель (нижнюю серую полоску) */
  hideBottomDivider?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  dimension = 'l',
  iconPosition = 'right',
  hideTopDivider = false,
  hideBottomDivider = false,
  onKeyDown,
  ...props
}) => {
  const accordionRef = React.useRef<HTMLDivElement | null>(null);
  const handleKeyDown = React.useCallback(
    (e) => {
      let focusedOption: any = ((accordionRef.current && accordionRef.current.ownerDocument) || document).activeElement;
      // если фокус находится на AccordionItem Title, то можно переключаться между accordion items с помощью ArrowDown, ArrowUp, Home, End
      if (focusedOption.id.indexOf('accordion_title') > -1 && focusedOption.tagName.toLowerCase() === 'button') {
        do {
          focusedOption = focusedOption?.parentNode;
        } while (focusedOption.parentNode !== accordionRef.current);

        const code = keyboardKey.getCode(e);

        if (code === keyboardKey.ArrowDown) {
          moveFocus(accordionRef.current, focusedOption, nextItem);
          e.preventDefault();
        } else if (code === keyboardKey.ArrowUp) {
          moveFocus(accordionRef.current, focusedOption, previousItem);
          e.preventDefault();
        } else if (code === keyboardKey.Home) {
          e.preventDefault();
          moveFocus(accordionRef.current, null, nextItem);
        } else if (code === keyboardKey.End) {
          e.preventDefault();
          moveFocus(accordionRef.current, null, previousItem);
        }
      }
      onKeyDown?.(e);
    },
    [accordionRef.current],
  );
  return (
    <AccordionWrapper
      ref={accordionRef}
      data-dimension={dimension}
      data-icon={iconPosition}
      hideTopDivider={hideTopDivider}
      hideBottomDivider={hideBottomDivider}
      dimension={dimension}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </AccordionWrapper>
  );
};

Accordion.displayName = 'Accordion';
