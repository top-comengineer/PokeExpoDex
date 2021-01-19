import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'

const PokemonListItem = ({ name, id, onPress })=>(
  <ListItem 
    activeScale={0.95}
    bottomDivider
    Component={TouchableScale}
    friction={90}
    linearGradientProps={{
      colors: ['red', 'orange'],
      start: { x: .2, y: 0 },
      end: { x: 0.8, y: 0 },
    }}
    onPress={onPress}
    rounded 
    tension={100}
  >
    <Avatar 
      size={"medium"}
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      }} 
      />
    <ListItem.Content>
      <ListItem.Title 
        style={{ 
          color: 'yellow', 
          fontSize:20,
          fontWeight: 'bold', 
          }}
        >
          {name}
        </ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

export default PokemonListItem