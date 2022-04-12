import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Button } from '#/index';
import { Step, StepContent, Stepper } from '../Stepper';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Description = () => (
  <Desc>
    Компонент Stepper — визуальное отображение пользовательского прогресса через набор шагов. Уведомляет пользователя о
    текущем положении на пути при выполнении конкретной задачи.
    <Separator />
    Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из
    этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
    <Separator />
    Компонент представлен в двух вариантах — горизонтальном и вертикальном.
  </Desc>
);

export default {
  title: 'Example/Stepper',
  decorators: [withDesign],
  component: Stepper,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A16671',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A16789',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A16767',
      },
    ],
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    lineClamp: {
      options: [1, 2, 3],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template0: ComponentStory<typeof Stepper> = ({ lineClamp, activeStep, orientation, ...args }) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки', error: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  return (
    <Stepper lineClamp={lineClamp} activeStep={activeStep || 2} orientation={orientation} {...args}>
      {steps.map(({ content, ...step }) => {
        return (
          <Step {...step} onClick={(step: any) => console.log(step.index)}>
            <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>{content}</StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
};

const Template1: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки', error: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  return (
    <Stepper lineClamp={2} activeStep={2}>
      {steps.map(({ content, ...step }) => {
        return (
          <Step {...step}>
            <i>{content}</i>
          </Step>
        );
      })}
    </Stepper>
  );
};

const Template2: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    { key: 0, content: 'Шаг с предупреждением', warning: true },
    { key: 1, content: 'Disabled шаг', disabled: true },
    { key: 2, content: 'Шаг с ошибкой', error: true },
    { key: 3, content: 'Завершенный шаг' },
    { key: 4, content: 'Активный шаг' },
    { key: 5, content: 'Неактивный шаг' },
  ];
  return (
    <div style={{ maxWidth: '800px', overflow: 'hidden' }}>
      <Stepper activeStep={4}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <i>{content}</i>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

const Template3: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      link: '#',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки', link: '#', warning: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
  ];
  return (
    <>
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical">
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

const Template4: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки', error: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  return (
    <>
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step} onClick={(step: any) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical">
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step} onClick={(step: any) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

const Template5: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки' },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div style={{ width: '400px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '40px' }}>
        <Button onClick={() => setActiveStep(activeStep - 1)} disabled={activeStep === 0} dimension="s">
          Шаг назад
        </Button>
        <Button onClick={() => setActiveStep(activeStep + 1)} disabled={activeStep === 3} dimension="s">
          Шаг вперёд
        </Button>
      </div>
      <Stepper activeStep={activeStep}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Stepper. Playground.';

export const StepKinds = Template2.bind({});
StepKinds.args = {};
StepKinds.storyName = 'Stepper. Виды шагов.';

export const CutomStepContent = Template1.bind({});
CutomStepContent.args = {};
CutomStepContent.storyName = 'Stepper. Кастомный StepContent.';

export const ClickableLinks = Template3.bind({});
ClickableLinks.args = {};
ClickableLinks.storyName = 'Stepper. Шаги в виде ссылок.';

export const ClickProp = Template4.bind({});
ClickProp.args = {};
ClickProp.storyName = 'Stepper. Кликабельные шаги.';

export const Mobile = Template5.bind({});
Mobile.args = {};
Mobile.storyName = 'Stepper. Мобильная версия.';
Mobile.parameters = {
  docs: {
    description: {
      story: `В мобильной версии применяется только горизонтальный вариант компонента 
      с автоматическим скроллом по горизонтали по мере прохождения шагов.\n\nКомпонент можно скроллить пальцем, 
      если нужно посмотреть пройденные или будущие шаги.\n\nПри переходе на следующий шаг, который становится 
      текущим, он выравнивается относительно левого края на расстоянии 16px (боковой падинг). Шаг перед текущим 
      уходит за границы экрана.`,
    },
  },
};
