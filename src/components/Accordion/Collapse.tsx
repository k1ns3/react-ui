import * as React from 'react';
import styled from 'styled-components';

export interface CollapseProps {
  isOpen?: boolean;

  /**  Устанавливает максимальную высоту на которую открывается контент до появления вертикального скрола */
  contentMaxHeight?: number | string;
}

export const Collapse = styled.div<CollapseProps>`
  overflow: hidden;
  transition: max-height 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${(p) => (!p.isOpen ? 0 : p.contentMaxHeight)};
`;
