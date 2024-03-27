import { PhotoField } from "./style";

export const PhotoInput = ({ placeHolder, fieldwidth, fieldHeight, image }) => {
  return (
    <PhotoField
      placeholder={placeHolder}
      width={fieldwidth}
      height={fieldHeight}
    />
  );
};
