import {
  changeInputData,
  CustomInputHandler,
  InputData,
  isInputDataDifferent,
} from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Container } from '../Container';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import type { ForwardedRef, InputHTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { StatusIcon } from '../StatusIcon';
import { singleMediumGroupBorderRadius } from '#src/components/common/utils/borderRadius';

const EyeCloseIcon = styled(EyeCloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const EyeIcon = styled(EyeOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const ClearIcon = styled(CloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const iconSizeValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) =>
    horizontalPaddingValue(props) +
    (iconSizeValue(props) + 8) * (props.iconCount ?? 0) -
    8 * (props.iconCount ? 1 : 0)}px;
`;

const disabledColors = css`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  border-color: transparent;
`;

const BorderedDiv = styled.div`
  position: absolute;
  inset: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] & {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] & {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] & {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};

  &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  &:disabled + ${BorderedDiv} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${BorderedDiv} {
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.color['Neutral/Neutral 60'])};
  }

  &:invalid + ${BorderedDiv}, &:invalid:hover + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='error'] &:hover + ${BorderedDiv}, [data-status='error'] &:focus + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &:hover + ${BorderedDiv}, [data-status='success'] &:focus + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] &,
  &:disabled {
    ${disabledColors}
  }

  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] &:hover + ${BorderedDiv}, [data-read-only] &:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0 ${horizontalPaddingValue}px;

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
  }

  ${colorsBorderAndBackground}
  ${extraPadding}
  ${ieFixes}
`;

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding-right: ${horizontalPaddingValue}px;

  & > svg {
    border-radius: ${(p) => singleMediumGroupBorderRadius(p.theme.shape)};
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

function defaultHandleInput(newInputData: InputData | null): InputData {
  return newInputData || {};
}

const stopEvent = (e: React.MouseEvent) => e.preventDefault();

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображать иконку статуса */
  displayStatusIcon?: boolean;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: ForwardedRef<HTMLDivElement>;

  /**
   * Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
   * Используется для создания масок ввода
   */
  handleInput?: CustomInputHandler;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,

      displayStatusIcon,
      displayClearIcon,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      children,
      className,
      style,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const iconArray = React.Children.toArray(icons);

    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    if (type === 'password') {
      const Icon = isPasswordVisible ? EyeIcon : EyeCloseIcon;
      iconArray.push(
        <Icon
          key="eye-icon"
          aria-hidden
          onClick={() => {
            setPasswordVisible(!isPasswordVisible);
          }}
        />,
      );
    }

    if (displayStatusIcon) {
      iconArray.push(<StatusIcon key="status-icon" status={status} aria-hidden />);
    }

    if (displayClearIcon) {
      iconArray.unshift(
        <ClearIcon
          key="clear-icon"
          onClick={() => {
            if (inputRef.current) {
              changeInputData(inputRef.current, { value: '' });
            }
          }}
          aria-hidden
        />,
      );
    }

    const iconCount = iconArray.length;

    // const inputData = value !== undefined && value !== null ? handleInput({ value: String(value) }) : {};

    React.useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);
      function oninput(this: HTMLInputElement) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(this, { ...inputData, value: '' });
        } else {
          changeInputData(this, inputData);
        }
      }

      // Чтение selectionStart в Safari при type='date' вызывает ошибку
      if (type !== 'date' && inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(node, { ...inputData, value: '' });
        } else {
          changeInputData(node, inputData);
        }

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [inputRef.current, handleInput, placeholder]);
    return (
      <Container
        className={className}
        style={style}
        disabled={props.disabled}
        dimension={props.dimension}
        ref={containerRef}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        {...(props.disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        <Input
          ref={refSetter(ref, inputRef)}
          {...props}
          placeholder={placeholder}
          iconCount={iconCount}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
        />
        <BorderedDiv />
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} dimension={props.dimension}>
            {iconArray}
          </IconPanel>
        )}
        {children}
      </Container>
    );
  },
);

TextInput.defaultProps = {
  dimension: 'm',
} as const;
TextInput.displayName = 'TextInput';
