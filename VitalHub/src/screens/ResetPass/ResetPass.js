import { Button, ButtonTitle } from "../../components/Botao/style"
import { CloseButton } from "../../components/CloseButton/Index"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { Logo } from "../../components/Logo/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Titulo/style"

export const ResetPass = ({ navigation }) => {
    return (
        <Container>
            <CloseButton onPress={() => navigation.replace(("Login"))} iconName="close"/>
            {/* <Icon onPress={() => navigation.replace("Login")}> <IconImage source={require("../../assets/icons/Group170.png")}/> </Icon> */}

            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")} />

            <Title>Redefinir senha</Title>
            <Text>Insira e confirme a sua nova senha</Text>

            <Input placeholder="Nova Senha" />
            <Input placeholder="Confirmar nova senha" />

            <Button>
                <ButtonTitle onPress={() => navigation.replace("Login")}>Confirmar nova senha</ButtonTitle>
            </Button>
        </Container>


    )
}