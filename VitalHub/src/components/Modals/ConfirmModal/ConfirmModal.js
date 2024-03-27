import { Modal } from "react-native"
import { ContentModal, PatientModal } from "../ConsultModal/style"
import { Title } from "../../Titulo/style"
import { ContainerData, FlexData, SubText, TextData, TitleData } from "./style"
import { ButtonBox, ButtonSelectText } from "../../CardClinic/style"
import { ButtonSecundaryText, ButtonSelect, ButtonTitle } from "../../Botao/style"

export const ConfirmModal = ({ visible, setShowConfirmModal, navigation, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade" >
            <PatientModal>
                <ContentModal>
                    <Title>Agendar Consulta</Title>

                    <SubText>Consulte os dados selecionados para a sua consulta</SubText>


                    <ContainerData>
                        <FlexData>
                            <TitleData>Data da consulta</TitleData>
                            <TextData>1 de Novembro de 2023</TextData>
                        </FlexData>
                        <FlexData>
                            <TitleData>Médico(a) da consulta</TitleData>
                            <TextData>Dra Alessandra, Demargologa, Esteticista</TextData>
                        </FlexData>
                        <FlexData>
                            <TitleData>Local da consulta</TitleData>
                            <TextData>São Paulo, SP</TextData>
                        </FlexData>
                        <FlexData>
                            <TitleData>Tipo de consulta</TitleData>
                            <TextData>Rotina</TextData>
                        </FlexData>
                    </ContainerData>





                    <ButtonSelect onPress={() => navigation.replace("Paciente Prontuario")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonSelect>

                    <ButtonSelectText onPress={() => navigation.replace("Paciente Prontuario")}>
                        <ButtonSecundaryText>
                            Cancelar
                        </ButtonSecundaryText>
                    </ButtonSelectText>






                </ContentModal>
            </PatientModal>
        </Modal>
    )
}