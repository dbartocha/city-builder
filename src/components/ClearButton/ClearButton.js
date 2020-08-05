import React, { Component } from 'react';
import styles from './ClearButton.module.scss';
import firebase from '../../firebase';


class ClearButton extends Component {
 

   clearBoardHandler = () => {
    const cityRef = firebase.database().ref('city');
    const buildingsArray = [];
   
    cityRef.on("value", function(data){
        
        const buildings = data.val();
        
        for (let key in buildings) {
            buildingsArray.push(key);
        }

 
    }, function (error){
        
        console.log("Error: " + error.code);
   
    })
    if(buildingsArray.length>0){
    for(let i=0; i<buildingsArray.length;i++){
    firebase.database().ref("city/"+ buildingsArray[i]).remove();
    }

    window.location.reload();
    }
    else{
        alert('Your board is empty!');
    }
   }

    render (){

        return(
           
                <button onClick={this.clearBoardHandler} className={styles.ClearButton}>
                    Clear Board
                </button>
            
        )
    };
}

export default ClearButton;