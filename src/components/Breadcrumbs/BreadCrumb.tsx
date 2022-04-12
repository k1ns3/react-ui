import * as React from 'react';
import { refSetter } from '#/components/common/utils/refSetter';
import styled from 'styled-components';
import { typography } from '#/components/Typography';

import { InverseTooltip } from './InverseTooltip';

export const Crumb = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;
  ${typography['Additional/M']}

  [data-dimension='m'] & {
    ${typography['Additional/XS']}
  }
  [data-dimension='s'] & {
    ${typography['Caption/XS']}
  }
`;

export const Content = styled.span`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const CrumbAnchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.color.text.secondary};

  [aria-current='page'] & {
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.basic.hover};
  }
  &:active {
    color: ${({ theme }) => theme.color.basic.press};
  }

  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color.basic.hover};
      border-radius: 4px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > ${Content} {
    outline: none;
  }
`;

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Текст хлебной крошки */
  text: string;
  /** Url хлебной крошки (href атрибут, используемый во внутреннем Anchor) */
  url?: string;
  /** Позволяет вместо внутреннего Anchor отрендерить любой другой компонент (https://styled-components.com/docs/api#as-polymorphic-prop) */
  linkAs?: React.ElementType;
  /** Дополнительные параметры, которые можно передать во внутренний Anchor */
  linkProps?: { [key: string]: string };
}

export const Breadcrumb = React.forwardRef<HTMLLIElement, BreadcrumbProps>(
  ({ text, url = '#', linkAs, linkProps, children, ...props }, ref) => {
    const tooltip = text.length > 40;
    const crumbRef = React.useRef<HTMLLIElement>(null);

    return tooltip ? (
      <Crumb ref={refSetter(ref, crumbRef)} {...props}>
        <CrumbAnchor href={url} as={linkAs} {...linkProps}>
          <Content tabIndex={-1} role="link">
            <InverseTooltip renderContent={() => text}>{text.slice(0, 37) + '...'}</InverseTooltip>
            {children}
          </Content>
        </CrumbAnchor>
      </Crumb>
    ) : (
      <Crumb ref={refSetter(ref, crumbRef)} {...props}>
        <CrumbAnchor href={url} as={linkAs} {...linkProps}>
          <Content tabIndex={-1} role="link">
            {text}
            {children}
          </Content>
        </CrumbAnchor>
      </Crumb>
    );
  },
);
