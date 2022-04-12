import styled from 'styled-components';
import { Status } from '#/components/input/FileUploader/utils';

export const ErrorBlock = styled.div<{ status?: Status }>`
  margin-top: ${(p) => (p.status === 'Error' ? '8px' : '20px')};
  color: ${(p) => p.theme.color.status.danger};
`;
