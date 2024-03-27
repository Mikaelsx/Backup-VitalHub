import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Image,
  Alert,
} from "react-native";

import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState, useRef } from "react";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export const CameraSystem = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [cameraFlip, setCameraFlip] = useState(CameraType.back);
  const [openModal, setOpenModal] = useState(false);
  const [savePhoto, setSavePhoto] = useState(null);

  //permissao de acesso á camera
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function capturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      {
        photo != null ? navigation.replace("Visualizar Prescricao") : null;
      }

      setSavePhoto(photo.uri); //salvando foto

      // setOpenModal(true) //abre modal com foto

      // console.log(photo); //debugar
    }
  }

  useEffect(() => {
    capturePhoto();
  }, []);

  // async function clearPhoto() {
  //     if (savePhoto != null) {
  //         await MediaLibrary.deleteAssetsAsync(savePhoto).then(() => { alert('apagou de boas') }).catch(error => { alert('uepa') })
  //     }

  //     setSavePhoto(null)
  //     setOpenModal(false)
  // }

  // async function uploadPhoto() {
  //     await MediaLibrary.createAssetAsync(savePhoto).then(() => {
  //         alert('Deu bom!')
  //     }).catch(error => { alert('deu ruim') });
  // }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraFlip}
        ratio="16:9" //ajusta resolucao
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity
            onPress={() =>
              setCameraFlip(
                cameraFlip == CameraType.back
                  ? CameraType.front
                  : CameraType.back
              )
            }
            style={styles.btnFlip}
          >
            {/* <Text style={styles.textFlip}>
              Trocar
            </Text> */}
            {/* <Image source={require('')}/> */}
            <FontAwesome6 name="camera-rotate" size={24} color="white" />
          </TouchableOpacity>

          {/* modal que abre quando tirar foto */}

          {/* <Modal animationType='slide' transparent={false} visible={openModal}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                            <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>


                                {/* botoes de controle */}
          {/* <TouchableOpacity onPress={() => clearPhoto()} style={styles.btnClear}>
                                    <FontAwesome name='trash' size={35} color={'black'} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => uploadPhoto()} style={styles.btnUpload}>
                                    <FontAwesome name='upload' size={35} color={'black'} />
                                </TouchableOpacity>

                            </View>

                            <Image style={{ width: '100%', height: 500, borderRadius: 15 }} source={{ uri: savePhoto }} />
                        </View>
                    </Modal> */}
        </View>
      </Camera>

      <TouchableOpacity
        onPictureTaken={() => capturePhoto().then(() => navigateScreen())}
        style={styles.btnCapture}
      >
        <FontAwesome name="camera" size={23} color={"black"} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Visualizar Prescricao")}
      >
        <FontAwesome
          name="close"
          size={40}
          color={"white"}
          style={styles.btnClose}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1, //todo espaco disponivel
    height: "100%",
    width: "100%",
  },
  viewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btnFlip: {
    padding: 20,
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  btnClear: {
    padding: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btnUpload: {
    padding: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btnClose: {
    // backgroundColor: 'blue',
    position: "absolute",
    bottom: 680,
    right: 140,
    width: 40,
    height: 40,
  },
});
