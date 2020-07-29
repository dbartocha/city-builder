import React, { Component } from 'react';
import styles from './SingleField.module.scss';

class singleField extends Component {



  render() {
    return (
      <div id={this.props.id}
        className={styles.SingleField}
        onDrop={this.props.dropBuilding}
        onDragOver={this.props.dragOver}
      >

      </div>
    );
  };
};

export default singleField;
