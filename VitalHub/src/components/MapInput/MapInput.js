import { InputMap } from "./style"

export const MapInput = ({ placeHolder, fieldwidth, fieldHeight, editable }) => {
    return (
        <InputMap editable={editable} placeholder={placeHolder} width={fieldwidth} height={fieldHeight} />
    )
}