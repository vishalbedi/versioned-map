import React, {Component} from 'react';
import {Row} from './Row';
import PropTypes from 'prop-types';

export class KeyList extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.mapKeys;
        return (
            <div>
                <div>
                    <ul className='alt'>
                        {data.map(m=>(<Row
                            data ={m}
                            key = {m}
                            onSelect={this.props.onSelect}
                            onRemove={this.props.onRemove}/>))}
                    </ul>
                </div>
            </div>
        );
    }
}

KeyList.propTypes ={
    mapKeys : PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onSelect: PropTypes.func
};