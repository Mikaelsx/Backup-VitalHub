import { ButtonHigh, TextHigh} from "./style";

export const InputProp = ({ clickButton = false, textButton, onPress }) => {
  return (
    // <FieldContent>
    <ButtonHigh clickButton={clickButton} onPress={onPress}>
      <TextHigh>{textButton}</TextHigh>
    </ButtonHigh>
    // </FieldContent>
  );
};
