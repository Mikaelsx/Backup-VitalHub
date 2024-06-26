import { ButtonTabsStyle, ButtonTextStyle } from "./style";


export const AbsTabsStyle = ({
  textButton,
  clickButton = false,
  onPress,
}) => {
  return (
    <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
      <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
    </ButtonTabsStyle>
  );
};
