import React from "react";
import {Modal} from "react-native";
import WebView from "react-native-webview";
import {ScreenProps} from "../../Types/MainTypes";

const DetailNews : React.FC<ScreenProps> = ({navigation, route}) => {

    const {webviewUri} = route.params;

    return (
        <Modal
            onRequestClose={() => navigation.goBack()}
        >
            <WebView source={{uri: webviewUri}}/>
        </Modal>
    )
}

export default DetailNews
