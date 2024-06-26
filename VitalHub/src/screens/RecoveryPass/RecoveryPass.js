import { Button, ButtonTitle } from "../../components/Botao/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Titulo/style"
import {ReturnButton} from "../../components/ReturnButton/index"
import { Logo } from "../../components/Logo/style"

export const RecoveryPass = ({ navigation }) => {
    return (
        <Container>
            <ReturnButton onPress={() => navigation.replace("Login")} iconName="arrowleft" />

            {/* <Icon source={require("../../assets/icons/icon_arrow.png")} /> */}


            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")} />
            <Title>Recuperar senha</Title>
            <Text>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Text>

            <Input placeholder='Usuário ou E-mail' />

            <Button>
                <ButtonTitle onPress={() => navigation.replace("Verificar Email")}>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}