import * as React from 'react';
import styled from 'styled-components';
import type { ComponentDimension } from '#src/components/input/types';
import {
  OptionProvider,
  useConstantSelectContext,
  useDropDownSelectContext,
  useOptionGroupContext,
} from './useSelectContext';
import { Checkbox } from '#src/components/Checkbox';
import { Highlight } from './Highlight';
import { OptionWrapper } from './styled';
import { getTextHighlightMeta } from './utils';
import type { TRenderChip } from './types';

interface IOptionProps {
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  dimension?: ComponentDimension;
}

const CustomOption = styled(OptionWrapper)<IOptionProps>`
  background-color: ${({ active, selected, theme }) => {
    if (selected) return theme.color['Opacity/Focus'];
    if (active) return theme.color['Opacity/Hover'];
    return 'transparent';
  }};

  color: ${({ disabled, theme }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 90'])};
  cursor: ${({ disabled }) => (disabled ? 'text' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 8px;
  flex-shrink: 0;
`;

interface IRenderOptionProps {
  disabled?: boolean;
  searchValue?: string;
  isHovered?: boolean;
}

interface IProps extends React.InputHTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  value: string;
  children?: React.ReactNode;
  renderOption?: (props: IRenderOptionProps) => React.ReactNode;
  renderChip?: TRenderChip;
}

const DropDownOption = ({
  disabled = false,
  value,
  children,
  renderOption,
  renderChip: _renderChip,
  ...htmlProps
}: IProps) => {
  const selectContext = useDropDownSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDiabled = optionGroupContext?.disabled || disabled;

  const childrenOrHiglightedChildren = React.useMemo(
    () =>
      typeof children === 'string' && selectContext?.defaultHighlighted ? <Highlight>{children}</Highlight> : children,
    [selectContext?.defaultHighlighted, children],
  );

  const defaultMultipleOption = React.useMemo(
    () => (
      <>
        {selectContext?.showCheckbox && (
          <StyledCheckbox
            checked={selectContext?.selectValue?.includes(value)}
            dimension={selectContext?.dimension === 's' ? 's' : 'm'}
            disabled={disabled}
            readOnly
          />
        )}
        {childrenOrHiglightedChildren}
      </>
    ),
    [
      selectContext?.selectValue,
      selectContext?.dimension,
      selectContext?.showCheckbox,
      childrenOrHiglightedChildren,
      value,
    ],
  );

  const ref = React.useRef<HTMLDivElement>(null);

  const renderDefaultOption = React.useCallback(
    () => (selectContext?.multiple ? defaultMultipleOption : childrenOrHiglightedChildren),
    [selectContext?.multiple, defaultMultipleOption, childrenOrHiglightedChildren],
  );

  const onClick = React.useCallback(() => selectContext?.onOptionClick?.(value), [selectContext?.onOptionClick, value]);
  const onHover = React.useCallback(() => selectContext?.onMouseEnter?.(value), [selectContext?.onMouseEnter, value]);

  const option = React.useMemo(
    () => ({
      value,
      disabled: optionIsDiabled,
      ref,
    }),
    [value, optionIsDiabled],
  );

  const resultChildren = React.useMemo(
    () =>
      renderOption
        ? renderOption({
            disabled,
            searchValue: selectContext?.searchValue,
            isHovered: selectContext?.hoverValue === value,
          })
        : renderDefaultOption(),
    [renderOption, renderDefaultOption, disabled, value, selectContext?.searchValue, selectContext?.hoverValue],
  );

  React.useEffect(() => {
    selectContext?.onDropDownOptionMount?.(option);
    return () => selectContext?.onDropDownOptionUnMount?.(option);
  }, [selectContext?.onDropDownOptionMount, selectContext?.onDropDownOptionUnMount, option]);

  return (
    <CustomOption
      ref={ref}
      disabled={optionIsDiabled}
      selected={selectContext?.selectValue === value}
      active={selectContext?.hoverValue === value}
      dimension={selectContext?.dimension}
      onMouseDown={onClick}
      onMouseEnter={onHover}
      {...htmlProps}
    >
      {resultChildren}
    </CustomOption>
  );
};

const ConstantOption = ({ disabled = false, value, children, renderOption, renderChip }: IProps) => {
  const selectContext = useConstantSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDiabled = optionGroupContext?.disabled || disabled;

  const defaultRenderChip = React.useCallback(() => children, [children]);

  const resultRenderChip = renderChip || defaultRenderChip;

  const resultChildren = React.useMemo(
    () =>
      renderOption
        ? renderOption({
            disabled,
            searchValue: selectContext?.searchValue,
          })
        : children,
    [renderOption, disabled, value, children, selectContext?.searchValue],
  );

  const option = React.useMemo(
    () => ({
      value,
      disabled: optionIsDiabled,
      children: resultChildren,
      renderChip: resultRenderChip,
    }),
    [value, optionIsDiabled, resultChildren, resultRenderChip],
  );

  React.useEffect(() => {
    selectContext?.onConstantOptionMount?.(option);
    return () => selectContext?.onConstantOptionUnMount?.(option);
  }, [selectContext?.onConstantOptionMount, selectContext?.onConstantOptionUnMount, option]);

  return null;
};

const ConstantOptionWrapper = (props: IProps) => {
  const constantSelectContext = useConstantSelectContext();

  if (!constantSelectContext) return null;

  return <ConstantOption {...props} />;
};

const DropDownOptionWrapper = (props: IProps) => {
  const [textsToHighlight, setTextsToHighlight] = React.useState<string[] | null>(null);
  const dropDownSelectContext = useDropDownSelectContext();

  const highlighted = textsToHighlight?.some(
    (text) =>
      getTextHighlightMeta(text, dropDownSelectContext?.searchValue, dropDownSelectContext?.highlightFormat)
        .shouldHighlight,
  );

  const onAddTextToHighlight = React.useCallback(
    (text) => setTextsToHighlight((prev) => Array.from(new Set([...(prev || []), text]))),
    [],
  );

  const shouldRender = textsToHighlight === null || highlighted;

  return (
    <OptionProvider onAddTextToHighlight={onAddTextToHighlight}>
      {dropDownSelectContext && shouldRender && <DropDownOption {...props} />}
    </OptionProvider>
  );
};

export const Option = (props: IProps) => (
  <>
    <ConstantOptionWrapper {...props} />
    <DropDownOptionWrapper {...props} />
  </>
);
