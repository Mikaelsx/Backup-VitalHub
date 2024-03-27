import { Modal } from "react-native"
import { Title } from "../../Titulo/style"
import { ContentModal, ModalText, PatientModal } from "./style"
import { Button, ButtonSecundary, ButtonSecundaryText, ButtonTitle } from "../../Botao/style"

// importar os recursos do notifications
import * as Notications from 'expo-notifications'

// solicita permissão de notificação ao iniciar o app
Notications.requestPermissionsAsync()


// define como as notificacoes devem ser tratadas, quando recebidas
Notications.setNotificationHandler({
    handleNotification: async () => ({

        //mostrar o alerta quando a notificacao for recebida
        shouldShowAlert: true,

        //reproduz som ao receber notificacao
        shouldPlaySound: true,

        //numero de notificacoes no icone do app
        shouldSetBadge: true
    })
})

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {

    //funcao para lidar com a chamada da notificacao
    const handleCallNotifications = async () => {

        //obtem o status da permissao
        const { status } = await Notications.getPermissionsAsync();

        //verifica se o usuario concedeu permissao
        if (status != 'granted') {
            alert('Você não deixou as notificações ativas!')
            return;
        }

        //agenda uma notificacao 
        await Notications.scheduleNotificationAsync({
            content: {
                title: 'A consulta será desmarcada!!',
                body: 'Consulta desmarcada com sucesso!!!.',
                sound: 'cavalomeme.wav',
            },
            trigger: null
        })
    }


    return (
        <Modal
            {...rest} visible={visible} transparent={true} animationType="fade"
        >

            {/* container */}
            <PatientModal>

                {/* content */}
                <ContentModal>
                    {/* modal cancel */}
                    {/* <CancellationModal> */}
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    <Button onPress={() => handleCallNotifications() && setShowModalCancel(false)}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>
                    <ButtonSecundary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
                    </ButtonSecundary>
                    {/* </CancellationModal> */}

                </ContentModal>
            </PatientModal>
        </Modal>
    )
}