import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Image, } from 'react-native-elements'

export default PokemonCard = ({ id, name })=>{
    return(
        <View style={styles.container}>
                <Image
                    style={{width:500, height:350}}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    }}
                    resizeMode={'cover'}
                />
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    name:{
        fontWeight:'700',
        fontSize:30,
    }
})