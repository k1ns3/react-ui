import type { FC } from 'react';
import React from 'react';
import type { ITooltipProps } from '#src/components/Tooltip';
import { Tooltip } from '#src/components/Tooltip';

import { Content, ContentWrapper } from '#src/components/Stepper/style';
import StepperContext from '#src/components/Stepper/StepperContext';

export const StepContent: FC<{ children: string; tooltipProps?: Partial<ITooltipProps> }> = ({
  children,
  tooltipProps,
}) => {
  const { lineClamp } = React.useContext(StepperContext);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const detectOverflow = (e: any) => e.clientHeight < e.scrollHeight;

  React.useLayoutEffect(() => {
    if (contentRef.current && detectOverflow(contentRef.current) !== overflow) {
      setOverflow(detectOverflow(contentRef.current));
    }
  }, [tooltipVisible]);

  return (
    <>
      <ContentWrapper ref={wrapperRef} withTooltip={overflow}>
        <Content ref={contentRef} lineClamp={lineClamp}>
          {children}
        </Content>
      </ContentWrapper>
      <Tooltip
        targetRef={wrapperRef}
        visible={tooltipVisible && overflow}
        onVisibilityChange={setTooltipVisible}
        renderContent={() => children}
        {...tooltipProps}
      />
    </>
  );
};
