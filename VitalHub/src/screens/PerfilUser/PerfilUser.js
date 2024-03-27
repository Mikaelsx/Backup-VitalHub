import { ScrollView } from "react-native";
import {
  Container,
  InfoContainer,
  UserBoxInput,
} from "../../components/Container/style";
import { ImageBox } from "../../components/Image/Image";
import { BoxUserInput, InputUser } from "../../components/Input/style";
import {
  Label,
  LabelCepCity,
  LabelDate,
  TextEmail,
} from "../../components/Text/style";
import { TitleUser } from "../../components/Titulo/style";
import {
  Button,
  ButtonEdit,
  ButtonExitApp,
  ButtonTitle,
} from "../../components/Botao/style";
import { InputUserSquare } from "./Index";

import {
  BoxFooter,
  FooterText,
  FooterTextSelected,
  OptionsFooter,
  OptionsFooterSelected,
} from "../../components/FooterComponent/style";

import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { userDecodeToken } from "../../Utils/Auth/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PerfilUser = ({navigation}) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  async function decodeName(){
    const token = await userDecodeToken();
    setName(token.name)
  }
  async function decodeEmail(){
    const token = await userDecodeToken();
    setEmail(token.email)
  }

  async function LogOut(){
    await AsyncStorage.removeItem("token");

    const TokenRemove = await AsyncStorage.getItem("token")

    if (TokenRemove == null) {
      alert("Deslogado com sucesso!")
      console.log("Deslogado com sucesso!")
    } else {
      alert("Falha ao deslogar.")
      console.log("Falha ao deslogar.")
    }

    navigation.replace("Login")
    // console.log( AsyncStorage.token )
  }

  useEffect(() => {
    decodeName()
    decodeEmail()
  },[])
  return (
    <ScrollView>
      <Container>
        <ImageBox source={require("../../assets/images/Rectangle426.png")} />

        <InfoContainer>
          <TitleUser>{name}</TitleUser>
          <TextEmail>{email}</TextEmail>
        </InfoContainer>

        <LabelDate>Data de Nascimento:</LabelDate>
        <InputUser />

        <Label>CPF</Label>
        <InputUser />

        <Label>Endereço</Label>
        <InputUser />

        <UserBoxInput>
          <BoxUserInput>
            <LabelCepCity>Cep</LabelCepCity>
            <InputUserSquare
              placeHolder="00000-000"
              containerWidth={144}
              maxLength={9}
              keyType="numeric"
            />
          </BoxUserInput>

          <BoxUserInput>
            <LabelCepCity>Cidade</LabelCepCity>
            <InputUserSquare placeHolder="Cidade" containerWidth={144} />
          </BoxUserInput>
        </UserBoxInput>
        <Button>
          <ButtonTitle onPress={() => navigation.replace("Paciente Prontuario")}>Salvar</ButtonTitle>
        </Button>

        <ButtonEdit>
          <ButtonTitle>Editar</ButtonTitle>
        </ButtonEdit>

        <ButtonExitApp onPress={LogOut}>
          <ButtonTitle>Sair do app</ButtonTitle>
        </ButtonExitApp>

      </Container>
    </ScrollView>
  );
};
