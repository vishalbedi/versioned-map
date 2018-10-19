import React, {Component} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import PropTypes from 'prop-types';

export class Row extends Component{
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }
    remove(){
        this.props.onRemove(this.props.selectedKey, this.props.data.ver)
    }
    render() {
        return (
            <tr>
                <td>{this.props.data.ver}</td>
                <td>{this.props.data.value}</td>
                <td><FaTrashAlt className='page active' onClick={this.remove}/></td>
            </tr>
        );
    }
}

Row.propTypes = {
    data: PropTypes.shape({
        ver: PropTypes.string,
        value: PropTypes.any
    }).isRequired,
    selectedKey: PropTypes.any.isRequired,
    onRemove: PropTypes.func.isRequired
};