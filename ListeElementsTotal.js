import React from 'react'

function Element (props) {
  return (
    <li style={{color:props.col}}>{props.elem}</li>
    )
}

function ListeElementsTotal(props){
    return(
      props.tab.map((el,index)=> <Element col={props.couleur}
      elem={el} key={index}/>
    )
    )
}
export default ListeElementsTotal