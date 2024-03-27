import { Modal } from "react-native";
import { ModalContent } from "../AppointmentModal/style";
import {
  Button,
  ButtonSecundaryText,
  ButtonTitle,
} from "../../Botao/style";
import {
  ButtonSelectText,
} from "../../CardClinic/style";
import {
  CRM,
  InfoMedic,
  ModalImageConsult,
  ScheduleAppointmentContent,
  SubtitleMedic,
  TextMedicContainer,
  TitleMedic,
} from "./style";

export const ScheduleAppointment = ({
  navigation,
  setShowModalScheduleAppointment,
  visible,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
        <ScheduleAppointmentContent>
      <ModalContent>
          <ModalImageConsult
            source={require("../../../assets/images/cllaudiio.png")}
          />

          <TextMedicContainer>
            <TitleMedic>Dr. Claúdio</TitleMedic>
            <InfoMedic>
              <SubtitleMedic>Cliníco Geral</SubtitleMedic>
              <CRM>CRM-15286</CRM>
            </InfoMedic>
          </TextMedicContainer>

        
            <Button onPress={() => navigation.replace('Selecionar Local')}>
              <ButtonTitle>Ver local da consulta</ButtonTitle>
            </Button>
            

            <ButtonSelectText
              onPress={() => navigation.replace("Paciente Prontuario")}
            >
              <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
            </ButtonSelectText>
      </ModalContent>
        </ScheduleAppointmentContent>
    </Modal>
  );
};
