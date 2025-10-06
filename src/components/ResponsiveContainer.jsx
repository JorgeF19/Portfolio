import styled from "styled-components";

const Container = styled.div`
  /* Default/Wide (1224px+) */
  grid-column: ${(props) =>
    `${props.wideStartColumn || props.startColumn} / ${
      props.wideEndColumn || props.endColumn
    }`};
  grid-row: ${(props) =>
    `${props.wideStartRow || props.startRow} / ${
      props.wideEndRow || props.endRow
    }`};
  gap: ${(props) => props.wideGap || props.gap || "1rem"};
  padding: ${(props) => props.widePadding || props.padding || "0"};

  /* Medium views (1024px) */
  @media (max-width: 1224px) {
    grid-column: ${(props) => {
      // Cascada: medium -> wide -> default
      const startCol =
        props.mediumStartColumn || props.wideStartColumn || props.startColumn;
      const endCol =
        props.mediumEndColumn || props.wideEndColumn || props.endColumn;

      if (startCol && endCol) {
        return `${startCol} / ${endCol}`;
      }

      // Fallback a conversión automática si no se especifica ninguna
      const start = Math.max(
        1,
        Math.ceil(((props.startColumn - 1) * 6) / 12) + 1
      );
      const end = Math.min(7, Math.ceil(((props.endColumn - 1) * 6) / 12) + 1);
      return `${start} / ${end}`;
    }};
    grid-row: ${(props) => {
      // Cascada: medium -> wide -> default
      const startRow =
        props.mediumStartRow || props.wideStartRow || props.startRow;
      const endRow = props.mediumEndRow || props.wideEndRow || props.endRow;
      return `${startRow} / ${endRow}`;
    }};
    gap: ${(props) =>
      props.mediumGap ||
      props.wideGap ||
      props.tabletGap ||
      props.gap ||
      "0.8rem"};
    padding: ${(props) =>
      props.mediumPadding ||
      props.widePadding ||
      props.tabletPadding ||
      props.padding ||
      "0"};
  }

  /* Small views (768px) */
  @media (max-width: 768px) {
    grid-column: ${(props) => {
      // Cascada: small -> medium -> wide -> default
      const startCol =
        props.smallStartColumn ||
        props.mediumStartColumn ||
        props.wideStartColumn ||
        props.startColumn;
      const endCol =
        props.smallEndColumn ||
        props.mediumEndColumn ||
        props.wideEndColumn ||
        props.endColumn;

      if (startCol && endCol) {
        return `${startCol} / ${endCol}`;
      }

      // Fallback a conversión automática si no se especifica ninguna
      const start = Math.max(
        1,
        Math.ceil(((props.startColumn - 1) * 3) / 12) + 1
      );
      const end = Math.min(4, Math.ceil(((props.endColumn - 1) * 3) / 12) + 1);
      if (props.endColumn - props.startColumn > 6) {
        return "1 / -1";
      }
      return `${start} / ${end}`;
    }};
    grid-row: ${(props) => {
      // Cascada: small -> medium -> wide -> default
      const startRow =
        props.smallStartRow ||
        props.mediumStartRow ||
        props.wideStartRow ||
        props.startRow;
      const endRow =
        props.smallEndRow ||
        props.mediumEndRow ||
        props.wideEndRow ||
        props.endRow;
      return `${startRow} / ${endRow}`;
    }};
    gap: ${(props) =>
      props.smallGap ||
      props.mediumGap ||
      props.wideGap ||
      props.mobileGap ||
      props.gap ||
      "0.5rem"};
    padding: ${(props) =>
      props.smallPadding ||
      props.mediumPadding ||
      props.widePadding ||
      props.mobilePadding ||
      props.padding ||
      "0"};
  }

  /* Extra Small views (400px-) */
  @media (max-width: 400px) {
    grid-column: ${(props) => {
      // Cascada: extraSmall -> small -> medium -> wide -> default
      const startCol =
        props.extraSmallStartColumn ||
        props.smallStartColumn ||
        props.mediumStartColumn ||
        props.wideStartColumn ||
        props.startColumn;
      const endCol =
        props.extraSmallEndColumn ||
        props.smallEndColumn ||
        props.mediumEndColumn ||
        props.wideEndColumn ||
        props.endColumn;

      if (startCol && endCol) {
        return `${startCol} / ${endCol}`;
      }

      // Por defecto en extra small, ocupar todo el ancho
      return "1 / -1";
    }};
    grid-row: ${(props) => {
      // Cascada: extraSmall -> small -> medium -> wide -> default
      const startRow =
        props.extraSmallStartRow ||
        props.smallStartRow ||
        props.mediumStartRow ||
        props.wideStartRow ||
        props.startRow;
      const endRow =
        props.extraSmallEndRow ||
        props.smallEndRow ||
        props.mediumEndRow ||
        props.wideEndRow ||
        props.endRow;
      return `${startRow} / ${endRow}`;
    }};
    gap: ${(props) =>
      props.extraSmallGap ||
      props.smallGap ||
      props.mediumGap ||
      props.wideGap ||
      props.mobileGap ||
      props.gap ||
      "0.3rem"};
    padding: ${(props) =>
      props.extraSmallPadding ||
      props.smallPadding ||
      props.mediumPadding ||
      props.widePadding ||
      props.mobilePadding ||
      props.padding ||
      "0"};
  }

  /* Additional styling props */
  display: ${(props) => props.display || "grid"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "initial"};
  align-items: ${(props) => props.alignItems || "initial"};
  position: ${(props) => props.position || "static"};
  z-index: ${(props) => props.zIndex || "auto"};
  background: ${(props) => props.background || "transparent"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};

  /* Mobile-first responsive display changes */
  @media (max-width: 768px) {
    display: ${(props) => props.mobileDisplay || props.display || "grid"};
    flex-direction: ${(props) =>
      props.mobileFlexDirection || props.flexDirection || "column"};
    justify-content: ${(props) =>
      props.mobileJustifyContent || props.justifyContent || "center"};
    align-items: ${(props) =>
      props.mobileAlignItems || props.alignItems || "center"};
    text-align: ${(props) => props.mobileTextAlign || "center"};
  }
`;

