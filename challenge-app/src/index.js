import React,{Component} from "react";
import reactDom from "react-dom";
import Componente from "./ComponenteDetalle";


const divRoot = document.querySelector('#root');


reactDom.render( <Componente />,divRoot); 

console.log('Componente Clase');
