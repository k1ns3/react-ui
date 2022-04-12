import * as React from 'react';
import { CheckboxField } from '#/components/form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { RadioButton } from '#/components/RadioButton';
import { FieldSet, PropsType as FieldSetPropsType } from '#/components/form/FieldSet';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант
  </Desc>
);

export default {
  title: 'Form Field Components/FieldSet',
  decorators: [withDesign],
  component: FieldSet,
  parameters: {
    componentSubtitle: <Description />,
    actions: {
      argTypesRegex: 'onChange',
    },
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    extraText: {
      type: 'string',
    },
    required: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof FieldSet>;
const Container = styled.div`
  > * {
    margin-top: 24px;
  }
`;
const Template1: ComponentStory<typeof FieldSet> = (props: FieldSetPropsType) => {
  return (
    <Container>
      <FieldSet {...props} legend={'Группа чекбоксов:'}>
        <CheckboxField name="check1">Text 1</CheckboxField>
        <CheckboxField name="check2">Text 2</CheckboxField>
        <CheckboxField name="check3">Text 3</CheckboxField>
      </FieldSet>
      <FieldSet disabled legend={'Disabled группа чекбоксов:'}>
        <CheckboxField name="check1">Text 1</CheckboxField>
        <CheckboxField name="check2" defaultChecked>
          Text 2
        </CheckboxField>
        <CheckboxField name="check3">Text 3</CheckboxField>
      </FieldSet>
      <FieldSet dimension="s" legend={'Группа маленьких чекбоксов:'}>
        <CheckboxField name="check1">Text 1</CheckboxField>
        <CheckboxField name="check2">Text 2</CheckboxField>
        <CheckboxField name="check3">Text 3</CheckboxField>
      </FieldSet>
      <FieldSet legend={'Горизонтальная группа чекбоксов:'} flexDirection="row">
        <CheckboxField name="check1">Text 1</CheckboxField>
        <CheckboxField name="check2">Text 2</CheckboxField>
        <CheckboxField name="check3">Text 3</CheckboxField>
      </FieldSet>
    </Container>
  );
};

const Template2: ComponentStory<typeof FieldSet> = ({ disabled, dimension }: FieldSetPropsType) => {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
  const [selected, setSelected] = React.useState('');
  return (
    <Container>
      <FieldSet
        onChange={(e) => {
          setSelected((e.target as HTMLInputElement).value);
        }}
        legend="Управляемая группа радиокнопок"
        disabled={disabled}
        dimension={dimension}
      >
        <RadioButton value={values[0]} name="test1" checked={values[0] === selected} readOnly>
          First option
        </RadioButton>
        <RadioButton value={values[1]} name="test1" checked={values[1] === selected} readOnly>
          Second option
        </RadioButton>
        <RadioButton value={values[2]} name="test1" checked={values[2] === selected} readOnly>
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Неуправляемая группа радиокнопок" required disabled={disabled} dimension={dimension}>
        <RadioButton value={values[3]} name="test2">
          First option
        </RadioButton>
        <RadioButton value={values[4]} name="test2">
          Second option
        </RadioButton>
        <RadioButton value={values[5]} name="test2" extraText="some extra text">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Disabled группа радиокнопок" disabled>
        <RadioButton value={values[6]} name="test3">
          First option
        </RadioButton>
        <RadioButton value={values[7]} name="test3">
          Second option
        </RadioButton>
        <RadioButton value={values[8]} name="test3">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Группа радиокнопок с одной задизейбленной кнопкой">
        <RadioButton value={values[9]} name="test4">
          First option
        </RadioButton>
        <RadioButton value={values[10]} disabled name="test4">
          Second option
        </RadioButton>
        <RadioButton value={values[11]} name="test4">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Группа радиокнопок маленького размера" dimension="s">
        <RadioButton value={values[12]} name="test5">
          First option
        </RadioButton>
        <RadioButton value={values[13]} name="test5">
          Second option
        </RadioButton>
        <RadioButton value={values[14]} name="test5">
          Third option
        </RadioButton>
      </FieldSet>
      <FieldSet legend="Горизонтальная группа радиокнопок" flexDirection="row">
        <RadioButton value={values[12]} name="test6">
          First option
        </RadioButton>
        <RadioButton value={values[13]} name="test6">
          Second option
        </RadioButton>
        <RadioButton value={values[14]} name="test6">
          Third option
        </RadioButton>
      </FieldSet>
    </Container>
  );
};

export const Checkbox = Template1.bind({});
Checkbox.args = {};
Checkbox.storyName = 'Checkbox Fieldset';
Checkbox.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const RadioGroup = Template2.bind({});
RadioGroup.args = {};
RadioGroup.storyName = 'RadioGroup Fieldset';
RadioGroup.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
