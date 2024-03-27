import { TitleCard, TitleLocal } from "../Titulo/style";
import { AntDesign } from "@expo/vector-icons";
import {
  ContainerCard,
  ElementsContainer,
  FlexCard,
  IconContainer,
  OpenDay,
  RateContainer,
  TextContainer,
  TextOpen,
  TextRate,
} from "./style";
// (props) => oculta
// props => (banana) => props = banana => banana -----> (pessoa) => pessoa.nome, pessoa.batata --> objeto e propriedade
// props => {banana} => props.banana => banana -----> ({nome, batata}) --> propriedade
export const CardClinic = ({ selectedCard, onClickEvent, id, nome, local, rate, aberto }) => {
  return (
    <ContainerCard
      onPress={() => { onClickEvent(id) }}
      isSelected={selectedCard == id ? true : false}
    >

      <FlexCard>
        <TextContainer>
          <TitleCard>{nome}</TitleCard>
          <TitleLocal>{local}</TitleLocal>
        </TextContainer>

        <ElementsContainer>
          <RateContainer>
            <IconContainer>
              <AntDesign name="star" size={20} color="#F9A620" />
              <TextRate>{rate}</TextRate>
            </IconContainer>
          </RateContainer>
          <OpenDay>
            <AntDesign name="calendar" size={14} color="#49B3BA" />
            <TextOpen>{aberto}</TextOpen>
          </OpenDay>
        </ElementsContainer>
      </FlexCard>
    </ContainerCard>
  );
};
