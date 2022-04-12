import styled from 'styled-components';
import type { Appearance, Dimension } from '#/components/Button/types';
import { backGroundColorMixin } from '#/components/skeleton/PseudoText';

export const PseudoIcon = styled.div<{ dimension: Dimension; appearance: Appearance }>`
  border-radius: 50%;
  width: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  ${backGroundColorMixin}
`;
