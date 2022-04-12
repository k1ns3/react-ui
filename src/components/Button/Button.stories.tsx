import * as React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { Button } from './index';
import { PseudoText } from '#/components/skeleton/PseudoText';
import { PseudoIcon } from '#/components/skeleton/PseudoIcon';
import { T } from '#/components/T';
import { Spinner } from '#/components/Spinner';
import { withDesign } from 'storybook-addon-designs';
import { filterKeysWithUndefinedValues } from '#/components/common/utils/filterKeysWithUndefinedValues';

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`;
const Separator = styled.div`
  height: 20px;
`;

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A19734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A16209',
      },
    ],
  },
  argTypes: {
    dimension: {
      control: {
        type: 'radio',
        options: ['xl', 'l', 'm', 's'],
      },
    },
    appearance: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'success', 'ghost', 'white'],
      },
    },
    onClick: { action: 'clicked' },

    type: {
      control: {
        type: 'radio',
        options: ['button', 'submit', 'reset'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonContainer = styled.div`
  padding: 24px;
  position: relative;
  display: block;
  > * {
    margin: 8px 16px 0 0;
  }
`;

const ButtonWithIconDemo: ComponentStory<typeof Button> = () => (
  <>
    <WrapperButton>
      <div>
        <T font="Additional/L" as="div">
          {' '}
          Dimension - xl
        </T>
        <Button dimension="xl" appearance="primary">
          Button 56
          <StarSolid />
        </Button>
      </div>
      <div>
        <T font="Additional/L" as="div">
          {' '}
          Dimension - l
        </T>
        <Button dimension="l" appearance="secondary">
          <StarSolid />
          Button 48
        </Button>
      </div>
      <div>
        <T font="Additional/L" as="div">
          {' '}
          Dimension - m
        </T>
        <Button dimension="m" appearance="danger">
          Button 40
          <StarSolid />
        </Button>
      </div>
      <div>
        <T font="Additional/L" as="div">
          {' '}
          Dimension - s
        </T>
        <Button dimension="s" appearance="success">
          <StarSolid />
          Button 32
        </Button>
      </div>
    </WrapperButton>
    <Separator />
    <div>
      <T font="Additional/L" as="div">
        Button with icon stretch
      </T>
      <Button dimension="l" appearance="primary" style={{ width: '100%' }}>
        <StarSolid />
        Button
      </Button>
    </div>
  </>
);

const ButtonLoaderDemo: ComponentStory<typeof Button> = () => (
  <div>
    <T font="Additional/L" as="div">
      Button with loader
    </T>
    <Separator />
    <Button disabled displayAsSquare>
      <Spinner dimension="m" />
    </Button>
    <Separator />
    <div>
      <T font="Additional/L" as="div">
        Button with loader stretch
      </T>
      <Separator />
      <Button disabled style={{ width: '100%' }}>
        <Spinner dimension="m" />
      </Button>
    </div>
  </div>
);

const ButtonSkeleton: ComponentStory<typeof Button> = ({ appearance = 'primary', dimension = 'xl', ...args }) => (
  <WrapperButton>
    <Button disabled dimension={dimension} appearance={appearance} {...args}>
      <PseudoText dimension={dimension} appearance={appearance} />
    </Button>
    <Button disabled dimension={dimension} appearance={appearance} {...args}>
      <PseudoIcon dimension={dimension} appearance={appearance} />
      <PseudoText dimension={dimension} appearance={appearance} />
    </Button>
    <Button disabled dimension={dimension} appearance={appearance} {...args}>
      <PseudoText dimension={dimension} appearance={appearance} />
      <PseudoIcon dimension={dimension} appearance={appearance} />
    </Button>
    <div style={{ marginLeft: 10 }}>
      <Button disabled displayAsSquare dimension={dimension} appearance={appearance} {...args}>
        <PseudoIcon dimension={dimension} appearance={appearance} />
      </Button>
    </div>
  </WrapperButton>
);

const ButtonPlaygroundDemo: ComponentStory<typeof Button> = ({ children, ...args }) => {
  const cleanProps = filterKeysWithUndefinedValues(args);
  return (
    <div>
      <ButtonContainer>
        <Button {...cleanProps}>Button 56</Button>

        <Button {...cleanProps}>
          <StarSolid />
          Button 56
        </Button>

        <Button {...cleanProps}>Button 56</Button>

        <Button {...cleanProps}>
          Button 56
          <StarSolid />
        </Button>

        <Button {...cleanProps}>
          <StarSolid />
        </Button>

        <Button {...cleanProps} displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl">Button 56</Button>

        <Button dimension="xl">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl">Button 56</Button>

        <Button dimension="xl">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl">
          <StarSolid />
        </Button>

        <Button dimension="xl" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="secondary">
          Button 56
        </Button>

        <Button dimension="xl" appearance="secondary">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="secondary">
          Button 56
        </Button>

        <Button dimension="xl" appearance="secondary">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="secondary">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="secondary" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="ghost">
          Button 56
        </Button>

        <Button dimension="xl" appearance="ghost">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="ghost">
          Button 56
        </Button>

        <Button dimension="xl" appearance="ghost">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="ghost">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="ghost" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="danger">
          Button 56
        </Button>

        <Button dimension="xl" appearance="danger">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="danger">
          Button 56
        </Button>

        <Button dimension="xl" appearance="danger">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="danger">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="danger" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="success">
          Button 56
        </Button>

        <Button dimension="xl" appearance="success">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="success">
          Button 56
        </Button>

        <Button dimension="xl" appearance="success">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="success">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="success" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer style={{ backgroundColor: '#2B313B' }}>
        <Button dimension="xl" appearance="white">
          Button 56
        </Button>

        <Button dimension="xl" appearance="white">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="white">
          Button 56
        </Button>

        <Button dimension="xl" appearance="white">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="white">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="white" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
    </div>
  );
};

export const ButtonWithIcon = ButtonWithIconDemo.bind({});
export const ButtonLoader = ButtonLoaderDemo.bind({});
export const Skeleton = ButtonSkeleton.bind({});

export const Playground = ButtonPlaygroundDemo.bind({});
Playground.args = {
  children: 'Нажми меня',
};
