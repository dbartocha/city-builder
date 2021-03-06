import React, { Component } from 'react';
import Building from '../Building1x1/Building1x1';
import styles from './SingleField.module.scss';

class singleField extends Component {
  componentDidUpdate() {
    console.log('[SingleField] Updated');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.building !== null
  }
  render() {
    let building = null;
    if(this.props.building) {
      building = <Building /> // remove id and draggable attribute
    }
    return (
      <div id={this.props.id}
        className={styles.SingleField}
        onDrop={this.props.dropBuilding}
        onDragOver={this.props.dragOver}
      >
        {building}
      </div>
    );
  };
};

export default singleField;
