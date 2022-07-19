import { View, Text} from "react-native";



export default () => {
    return (
            <View>
                <Text>Tela Home</Text>
                <Button title="Ir para Contato"
                    onPress={() => {
                    props.navigation.navigate("Contato")
                    }} />
            </View>

    )

}
