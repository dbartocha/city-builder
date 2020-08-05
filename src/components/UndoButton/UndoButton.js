import React, { Component } from 'react';
import styles from './UndoButton.module.scss';
import firebase from '../../firebase';


class UndoButton extends Component {


   undoMoveHandler = () => {
    const cityRef = firebase.database().ref('city');
    const buildingsArray = [];
    let lastMove;
    cityRef.on("value", function(data){
        
        const buildings = data.val();
        
        for (let key in buildings) {
            buildingsArray.push(key);
        }

        lastMove =buildingsArray[buildingsArray.length - 1];
    }, function (error){
        
        console.log("Error: " + error.code);
   
    })
    
   if(buildingsArray.length>0){
    firebase.database().ref("city/"+ lastMove).remove();
    window.location.reload();
   }
   else
    {
        alert('Your board is empty!');
    }
   }

    render (){
     
        return(
            
                <button onClick={this.undoMoveHandler} className={styles.UndoButton}>
                    Undo
                </button>
          
        )
    };
}

export default UndoButton;