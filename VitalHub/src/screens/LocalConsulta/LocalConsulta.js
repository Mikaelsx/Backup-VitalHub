import { ClinicInfosContainer, Container } from "../../components/Container/style";
import { MapInput } from "../../components/MapInput/MapInput";
import {
  ContainerInput,
  FlexTitle,
  InputFlex,
  LabelInputMap,
  TextInput,
  TextLocal,
} from "../../components/MapInput/style";
import { TextClinic } from "../../components/Titulo/style";
import { ButtonSelectText } from "../../components/CardClinic/style";
import {
  ButtonSecundaryText,
} from "../../components/Botao/style";

import { Map } from '../../components/Map/Map'

export const LocalConsulta = () => {
  return (
    <Container>
      <ClinicInfosContainer>
        {/* <ContainerMapImg source={require("../../assets/images/mp.png")} /> */}

        <Map />

        <FlexTitle>
          <TextClinic>Clínica Natureh</TextClinic>
          <TextLocal>São Paulo, SP</TextLocal>
        </FlexTitle>

        <InputFlex>
          <LabelInputMap>Endereço</LabelInputMap>
          <MapInput fieldwidth={320} fieldHeight={53} />
        </InputFlex>
        <ContainerInput>
          <TextInput>
            <LabelInputMap>Número</LabelInputMap>
            <MapInput fieldwidth={144} fieldHeight={53} />
          </TextInput>
          <TextInput>
            <LabelInputMap>Bairro</LabelInputMap>
            <MapInput fieldwidth={144} fieldHeight={53} />
          </TextInput>
        </ContainerInput>

        <ButtonSelectText>
          <ButtonSecundaryText>Voltar</ButtonSecundaryText>
        </ButtonSelectText>
      </ClinicInfosContainer>
    </Container>
  );
};
