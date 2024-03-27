import { ScrollView } from "react-native";
import { CardClinic } from "../../components/CardClinic/CardClinic";
import {
  ButtonContainerSelect,
  ButtonSelectText,
  ContentSelect,
} from "../../components/CardClinic/style";
import { Container } from "../../components/Container/style";
import { TitleSelect } from "../../components/Titulo/style";
import {
  ButtonSecundaryText,
  ButtonSelect,
  ButtonTitle,
} from "../../components/Botao/style";
import { useState } from "react";

export const ClinicSelect = ({ navigation }) => {
  const clinics = [
    {
      id: 0,
      nome: "Clínica Natureh",
      local: "São Paulo, SP",
      rate: "4,5",
      aberto: "Seg-Sex",
    },
    {
      id: 1,
      nome: "Diamond Pró-Mulher",
      local: "São Paulo, SP",
      rate: "4,8",
      aberto: "Seg-Sex",
    },
    {
      id: 2,
      nome: "Clinica Villa Lobos",
      local: "São Paulo, SP",
      rate: "4,5",
      aberto: "Seg-Sab",
    },
    {
      id: 3,
      nome: "SP Oncologia Clínica",
      local: "Taboão, SP",
      rate: "4,5",
      aberto: "Seg-Sab",
    },
    {
      id: 4,
      nome: "Clínica API",
      local: "Taboão, SP",
      rate: "4,5",
      aberto: "Seg-Sab",
    },
    {
      id: 5,
      nome: "Clínica FOST",
      local: "São Paulo, SP",
      rate: "4,5",
      aberto: "Seg-Sab",
    },
    {
      id: 6,
      nome: "Clínica PODI",
      local: "Taboão, SP",
      rate: "4,5",
      aberto: "Seg-Sab",
    },
  ];


  const [cont, setCont] = useState(0);

  const [selectedCardId, setSelectedCardId] = useState(0);

  const handleSelectCard = (id) => {
    setSelectedCardId(id);
  }

  return (
    <Container>
      <ContentSelect>
        <TitleSelect>Selecionar clínica</TitleSelect>

        <ScrollView showsVerticalScrollIndicator={false}>
          {

            clinics.map((obj) => {
              return (
                <CardClinic
                  selectedCard={selectedCardId}
                  onClickEvent={handleSelectCard}
                  id={obj.id}
                  nome={obj.nome}
                  local={obj.local}
                  rate={obj.rate}
                  aberto={obj.aberto}
                />
              );
            })}

          <ButtonContainerSelect>
            <ButtonSelect>
              <ButtonTitle onPress={() => navigation.replace("Selecionar Médico")}>Continuar</ButtonTitle>
            </ButtonSelect>

            <ButtonSelectText onPress={() => navigation.replace("Paciente Prontuario")}>
              <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
            </ButtonSelectText>
          </ButtonContainerSelect>
        </ScrollView>
      </ContentSelect>
    </Container>
  );
};
