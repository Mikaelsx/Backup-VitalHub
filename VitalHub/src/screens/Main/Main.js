import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MedicConsult } from '../MedicConsult/MedicConsult';
import { PerfilUser } from '../PerfilUser/PerfilUser'


// Chamando o componente de icon
import { ContentIcon, TextIcon } from './style';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { PatientConsult } from '../PatientConsult/PatientConsult';

const BottomTab = createBottomTabNavigator();

//  logica/estrutura dos botoes com navegacao para as telas

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='Home'

            //configuracao do comportamento do bottomTab como tamanha, cor de fundo  e posicionamento das abas
            screenOptions={({ route }) => ({

                // estilização do bloco/container que segura o conteudo do barBottom
                tabBarStyle: { backgroundColor: "#ffffff", height: 80, paddingTop: 10 },

                // cor da bar que estiver ativado
                tabBarActiveBackgroundColor: "transparent",

                // label do "name" da tela que demos nome no app.js
                tabBarShowLabel: false,


                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color='#4E4B59' />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    }
                    else {
                        return (
                            //FontAwesome5
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={18} color="#4E4B59" />
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )

                    }
                }
            })}
        >


            {/* no bottomtab, esses caras sao os botoes que irao quando clicados renderizara as telas */}
            <BottomTab.Screen
                name='Home'
                component={PatientConsult}
            />
            <BottomTab.Screen
                name='Perfil'
                component={PerfilUser}
            />
        </BottomTab.Navigator>
    )
}