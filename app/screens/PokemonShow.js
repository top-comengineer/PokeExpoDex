import React,{ useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'

import { getPokemonDetails } from '../api/apiCalls'
import MoveListItem from '../components/MoveListItem'
import PokemonCard from '../components/PokemonCard'

export default PokemonShow = (props)=>{
    const { id, name } = props.route.params
    const loadingApi = LoadingHook(getPokemonDetails)

    useEffect(() => {
        loadingApi.request(id)
    },[]);

    const moveloaders = ({item})=>{
        return <MoveListItem>{item.move.name}</MoveListItem>
    }

    return(
        <>
        <View>
            <PokemonCard
                id={id} 
                name={name}
            />
            <Text 
                style={{
                    fontWeight:'bold',
                    fontSize:18, 
                    marginTop:20, 
                    marginBottom:20,
                    textAlign:'center'
                }
            }>
                Abilities/Moves
            </Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={loadingApi.data?.moves}
                renderItem={moveloaders}
            />
        </View>
        </>
    )
}