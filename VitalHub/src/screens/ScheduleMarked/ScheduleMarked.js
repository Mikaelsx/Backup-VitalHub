import { Container } from "../../components/Container/style"
import { ConfirmModal } from "../../components/Modals/ConfirmModal/ConfirmModal"

export const ScheduleMarked = ({ navigation }) => {

    return (
        <Container>
            <ConfirmModal navigation={navigation} />
        </Container>
    )
}