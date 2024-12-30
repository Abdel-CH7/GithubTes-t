import React from 'react'

function Element (props) {
  return (
    <center>  <li style={{color:props.col}}>{props.elem}</li> </center>
    )
}

function ListeElements(props){
    return<>

      <ul style={{color:props.couleur}}>
      <center><h2>{props.tittre}</h2></center>

    {props.tab.map((el,index)=> <Element col={props.couleur}
      elem={el} key={index} />
      
    )}
    </ul>
    </>
    
}
export default ListeElements