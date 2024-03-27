import { ButtonSecundary, ButtonSecundaryText, ButtonSelect, ButtonTitle } from "../../components/Botao/style"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { LabelCalendar, SelectHour } from "../../components/CalendarComponent/style"
import { ButtonContainerSelect, ContentSelect } from "../../components/CardClinic/style"
import { Container } from "../../components/Container/style"
import Dropdown from "../../components/DropDownComponent/DropDown"
import { TitleSelect } from "../../components/Titulo/style"

export const CalendarSelectData = ({ navigation }) => {
    return (
        <Container>
            <ContentSelect>
                <TitleSelect>Selecionar data</TitleSelect>

                <CalendarComponent />

                <SelectHour>
                    {/* Select de horarios com biblioteca! */}
                    <Dropdown />
                </SelectHour>

                <ButtonContainerSelect>
                    <ButtonSelect onPress={() => navigation.replace("Agendar Consulta")}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonSelect>

                    <ButtonSecundary onPress={() => navigation.replace("Paciente Prontuario")}>
                        <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
                    </ButtonSecundary>
                </ButtonContainerSelect>


            </ContentSelect>
        </Container>
    )
}