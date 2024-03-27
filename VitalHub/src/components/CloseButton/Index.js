import { AntDesign } from '@expo/vector-icons';
import { CloseButtonContainer } from './style';

export const CloseButton = ({ iconName = "", onPress }) => {
    return (
        <CloseButtonContainer onPress={onPress}>
            <AntDesign name={iconName} size={24} color="#34898F" />
        </CloseButtonContainer>
    );
}



// eu amo o vinicius vieira.
//     De->Matheus Enrike, seu querido amor.❤️❤️❤️❤️