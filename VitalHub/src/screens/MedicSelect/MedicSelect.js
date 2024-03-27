import { ScrollView } from "react-native";
import { CardMedic } from "../../components/CardMedic/CardMedic";
import { Container } from "../../components/Container/style";
import { TitleSelect } from "../../components/Titulo/style";
import {
  ButtonContainerSelect,
  ButtonSelectText,
  ContentSelect,
} from "../../components/CardClinic/style";
import {
  ButtonSecundaryText,
  ButtonSelect,
  ButtonTitle,
} from "../../components/Botao/style";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export const MedicSelect = ({navigation}) => {
  const medicos = [
    {
      id: 1,
      imagem: {
        uri: "https://media.licdn.com/dms/image/D4D03AQG-I5sDqu619A/profile-displayphoto-shrink_800_800/0/1684178152480?e=1714608000&v=beta&t=kvytbQBC-IHIlZ4aZ_ZsF-ZjVojFeDpscEU3smibnoQ",
      },
      nome: "Dr Matheus Enrike",
      especialidade: "Urologista",
    },

    {
      id: 2,
      imagem: {
        uri: "https://media.licdn.com/dms/image/D4D03AQG-I5sDqu619A/profile-displayphoto-shrink_800_800/0/1684178152480?e=1714608000&v=beta&t=kvytbQBC-IHIlZ4aZ_ZsF-ZjVojFeDpscEU3smibnoQ",
      },
      nome: "Dr Matheus Enrike",
      especialidade: "Urologista",
    },

    {
      id: 3,
      imagem: {
        uri: "https://media.licdn.com/dms/image/D4D03AQEwYYAqkHnx2A/profile-displayphoto-shrink_800_800/0/1704252334548?e=1714608000&v=beta&t=-HS1MoGv-MFrr2fbkmyCuWoSsU2UfuMygDsmfRNIT00",
      },
      nome: "Dr Bianchezzi ",
      especialidade: "Cirurgião, Cardiologista",
    },
    {
      id: 4,
      imagem: {
        uri: "https://media.licdn.com/dms/image/D4D03AQEwYYAqkHnx2A/profile-displayphoto-shrink_800_800/0/1704252334548?e=1714608000&v=beta&t=-HS1MoGv-MFrr2fbkmyCuWoSsU2UfuMygDsmfRNIT00",
      },
      nome: "Dr Bianchezzi ",
      especialidade: "Cirurgião, Cardiologista",
    },

    {
      id: 5,
      imagem: { uri: "https://avatars.githubusercontent.com/u/125310330?v=4" },
      nome: "Dra Catarina",
      especialidade: "Demartologa, Esteticista",
    },
    {
      id: 6,
      imagem: { uri: "https://avatars.githubusercontent.com/u/125310330?v=4" },
      nome: "Dra Catarina",
      especialidade: "Demartologa, Esteticista",
    },
  ];

  const [selectedCardId, setSelectedCardId] = useState(0);

  const handleSelectCard = (id) => {
    setSelectedCardId(id);
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <ContentSelect>
        <TitleSelect> Selecionar médico</TitleSelect>

        <ScrollView showsVerticalScrollIndicator={false}>
          {medicos.map((obj) => {
            return (
              <CardMedic
                SelectedCard={selectedCardId}
                onClickEvent={handleSelectCard}
                id={obj.id}
                nome={obj.nome}
                imagem={obj.imagem}
                especialidade={obj.especialidade}
              />
            );
          })}
        </ScrollView>


        <ButtonContainerSelect>
          <ButtonSelect onPress={() => navigation.replace("Selecionar Data")}>
            <ButtonTitle>Continuar</ButtonTitle>
          </ButtonSelect>

          <ButtonSelectText onPress={() => navigation.replace("Paciente Prontuario")}>
            <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
          </ButtonSelectText>
        </ButtonContainerSelect>
      </ContentSelect>
    </Container>
  );
};
