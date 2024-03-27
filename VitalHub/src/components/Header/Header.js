import { FontAwesome } from "@expo/vector-icons";
import {
  DoctorName,
  DoctorUser,
  HeaderContainer,
  HeaderContent,
  Welcome,
} from "./style";
import { ContentInfosDoc, DoctorBox } from "../Container/style";
import { useEffect, useState } from "react";

import { UserEncodeToken, userDecodeToken, userEncodeToken } from "../../Utils/Auth/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage"; // ASYNC STORAGE
import { jwtDecode } from "jwt-decode";
import { encode, decode } from "base-64"; // BASE - 64

export const HeaderConsult = ({ user, imagem, navigation }) => {
  const [name, setName] = useState()
  const [role, setRole] = useState()

  async function decodeName(){
    const token = await userDecodeToken();
    setName(token.name)
  }
  async function decodeRole(){
    const token = await userDecodeToken();
    setRole(token.role)
  }

  async function profileLoad(){
    const token = await userDecodeToken();

    if (token) {
      console.log( token )
    }
  }


  useEffect(() => {
    profileLoad()
    decodeName()
    decodeRole()
  },[])
  return (
    <HeaderContainer>
      <HeaderContent>
        <DoctorBox>
          <DoctorUser
            source={imagem.imagem}
          />
          <ContentInfosDoc onPress={() => navigation.replace("Tela de Usuário")} >
            <Welcome>Bem vindo(a) {role}</Welcome>
            <DoctorName>{name}</DoctorName>
          </ContentInfosDoc>
        </DoctorBox>
        <FontAwesome name="bell" size={25} color="white" />
      </HeaderContent>
    </HeaderContainer>
  );
};
