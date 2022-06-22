import React, { Component } from 'react'
import * as actionCreators from '../../actions/index';
import { connect } from 'react-redux';
import './cards.css';
import { Button, Divider,Label  ,Modal,Header,Input} from 'semantic-ui-react'
import  ModelCtr  from '../Model/ModelCtr'


class index extends Component {

    state = {

        liked: false,
        comment: '',
        comments: [],
        editInfoStatus:false,
        infoTxt:''
    }

    handleDeletePost = (timestamp) =>{

        this.props.delete(timestamp);
    }

    handleOnchange = (e) => {
        
        this.setState({ comment: e.target.value })

    }
     
    handleLike = () => {
       
        this.setState({ ...this.state, liked: true})
    }

    handleEdit = (info) =>{
     
        this.setState({ ...this.state, editInfoStatus:true ,infoTxt:info });
         

    }
    handleUpdateInfoTxt = (e) =>{
        
        this.setState({ infoTxt: e.target.value })
      
         
     }
     handleUpdate = (timestamp) =>{
        this.setState({ editInfoStatus:false })
        this.props.info(timestamp,this.state.infoTxt);
     }

    handleOnkeyPress = (event,timestamp) => {
        
        if (event.key === 'Enter') {
         
            this.props.cmt(timestamp,this.state.comment);

            this.setState({ ...this.state, comment: '' });
        }
    }

    
    render() {

        // destructing obtained Props from `Grids` component
         
        const { timestamp, Image, likes, comments ,info ,isLiked} = this.props.instasP;
     
        const noOfComments = comments.length;
        return (

            <div className="ui card">

                <div className="content">
                    <div className="right floated meta">{timestamp}</div>
                    <img className="ui avatar image" 
                    src="./people.png" /> Lynne
                </div>
                <div className="image">
               
                     <Modal trigger={ <img className="Imghgt" src={Image}  
                       />} basic size='small'>
                        <Header  content='圖片檢視' />
                        <Modal.Content>
                      
                         <img src={Image}   />
                        </Modal.Content>
                        <Modal.Actions>
                        
                        <Button color='green' inverted>
                                點擊空白處已離開
                        </Button>
                        </Modal.Actions>
                    </Modal>

                </div>
                <div className="contentHeartComment">
                    <span className="left floated">
                        <i className="heart  like icon" />
                        {likes} 愛心
                      </span>
                      <span><i className="comment icon" />
                      {noOfComments} 留言</span>
                    
     </div>

            <div>
            {/**  checking edit state to show a saved value or to show input box  */}
            { (this.state.editInfoStatus === false)  ? 
                (
                 /// check If user added info or not    
                ( info === "" ) ?
                (<div className="Txt">
                    沒有資訊 <a onClick={() => this.handleEdit(info)} >...編輯</a>
                    </div>)
                : 
                
                (   <div>
                    { info }<a onClick={() => this.handleEdit(info)} >...編輯</a>
                    </div>
                ) 
                
                    )
             : ( // If user clicked edit Then Text input box appears 
                     <div>
                        <Input    value={this.state.infoTxt}
                        onChange={event => this.handleUpdateInfoTxt(event)}
                         focus placeholder='更新貼文內容' />
                        <a  onClick={() => this.handleUpdate(timestamp)}  >...更新</a>
                    </div>
                
            ) }
              
            </div>

          <div className="extra content">
                    <div className="ui large transparent left icon input">

                    {/**  Clicking Like icon triggers `handleLike` to change `state.liked` and 
                          `hitActionTrigger`  which triggers an action for the event 
                    */}
                        <a onClick={() => {
                          
                            this.handleLike();
                            this.props.hitActionTrigger(timestamp);
                        }}  >
                            <i className={"heart icon " + (isLiked ? 'liked' : null)}></i></a>

                        <input type="text"
                            value={this.state.comment}
                            onChange={event => this.handleOnchange(event)}
                            onKeyPress={(event) => this.handleOnkeyPress(event,timestamp)}

                            placeholder="按下enter以留言" />

                    </div>

                     
                    <Divider />


                    {(noOfComments === 0) ?
                        (<Button inverted color='red' disabled >沒有留言</Button>) :
                        (                        
                            <div>
                                <div className="event">
                                     
                                    <div className="content">
                                        <div className="summary">                    
                                     <b>使用者留言  </b>
                                              <span> <b>{comments[comments.length -1]} </b> </span>
                                               
                                         </div>
                                    </div>
                                 </div>
                

                              <ModelCtr comments = {comments} show={false}/>                      
                            </div>
                        )
                        
                    }
                    <Divider />
                    
                    <Label className="delete"  onClick={() => this.handleDeletePost(timestamp)} color='red' horizontal>
                                 刪除
                     </Label>
                  
                    


                </div>
            </div>
        )
    }
}


const mapDispathToProps = (dispatch) => {

    return ({

        hitActionTrigger: (timestamp) => {
           
            dispatch(actionCreators.hitLike(timestamp))
        },
        cmt : (timestamp,cmtTxt) =>{
            console.log("sending " + timestamp+cmtTxt);
            dispatch(actionCreators.hitComment(timestamp,cmtTxt))

        },
        info : (id,info) =>{
            console.log("sending " + info+id);
            dispatch(actionCreators.updateInfo(id,info))

        },
        delete : (timestamp) =>{
            
            dispatch(actionCreators.deletePost(timestamp))

        },


    });
}


export default connect(null, mapDispathToProps)(index);

