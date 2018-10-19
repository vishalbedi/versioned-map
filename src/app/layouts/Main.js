import React, {Component} from 'react';
import {AddKeyForm} from '../components/AddKeyForm';
import {VersionedMap} from '../lib/VersionedMap';
import {KeyList} from '../components/key/KeyList';
import {ValueList} from '../components/value/ValueList';

export class Main extends Component{
    constructor(props) {
        super(props);
        this.map = new VersionedMap();
        this.state = {
            keys:[],
            valuesOfAKey: [],
            selectedKey:''
        };
        this.remove = this.remove.bind(this);
        this.addKey = this.addKey.bind(this);
        this.selectedKey = this.selectedKey.bind(this);
    }

    remove(key,ver){
        this.map.remove(key,ver);
        let isKeyDeleted = this.map.length !== this.state.keys.length;
        if (isKeyDeleted){
            let keys = [...this.map.keys()];
            let selectedKey = keys.length ? keys[0] : '';
            this.setState({
                keys: keys,
                selectedKey: selectedKey,
                valuesOfAKey: this.map.getVerValues(selectedKey)
            });
        }
        else
            this.setState({
                valuesOfAKey: this.map.getVerValues(key)
            });
    }
    addKey(key, value){
        let mapSize = this.map.length;
        this.map.set(key,value);
        let isNewKeyAdded = mapSize !== this.map.length;
        if (isNewKeyAdded) {
            this.setState({
                selectedKey:key,
                keys: [...this.map.keys()]
            });
        }
        this.setState({
            valuesOfAKey: this.map.getVerValues(key)
        })
    }

    selectedKey(key){
        if (key !== this.state.selectedKey)
            this.setState({
                selectedKey:key,
                valuesOfAKey: this.map.getVerValues(key)
            });
    }

    render() {
        return (
            <div id='main'>
                <div className='inner'>
                    <section>
                        <header>
                            <h1>
                                Version control Map
                            </h1>
                        </header>
                        <div className='row'>
                            <div className='col-4 col-12-medium'>
                                <h3>Add Data to MAP</h3>
                                <AddKeyForm addKey={this.addKey}/>
                            </div>
                            <div className='col-4 col-12-medium'>
                                <h3>Keys inside the MAP</h3>
                                <KeyList
                                    onSelect={this.selectedKey}
                                    onRemove={this.remove}
                                    mapKeys={this.state.keys}/>
                            </div>
                            <div className='col-4 col-12-medium'>
                                <h3>Values of the key = {this.state.selectedKey}</h3>
                                <ValueList
                                    onRemove={this.remove}
                                    valList={this.state.valuesOfAKey}
                                    selectedKey={this.state.selectedKey}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

