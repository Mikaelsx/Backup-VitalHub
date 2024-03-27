import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_400Regular
} from "@expo-google-fonts/quicksand";
import { RecoveryPass } from "./src/screens/RecoveryPass/RecoveryPass";
import { Email } from "./src/screens/EmailConfirmation/Email";
import { ResetPass } from "./src/screens/ResetPass/ResetPass";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { MedicConsult } from "./src/screens/MedicConsult/MedicConsult";
import {
  PerfilUser,
} from "./src/screens/PerfilUser/PerfilUser";
import { MedicProntuary } from "./src/screens/MedicProntuary/MedicProntuary";
import { LocalConsulta } from "./src/screens/LocalConsulta/LocalConsulta";
import { PatientConsult } from "./src/screens/PatientConsult/PatientConsult";
import { ClinicSelect } from "./src/screens/ClinicSelect/ClinicSelect";
import { MedicSelect } from "./src/screens/MedicSelect/MedicSelect";
import { CalendarSelectData } from "./src/screens/CalendarSelectData/CalendarSelectData";
import { VisualizarPrescricao } from "./src/screens/VisualizarPrescricao/VisualizarPrescricao";
import { ScheduleMarked } from "./src/screens/ScheduleMarked/ScheduleMarked";
import { Main } from "./src/screens/Main/Main";
import { ConsultModal } from "./src/components/Modals/ConsultModal/ConsultModal";
import { ScheduleAppointment } from "./src/components/Modals/ScheduleAppointment/ScheduleAppointment";
import { CameraScreen } from "./src/screens/CameraScreen/CameraScreen";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
    MontserratAlternates_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const stack = createNativeStackNavigator();
  return (
    //container = NavigationContainer, container envolve toda estrutura de navegação
    //navigator = componente para navegação
    //screen(s) = tela(s)
    //name: nome da tela
    //component: componente que será chamado
    //options(title): titulo da tela



    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen
          name='Login'
          component={Login} //componente Login importado para ser usado aq
          options={{ title: "Login" }}
        />

        <stack.Screen
          name='Main'
          component={Main}
        />

        {/* <stack.Screen
          name="Navegacao"
          component={Navegacao} //componente Navegacao importado para ser usado aq
          options={{ title: "Navegação" }}
        /> */}
        {/* <stack.Screen
          name="Login"
          component={Login} //componente Login importado para ser usado aq
          options={{ title: "Login" }}
        /> */}
        <stack.Screen
          name="Password"
          component={RecoveryPass}
          options={{ title: "Recuperar senha" }}
        />

        <stack.Screen
          name="Verificar Email"
          component={Email}
          options={{ title: "Verificar Email" }}
        />

        <stack.Screen
          name="Redefinir Senha"
          component={ResetPass}
          options={{ title: "Redefinir Senha" }}
        />

        <stack.Screen
          name="Criar Conta"
          component={CreateAccount}
          options={{ title: "Criar Conta" }}
        />

        <stack.Screen
          name="Medico Consultas"
          component={MedicConsult}
          options={{ title: "Medico Consultas" }}
        />

        <stack.Screen
          name="Tela de Usuário"
          component={PerfilUser}
          options={{ title: "Tela de Usuário" }}
        />

        <stack.Screen
          name="Médico Inserção Prontuário"
          component={MedicProntuary}
          options={{ title: "Médico Inserção Prontuário" }}
        />

        <stack.Screen
          name="Local da consulta"
          component={LocalConsulta}
          options={{ title: "Local da consulta" }}
        />

        <stack.Screen
          name="Paciente Prontuario"
          component={PatientConsult}
          options={{ title: "Paciente Prontuario" }}
        />

        <stack.Screen
          name="Selecionar Clinica"
          component={ClinicSelect}
          options={{ title: "Selecionar Clinica" }}
        />

        <stack.Screen
          name="Selecionar Médico"
          component={MedicSelect}
          options={{ title: "Selecionar Médico" }}
        />


        <stack.Screen
          name="Selecionar Data"
          component={CalendarSelectData}
          options={{ title: "Selecionar Data" }}
        />


        <stack.Screen
          name="Selecionar Local"
          component={LocalConsulta}
          options={{ title: "Selecionar Local" }}
        />


        <stack.Screen
          name="Visualizar Prescricao"
          component={VisualizarPrescricao}
          options={{ title: "Visualizar Prescricao" }}
        />


        <stack.Screen
          name="Agendar Consulta"
          component={ScheduleMarked}
          options={{ title: "Agendar Consulta" }}
        />

        <stack.Screen
          name="ConsultModal"
          component={ConsultModal}
        />
        <stack.Screen
          name="Schedule"
          component={ScheduleAppointment}
        />

        <stack.Screen
          name="Camera"
          component={CameraScreen}
        />
        

      </stack.Navigator>
    </NavigationContainer>
  );
}
