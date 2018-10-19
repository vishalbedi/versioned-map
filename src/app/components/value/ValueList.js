import React, {Component} from 'react';
import {Row} from "./Row";
import PropTypes from 'prop-types';

export class ValueList extends Component{
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Version
                            </th>
                            <th>
                                Value
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.valList.map(val => <Row
                            onRemove={this.props.onRemove}
                            selectedKey={this.props.selectedKey}
                            key={val.ver}
                            data={val}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

ValueList.propTypes = {
    valList : PropTypes.array.isRequired,
    selectedKey: PropTypes.any.isRequired,
    onRemove: PropTypes.func.isRequired
};