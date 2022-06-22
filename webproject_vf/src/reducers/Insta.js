import moment from 'moment';

const initalState = {

    instas: []
    
}

const Insta = (state = initalState, action) => {

    // creating new state with object destructuring , instead of mutating original
    const newState = { ...state };
    if (action.type === "LOAD_INSTAS") {

        const newData = action.newInstas.data;
        
        // original data set has no comments, info , isLiked properties .
        // this are added for the functionality of app in runtime

        const LoadedInsta  =newData.map( (s) => {
                s['comments'] =[] ;
                s['info']='';
                s['isLiked']=false;
                    return s;
        });
             
        //returning the updated state 
        return { ...state, instas: LoadedInsta }
    }

    if (action.type === "UPDATE_INFO") {
        const {timestamp,info} = action.payload;
        const updated = newState.instas.map( (p) => {

             if(p.timestamp === timestamp){
                 
                 return { ...p, info:info };
             }
                
                 return p; 
             }) 

        return { ...state, instas : updated }
    }

    if (action.type === "DELETE_POST") {
        
        const timestamp = action.timestamp;

        const updated = newState.instas.filter( (p) => p.timestamp !== timestamp );
         
        return { ...state, instas : updated }
    }

    if (action.type === "LIKE") {

        const incLikefor = action.timestamp;

        const updated = newState.instas.map( (p) => {

            if(p.timestamp === incLikefor){
                
                return { ...p, likes: p.likes + 1, isLiked:true };
            }
               
                return p; 
            }) 
 
        return { ...state ,instas: updated }
    }

    if (action.type === "COMMENT") {

        const { timestamp , cmtTxt } = action.payload;
        const updated = newState.instas.map( (p) => {

            if(p.timestamp === timestamp){
                 
                 return { ...p ,
                        comments:[
                                    ...p.comments,
                                    cmtTxt
                                ]

                };
             }
                
                 return p; 
             }) 

        return { ...state ,instas:updated  }
    }

    ///IMAGE_UPLOAD
    if (action.type === "IMAGE_UPLOAD") {

        const  {url,info}  = action.payload;
        const timestamp = moment().format('YYYY-MM-DD h:mm:ss');
        const Image = url;
        const likes = 0;
        const comments =[];
        const isLiked =false;
      

    const newInsta = { Image, likes,timestamp,comments ,info,isLiked}
    
    let AddedInsta  ={...state, instas : [ newInsta ,  ...state.instas  ] }

    return AddedInsta;

    }



     

    return newState;
}

export default Insta;