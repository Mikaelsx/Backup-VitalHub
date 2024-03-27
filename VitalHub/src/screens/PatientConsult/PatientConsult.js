import { ButtonsContainer, Container } from "../../components/Container/style";
import { HeaderConsult } from "../../components/Header/Header";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AbsTabsStyle } from "../../components/BtnListAppontement/AbsListAppointment";
import { useState } from "react";
import { ListComponents } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancellationModal } from "../../components/Modals/CancellationModal/CancellationModal";
import { ButtonDocEquipament } from "../../components/DocEquipament/DocEquipament";
import { ConsultModal } from "../../components/Modals/ConsultModal/ConsultModal";
import {
  BoxFooter,
  FooterText,
  FooterTextSelected,
  OptionsFooter,
  OptionsFooterSelected,
} from "../../components/FooterComponent/style";

import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


//import do icone que irei usar como imagem do botao
import iconMedic from "../../assets/icons/estetoscopio.png";
import { ScheduleAppointment } from "../../components/Modals/ScheduleAppointment/ScheduleAppointment";
import { VisualizarPrescricao } from "../VisualizarPrescricao/VisualizarPrescricao";

export const PatientConsult = ({ navigation }) => {
  const [statusListaMedicos, setStatusListaMedicos] = useState("pendente");

  //declaro uma variavel iconButton que guarda o icon(import da imagem que eu iria usar como icone do botão)
  const iconButton = iconMedic;

  const [showModalCancel, setShowModalCancel] = useState(false);
  // const [showModalOpenAppoitment, setShowModalAppointment] = useState(false);
  const [showModalConsult, setShowModalConsult] = useState(false);

  const [showModalScheduleAppointment, setShowModalScheduleAppointment] =
    useState(false);



  const [showVisualizarPrescricao, setShowVisualizarPrescricao] = useState(false)

  const pacienteUser = [
    {
      nome: "Vini",
      imagem: { uri: "http://github.com/Vinicius-Vieira-Andrade.png" },
    },
  ];

  const medicos = [
    {
      id: 1,
      nome: "Dr Vini",
      situacao: "pendente",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 2,
      nome: "Dr Chezzi",
      situacao: "pendente",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 3,
      nome: "Dr Enrike-Chan",
      situacao: "realizado",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 4,
      nome: "Dra Catarina",
      situacao: "cancelado",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 5,
      nome: "Dr Calvo",
      situacao: "cancelado",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 6,
      nome: "Dr EiThor",
      situacao: "realizado",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 6,
      nome: "Dr Thanos",
      situacao: "realizado",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
    {
      id: 6,
      nome: "Dr Ney",
      situacao: "realizado",
      imagem: require("../../assets/images/Maskgroup(2).png"),
    },
  ];

  return (
    <Container>
      {/* Header */}
      <HeaderConsult
        user={pacienteUser.find((element) => element.nome)}
        imagem={pacienteUser.find((element) => element.imagem)}
        navigation={navigation}
      />

      {/* Calendario */}
      <CalendarList />

      {/* Navegação dos botoes "Agendadas" "Realizados e "Cancelas"" */}
      <ButtonsContainer>
        <AbsTabsStyle
          textButton={"agendadas"}
          clickButton={statusListaMedicos == "pendente"}
          onPress={() => {
            setStatusListaMedicos("pendente");
          }}
        />
        <AbsTabsStyle
          textButton={"realizadas"}
          clickButton={statusListaMedicos == "realizado"}
          onPress={() => {
            setStatusListaMedicos("realizado");
          }}
        />
        <AbsTabsStyle
          textButton={"canceladas"}
          clickButton={statusListaMedicos == "cancelado"}
          onPress={() => {
            setStatusListaMedicos("cancelado");
          }}
        />
      </ButtonsContainer>

      {/* Sessao de Cards de médicos */}
      <ListComponents
        data={medicos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusListaMedicos === item.situacao ? (
            <AppointmentCard
              navigation={navigation}
              // onPress={() => navigation.replace}
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressSchedule={() => navigation.replace("Visualizar Prescricao")}
              onPressCard={() => navigation.replace("Schedule")}
              dados={item}
              currentScreen="patient"
            />
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />
      {/* Botão que ao clicar abre modal de agendar consulta */}

      <ButtonDocEquipament
        onPressConsult={() => setShowModalConsult(true)}
        //chamando a prop icon e passando como parametro a imagem guardada na variavel iconButton
        icon={iconButton}
      />

      <ConsultModal
        navigation={navigation}
        visible={showModalConsult}
        setShowModalConsult={setShowModalConsult}
      />

      {statusListaMedicos === 'cancelado' ? (
        () => navigation.replace("Visualizar Prescricao")) : null
      }

      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      {/* <BoxFooter>
        <OptionsFooterSelected>
          <FontAwesome6 name="calendar-days" size={22} color="#607EC5" />
          <FooterTextSelected>Agenda</FooterTextSelected>
        </OptionsFooterSelected>

        <OptionsFooter>
          <MaterialCommunityIcons
            name="hospital-building"
            size={22}
            color="black"
          />
          <FooterText>Clínicas</FooterText>
        </OptionsFooter>

        <OptionsFooter>
          <FontAwesome6 name="circle-user" size={22} color="black" />
          <FooterText>Perfil</FooterText>
        </OptionsFooter>
      </BoxFooter> */}
    </Container>
  );
};
