import Index from "../pages/Index";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default () => (
    <Stack.Navigator initialRouteName="Index">
    <Stack.Screen name="Contato" component={Contato} />
    <Stack.Screen name="Sobre" component={Sobre} />
    <Stack.Screen name="Index" component={Index} />
    </Stack.Navigator>
    
    )