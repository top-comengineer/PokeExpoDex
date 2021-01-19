import React from 'react'
import { ListItem } from 'react-native-elements'

export default PokemonListItem = ({ children })=>(
  <ListItem >
    <ListItem.Content>
      <ListItem.Title>
          {children}
        </ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

