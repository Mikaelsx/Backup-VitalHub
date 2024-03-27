import { ContainerCard, FlexCard, TextContainer, TextContainerMedic } from "../CardClinic/style"
import { SubtitleCard, TitleCard } from "../Titulo/style"
import { ImageCard } from "./style"

export const CardMedic = ({ SelectedCard, onClickEvent, id,  nome, especialidade, imagem }) => {
    return (
        <ContainerCard
            onPress={() => { onClickEvent(id) }}
            isSelected={SelectedCard == id ? true : false}
        >
            <FlexCard>

                <ImageCard source={imagem} />

                <TextContainerMedic>
                    <TitleCard>{nome}</TitleCard>
                    <SubtitleCard>{especialidade}</SubtitleCard>
                </TextContainerMedic>
            </FlexCard>
        </ContainerCard>
    )
}