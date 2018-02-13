//reduer always calll with state and action
//if no state it will initialize as null
export default(state=null,action)=>
{
    //console.log(action);
    //alert(action);


switch(action.type){

    case 'select_library':
      return action.payload;
    default:
      return state;

};

  
};