import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddKeyForm extends Component{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        this.props.addKey(this.refs.key.value, this.refs.value.value);
        this.refs.key.value = '';
        this.refs.value.value = '';
    }

    render() {
        return (
            <form onSubmit={this.submit} className='add-key'>
                <div className='row gtr-uniform'>
                    <div className='col-12'>
                        <input id='key'
                               ref='key'
                               type="text"
                               required
                               placeholder='Key'
                        />
                    </div>
                    <div className='col-12'>
                        <input type='text'
                               id='value'
                               ref='value'
                               required
                               placeholder='Value'
                        />

                    </div>
                    <div className='col-12'>
                        <button>Add Key</button>
                    </div>
                </div>

            </form>
        );
    }
}

AddKeyForm.propTypes = {
    addKey: PropTypes.func.isRequired
};