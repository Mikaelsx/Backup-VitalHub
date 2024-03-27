import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
  return (
    <View>
      <Button
        //titulo da tela que será chamado no navigation
        title={"Login"}
        //ao clique do botão será chamado a função
        onPress={() => navigation.navigate("Login")}
      />

      <Button
        title={"Password"}
        onPress={() => navigation.navigate("Password")}
      />

      <Button
        title={"Verificar Email"}
        onPress={() => navigation.navigate("Verificar Email")}
      />

      <Button
        title={"Redefinir Senha"}
        onPress={() => navigation.navigate("Redefinir Senha")}
      />

      <Button
        title={"Criar Conta"}
        onPress={() => navigation.navigate("Criar Conta")}
      />

      <Button
        title={"Medico Consultas"}
        onPress={() => navigation.navigate("Medico Consultas")}
      />

      <Button
        title={"Tela de Usuário"}
        onPress={() => navigation.navigate("Tela de Usuário")}
      />

      <Button
        title={"Médico Inserção Prontuário"}
        onPress={() => navigation.navigate("Médico Inserção Prontuário")}
      />

      <Button
        title={"Paciente Prontuario"}
        onPress={() => navigation.navigate("Paciente Prontuario")}
      />

      <Button
        title={"Selecionar Clinica"}
        onPress={() => navigation.navigate("Selecionar Clinica")}
      />


      <Button
        title={"Selecionar Médico"}
        onPress={() => navigation.navigate("Selecionar Médico")}
      />


      <Button
        title={"Selecionar Data"}
        onPress={() => navigation.navigate("Selecionar Data")}
      />
      

      <Button
        title={"Selecionar Local"}
        onPress={() => navigation.navigate("Selecionar Local")}
      />


      <Button
        title={"Visualizar Prescricao"}
        onPress={() => navigation.navigate("Visualizar Prescricao")}
      />


      <Button
        title={"Agendar Consulta"}
        onPress={() => navigation.navigate("Agendar Consulta")}
      />



    </View>
  );
};
