import { INPUT_DIMENSIONS_VALUES } from '#/components/input';
import { Modal, ModalButtonPanel, ModalContent, ModalTitle } from '#/components/Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import styled, { css, keyframes } from 'styled-components';
import { Highlight, Option, OptionGroup, SearchSelect } from './index';
import { IOnCloseProps } from './types';
import { Button } from '#/components/Button';
import { useState } from '@storybook/addons';

export default {
  title: 'Input/SearchSelect',
  component: SearchSelect,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A72429',
    },
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    isLoading: {
      control: { type: 'boolean' },
    },

    multiple: {
      control: { type: 'boolean' },
    },

    readOnly: {
      control: { type: 'boolean' },
    },

    disableCopying: {
      control: { type: 'boolean' },
    },

    defaultHighlighted: {
      control: { type: 'boolean' },
    },

    showCheckbox: {
      control: { type: 'boolean' },
    },

    displayStatusIcon: {
      control: { type: 'boolean' },
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    placeholder: {
      type: 'string',
    },

    onChange: {
      action: 'onChange',
    },
  },
} as ComponentMeta<typeof SearchSelect>;

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

const Icon = styled.div<{ shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormValuesWrapper = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid black;
  border-radius: 8px;
  min-height: 100px;
  padding: 12px;
`;

const ExtraText = styled.div`
  color: #626f84;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

const OPTIONS_ASYNC = [
  {
    value: 'val1',
    text: 'Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
  },
];

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const SimpleTemplate: ComponentStory<typeof SearchSelect> = (props) => {
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <SearchSelect
      className="Search"
      value={selectValue}
      onChange={onChange}
      placeholder="Placeholder"
      highlightFormat="wholly"
    >
      {OPTIONS_SIMPLE.map((option, ind) => (
        <Option key={option} value={option} disabled={ind === 4}>
          {option}
        </Option>
      ))}
    </SearchSelect>
  );
};

const CustomOptionTemplate: ComponentStory<typeof SearchSelect> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <SearchSelect value={selectValue} onChange={onChange}>
      {OPTIONS.map((option) => (
        <Option key={option.value} value={option.value}>
          <Icon />
          <TextWrapper>
            <Highlight>{option.text}</Highlight>
            <ExtraText>
              <Highlight>{option.extraText}</Highlight>
            </ExtraText>
          </TextWrapper>
        </Option>
      ))}
    </SearchSelect>
  );
};

interface IMyIncredibleOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const MyIncredibleOption = ({ text, shouldAnimate }: IMyIncredibleOptionProps) => (
  <>
    <Icon shouldAnimate={shouldAnimate} />
    <TextWrapper>
      <Highlight>{text}</Highlight>
    </TextWrapper>
  </>
);

const RenderPropsTemplate: ComponentStory<typeof SearchSelect> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <SearchSelect value={selectValue} onChange={onChange}>
      {OPTIONS.map(({ text, value }) => (
        <Option
          key={value}
          value={value}
          renderOption={({ isHovered }) => (
            <MyIncredibleOption text={text} shouldAnimate={isHovered && value !== selectValue} />
          )}
        />
      ))}
    </SearchSelect>
  );
};

const OptionGroupTemplate: ComponentStory<typeof SearchSelect> = () => {
  const [selectValue, setSelectValue] = React.useState('Похо Торо Моронго');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  return (
    <SearchSelect value={selectValue} onChange={onChange} dimension="xl">
      <OptionGroup label="Сегодня выступают">
        <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
        <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
      </OptionGroup>
      <OptionGroup label="Группа фрукты" disabled>
        <Option value="Саша Даль">Саша Даль</Option>
        <Option value="Алексей Елесин">Алексей Елесин</Option>
        <Option value="Константин Ионочкин">Константин Ионочкин</Option>
        <Option value="Анна Корженко">Анна Корженко</Option>
        <Option value="Фидель">Фидель</Option>
        <Option value="Константин Колешонок">Константин Колешонок</Option>
        <Option value="Алексей Орлов">Алексей Орлов</Option>
      </OptionGroup>
    </SearchSelect>
  );
};

const AsyncTemplate: ComponentStory<typeof SearchSelect> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await wait(1500);
      if (searchValue.length === 0) setOptions([...OPTIONS_ASYNC]);
      if (searchValue.length === 1) setOptions([...OPTIONS_ASYNC.slice(0, 2), { value: 'new', text: 'neeeew' }]);
      if (searchValue.length === 2)
        setOptions([
          { value: 'new', text: 'neeeew' },
          ...OPTIONS_ASYNC.slice(2, 3),
          { value: 'new2', text: 'neeeew2' },
          { value: 'new3', text: '33neeeew' },
        ]);
      if (searchValue.length >= 3) setOptions([]);
      setIsLoading(false);
    })();
  }, [searchValue]);

  return (
    <SearchSelect
      value={selectValue}
      isLoading={isLoading}
      onChange={onChange}
      onInputChange={onInputChange}
      defaultHighlighted={false}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.text}
        </Option>
      ))}
    </SearchSelect>
  );
};

const Form = styled.form`
  > * {
    margin-bottom: 12px;
  }
`;

const formDataToObject = (data: FormData) => {
  const obj = {} as Record<string, any>;
  data.forEach((value, key) => (obj[key] = value));
  return obj;
};

