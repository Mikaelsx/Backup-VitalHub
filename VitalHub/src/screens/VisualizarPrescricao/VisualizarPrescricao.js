import { ScrollView } from "react-native";
import { Container } from "../../components/Container/style";
import { MapInput } from "../../components/MapInput/MapInput";
import { InputFlex, LabelInputMap } from "../../components/MapInput/style";
import {
  CRM,
  InfoMedic,
  SubtitleMedic,
  TextMedicContainer,
  TitleMedic,
} from "../../components/Modals/ScheduleAppointment/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ButtonCancel,
  ButtonSubmit,
  ContainerButtons,
  ImagePrescription,
  TextBtt,
  TextBttCancel,
} from "../../components/VisuComponent/style";
import { ButtonSecundaryText } from "../../components/Botao/style";
import { ButtonSelectText } from "../../components/CardClinic/style";
import { PhotoField } from "../../components/PhotoInput/style";
import { useEffect, useState } from "react";
import { CameraSystem } from "../../components/Camera/Camera";

export const VisualizarPrescricao = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);

    return (
      <ScrollView>
        <Container>
          <ImagePrescription
            source={require("../../assets/images/docfichario.png")}
          />

          <TextMedicContainer>
            <TitleMedic>Dr. Claúdio</TitleMedic>
            <InfoMedic>
              <SubtitleMedic>Cliníco Geral</SubtitleMedic>
              <CRM>CRM-15286</CRM>
            </InfoMedic>
          </TextMedicContainer>

          <InputFlex>
            <LabelInputMap>Descrição da consulta</LabelInputMap>
            <MapInput editable={false} fieldwidth={320} fieldHeight={121} />
            <LabelInputMap>Diagnóstico do paciente</LabelInputMap>
            <MapInput editable={false} fieldwidth={320} fieldHeight={53} />
            <LabelInputMap>Prescrição médica</LabelInputMap>
            <MapInput editable={false} fieldwidth={320} fieldHeight={133} />
            <LabelInputMap>Exames médicos</LabelInputMap>
            <PhotoField
              editable={false}
              placeHolder={"Nenhuma foto informada"}
              fieldwidth={320}
              fieldHeight={111}
            />
          </InputFlex>

          <ContainerButtons>
            <ButtonSubmit onPress={() => navigation.replace("Camera")}>
              <MaterialCommunityIcons
                name="camera-plus"
                size={24}
                color="white"
              />
              <TextBtt>Enviar</TextBtt>
            </ButtonSubmit>
            <ButtonCancel>
              <TextBttCancel>Cancelar</TextBttCancel>
            </ButtonCancel>
          </ContainerButtons>

          <MapInput
            placeHolder={"Resultado do exame de sangue : tudo normal"}
            fieldwidth={320}
            fieldHeight={103}
            editable={false}
          />

          <ButtonSelectText
            onPress={() => navigation.replace("Paciente Prontuario")}
          >
            <ButtonSecundaryText>Voltar</ButtonSecundaryText>
          </ButtonSelectText>
        </Container>
      </ScrollView>
    );
};
