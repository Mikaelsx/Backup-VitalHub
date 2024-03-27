import { useState } from 'react'
import { Button, ButtonGoogle, ButtonTitle, GoogleTitle } from '../../components/Botao/style'
import { Container } from '../../components/Container/style'
import { ContentAccount, LinkAccount, TextAccount } from '../../components/ContentAccount/style'
import { Input } from '../../components/Input/style'
import { Link } from '../../components/Link/style'
import { Logo } from '../../components/Logo/style'
import { Title } from '../../components/Titulo/style'
import { AntDesign } from '@expo/vector-icons';

import api from '../../service/service'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Login = ({navigation}) => {
    const [email, setEmail] = useState('Mikael@gmail.com')
    const [senha, setSenha] = useState('Senai@134')

    // const {insertUser, setInsertUser} = useState({email: 'paciente', senha: '1234'})

    async function Login() {
        await api.post('/Login', {
            email : email,
            senha : senha
        }).then( async (response) =>{
            await AsyncStorage.setItem("token", JSON.stringify( response.data ))
            console.log( response )
           
            navigation.navigate('Main')    
        }).catch( error =>{
            console.log(error)
        })

    }

    return (
        <Container>
            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")} />

            <Title>Entrar ou criar conta</Title>
            
            <Input
                value={email}
                onChange={event => setEmail( event.nativeEvent.text)}
                placeholder="Usuario ou Email" 
            />
            <Input 
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
                placeholder="Senha" 
            />

            <Link onPress={() => navigation.replace(("Password"))}>Esqueceu sua senha?</Link>

            <Button>
                <ButtonTitle onPress={() => Login()}>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <GoogleTitle>Entrar com Google</GoogleTitle>
            </ButtonGoogle>


            <ContentAccount>
                <TextAccount>Não tem conta? <LinkAccount onPress={() => navigation.replace(("Criar Conta"))}>Crie uma conta agora!</LinkAccount></TextAccount>
            </ContentAccount>
        </Container>
    )
}