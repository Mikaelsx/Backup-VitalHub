import { Modal } from "react-native";
import { Title } from "../../Titulo/style";
import { LabelModal } from "../../Text/style";
import { BoxModalInput, ContentModal, PatientModal } from "./style";
import { InputProp } from "../../Input/Input";
import {
  Button,
  ButtonSecundary,
  ButtonSecundaryText,
  ButtonTitle,
} from "../../Botao/style";
import { InputModal } from "../../Input/style";
import { useState } from "react";

export const ConsultModal = ({ visible, setShowModalConsult, navigation, ...rest }) => {
  const [scheduleType, setScheduleType] = useState();

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ContentModal>
          <Title>Agendar Consulta</Title>

          <LabelModal>Qual o nível da consulta</LabelModal>

          <BoxModalInput>
            <InputProp
              textButton={"Rotina"}
              clickButton={scheduleType == "Rotina"}
              onPress={() => {
                setScheduleType("Rotina");
              }}
            />
            <InputProp
              textButton={"Exame"}
              clickButton={scheduleType == "Exame"}
              onPress={() => {
                setScheduleType("Exame");
              }}
            />
            <InputProp
              textButton={"Urgência"}
              clickButton={scheduleType == "Urgência"}
              onPress={() => {
                setScheduleType("Urgência");
              }}
            />
          </BoxModalInput>

          <LabelModal>Informe a localização desejada</LabelModal>
          <InputModal placeholder="informe a localização" />

          <Button onPress={() => navigation.replace("Selecionar Clinica")}>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>

          <ButtonSecundary onPress={() => setShowModalConsult(false)}>
            <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
          </ButtonSecundary>
        </ContentModal>
      </PatientModal>
    </Modal>
  );
};