function ResponsiveContainer({
  // Default/Wide grid positioning props (1224px+)
  startColumn = 1,
  endColumn = 13,
  startRow = 1,
  endRow = 2,

  // Wide-specific props (1224px+)
  wideStartColumn,
  wideEndColumn,
  wideStartRow,
  wideEndRow,
  wideGap,
  widePadding,

  // Medium-specific props (1024px)
  mediumStartColumn,
  mediumEndColumn,
  mediumStartRow,
  mediumEndRow,
  mediumGap,
  mediumPadding,

  // Small-specific props (768px)
  smallStartColumn,
  smallEndColumn,
  smallStartRow,
  smallEndRow,
  smallGap,
  smallPadding,

  // Extra Small-specific props (400px-)
  extraSmallStartColumn,
  extraSmallEndColumn,
  extraSmallStartRow,
  extraSmallEndRow,
  extraSmallGap,
  extraSmallPadding,

  // Legacy spacing props (for backwards compatibility)
  gap,
  padding,
  tabletGap,
  tabletPadding,
  mobileGap,
  mobilePadding,

  // Layout props
  display,
  flexDirection,
  justifyContent,
  alignItems,
  position,
  zIndex,

  // Visual props
  background,
  borderRadius,
  boxShadow,

  // Mobile-specific overrides
  mobileDisplay,
  mobileFlexDirection,
  mobileJustifyContent,
  mobileAlignItems,
  mobileTextAlign,

  // Standard props
  children,
  className,
  style,
  ...props
}) {
  return (
    <Container
      startColumn={startColumn}
      endColumn={endColumn}
      startRow={startRow}
      endRow={endRow}
      wideStartColumn={wideStartColumn}
      wideEndColumn={wideEndColumn}
      wideStartRow={wideStartRow}
      wideEndRow={wideEndRow}
      wideGap={wideGap}
      widePadding={widePadding}
      mediumStartColumn={mediumStartColumn}
      mediumEndColumn={mediumEndColumn}
      mediumStartRow={mediumStartRow}
      mediumEndRow={mediumEndRow}
      mediumGap={mediumGap}
      mediumPadding={mediumPadding}
      smallStartColumn={smallStartColumn}
      smallEndColumn={smallEndColumn}
      smallStartRow={smallStartRow}
      smallEndRow={smallEndRow}
      smallGap={smallGap}
      smallPadding={smallPadding}
      extraSmallStartColumn={extraSmallStartColumn}
      extraSmallEndColumn={extraSmallEndColumn}
      extraSmallStartRow={extraSmallStartRow}
      extraSmallEndRow={extraSmallEndRow}
      extraSmallGap={extraSmallGap}
      extraSmallPadding={extraSmallPadding}
      gap={gap}
      padding={padding}
      tabletGap={tabletGap}
      tabletPadding={tabletPadding}
      mobileGap={mobileGap}
      mobilePadding={mobilePadding}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      position={position}
      zIndex={zIndex}
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      mobileDisplay={mobileDisplay}
      mobileFlexDirection={mobileFlexDirection}
      mobileJustifyContent={mobileJustifyContent}
      mobileAlignItems={mobileAlignItems}
      mobileTextAlign={mobileTextAlign}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Container>
  );
}

export default ResponsiveContainer;
