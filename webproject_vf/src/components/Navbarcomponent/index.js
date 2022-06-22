import React, { Component } from 'react'
import { Menu , Button } from 'semantic-ui-react'


export default class Navbarcomponent extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
   

    return (
      <Menu stackable>
        
        <Menu.Item
          name='Photocon'
          >
          IG-Clone
        </Menu.Item>

        <Menu.Item>
        <img className="ui avatar image" src="../../people.png" />             

        </Menu.Item>

        <Menu.Item>         
        <Button basic color='red'>
        <form action="https://social-media-3444.netlify.app/">
        <button type="submit">個人介面</button>
        </form>
        </Button>
        </Menu.Item>
 
      </Menu>
    )
  }
}