import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import Comments from '../Comment/Comments'
export default class ModelCtr extends Component {
  state = { modalOpen: false}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
        <Modal     dimmer={"inverted"} trigger={<Button  disabled={this.props.show} inverted color='blue' size='mini'>展示留言</Button>}>
        <Modal.Header>留言</Modal.Header>
        <Modal.Content image scrolling>
       { (this.props.comments !== null) ? (<Comments  comments ={this.props.comments}  />) : (<div>"沒有留言"</div>) } 
           
        </Modal.Content>
      
      </Modal>
    )
  }
}
