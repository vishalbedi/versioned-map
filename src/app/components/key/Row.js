import React, {Component} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import PropTypes from 'prop-types';

export class Row extends Component{
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.select = this.select.bind(this);
    }
    select(){
        this.props.onSelect(this.props.data);
    }
    remove(){
        this.props.onRemove(this.props.data);
    }
    render() {
        return (
            <li>
                <div className='row'>
                    <div onClick={this.select} className='col-6 page'>
                        {this.props.data}
                    </div>
                    <div className='col-6 page' >
                        <FaTrashAlt onClick={this.remove} />
                    </div>
                </div>

            </li>
        );
    }
}

Row.propTypes = {
    onRemove: PropTypes.func.isRequired,
    data : PropTypes.any.isRequired,
    onSelect: PropTypes.func
};