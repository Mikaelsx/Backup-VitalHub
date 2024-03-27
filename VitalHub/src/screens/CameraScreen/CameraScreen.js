import { CameraSystem } from "../../components/Camera/Camera"
import { Container } from "../../components/Container/style"

export const CameraScreen = ({navigation}) => {
    return (
        <Container>
            <CameraSystem navigation={navigation}/>
        </Container>
    )
}