const UncontrolledTemplate: ComponentStory<typeof SearchSelect> = () => {
  const [submitValues, setSubmitValues] = useState<null | Record<string, any>>(null);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formElem = evt.target as HTMLFormElement;

    if (formElem) {
      setSubmitValues(formDataToObject(new FormData(formElem)));
    }
  };

  return (
    <Form action="" onSubmit={onSubmit}>
      <SearchSelect name="myOwesomeField" defaultValue={OPTIONS_SIMPLE[0]}>
        {OPTIONS_SIMPLE.map((option, ind) => (
          <Option key={option} value={option} disabled={ind === 4}>
            {option}
          </Option>
        ))}
      </SearchSelect>
      <Button type="submit" dimension="m">
        Cабмить меня, чего ты медлишь?!
      </Button>
      <FormValuesWrapper>
        {submitValues === null
          ? 'Здесь будут выводится значения, которые ты засабмитишь...'
          : JSON.stringify(submitValues)}
      </FormValuesWrapper>
    </Form>
  );
};

const TemplateSimpleMultiSelect: ComponentStory<typeof SearchSelect> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([
    ...Array.from({ length: 5 }).map((_, ind) => String(ind)),
    'big',
  ]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <SearchSelect value={selectValue} multiple={true} onChange={onChange} dimension="xl" displayClearIcon={true}>
      {Array.from({ length: 20 }).map((_option, ind) => (
        <Option key={ind} value={String(ind)} disabled={[1, 3].includes(ind)}>
          {`${ind}0000`}
        </Option>
      ))}
      <Option value="big">
        Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
      </Option>
    </SearchSelect>
  );
};

const TemplateNotFixedMultiSelect: ComponentStory<typeof SearchSelect> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <SearchSelect value={selectValue} multiple={true} onChange={onChange} idleHeight="full">
      {Array.from({ length: 20 }).map((_option, ind) => (
        <Option key={ind} value={String(ind)}>
          <Highlight>{`${ind}0000`}</Highlight>
        </Option>
      ))}
    </SearchSelect>
  );
};

const TemplateMultiSelectCustomOption: ComponentStory<typeof SearchSelect> = () => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };

  return (
    <SearchSelect value={selectValue} multiple={true} onChange={onChange}>
      {Array.from({ length: 20 }).map((_option, ind) => (
        <Option key={ind} value={String(ind)} renderChip={() => String(ind)}>
          <TextWrapper>
            <Highlight>{`${ind}0000`}</Highlight>
            <ExtraText>
              <Highlight>{`Доп ${ind}`}</Highlight>
            </ExtraText>
          </TextWrapper>
        </Option>
      ))}
    </SearchSelect>
  );
};

const TemplateMultiSelectCustomChip: ComponentStory<typeof SearchSelect> = () => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 5 }).map((_, ind) => String(ind)),
  );
  const [modalOpened, setModalOpened] = React.useState(false);
  const [valueToDelete, setValueToDelete] = React.useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };
  const deleteValue = (value: string) => setSelectValue((prev) => prev.filter((prevValue) => prevValue !== value));

  const onCloseModal = () => {
    setValueToDelete(null);
    setModalOpened(false);
  };
  const onOpenModal = () => setModalOpened(true);

  const onChipClose = ({ value }: IOnCloseProps) => {
    setValueToDelete(value);
    onOpenModal();
  };
  const renderChip = (ind: number) => () => ({ children: `${ind} $`, onClose: onChipClose });

  const onYes = () => {
    if (valueToDelete) deleteValue(valueToDelete);
    onCloseModal();
  };

  return (
    <>
      <SearchSelect value={selectValue} multiple={true} onChange={onChange}>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} renderChip={renderChip(ind)} disabled={[0, 2].includes(ind)}>
            {ind}
          </Option>
        ))}
      </SearchSelect>
      {modalOpened && (
        <Modal onClose={onCloseModal}>
          <ModalTitle>Попап неуверенности</ModalTitle>
          <ModalContent>Уверены, что хотите удалить опцию?</ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={onYes}>
              О да
            </Button>
            <Button appearance="secondary" dimension="m" onClick={onCloseModal}>
              Нет, был не прав
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </>
  );
};

export const SimpleSearchSelectStory = SimpleTemplate.bind({});
SimpleSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
SimpleSearchSelectStory.storyName = 'Простой SearchSelect';

export const CustomOptionSearchSelectStory = CustomOptionTemplate.bind({});
CustomOptionSearchSelectStory.storyName = 'SearchSelect с кастомными опциями';

export const RenderPropsSearchSelectStory = RenderPropsTemplate.bind({});
RenderPropsSearchSelectStory.storyName = 'SearchSelect с кастомными опциями через renderProps';

export const OptionGroupSearchSelectStory = OptionGroupTemplate.bind({});
OptionGroupSearchSelectStory.storyName = 'SearchSelect с группами';

export const AsyncSearchSelectStory = AsyncTemplate.bind({});
AsyncSearchSelectStory.storyName = 'Асинхронный SearchSelect';

export const UncontrolledSearchSelectStory = UncontrolledTemplate.bind({});
UncontrolledSearchSelectStory.storyName = 'Некотролируемый SearchSelect';

export const SimpleMultiSearchSelectStory = TemplateSimpleMultiSelect.bind({});
SimpleMultiSearchSelectStory.storyName = 'Простой MultiSearchSelect';

export const ExpandedHeightMultiSearchSelectStory = TemplateNotFixedMultiSelect.bind({});
ExpandedHeightMultiSearchSelectStory.storyName = 'MultiSearchSelect с увеличенной по умолчанию высотой';

export const CustomOptionMultiSearchSelectStory = TemplateMultiSelectCustomOption.bind({});
CustomOptionMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомными опциями';

export const CustomChipMultiSearchSelectStory = TemplateMultiSelectCustomChip.bind({});
CustomChipMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомным обработчиком удаления чипса';
