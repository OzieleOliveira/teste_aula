import{Text, View, Button } from "react-native" 

export default props => {
    return(
        <View>
            <Text>Tela Inicial</Text>
            <Button
            title="Ir para dobro"
            
            onPress={() =>{
                props.navigation.navigate("Dobro")
            
            }}
            testID='btnindex'
            />
        </View>
    )
}