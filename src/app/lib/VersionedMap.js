/**
 * To achieve the required functionality I will use a map of maps i.e
 *
 * So the below data structure will facilitate storage of all the versions of a specific key
 *
 * versionMap= {
 *           key1 : {
 *               v1: value,
 *               v2: value,
 *               v3: value,
 *               currentVersion: 3
 *           },
 *           key2 : {
 *               v1: value,
 *               v2: value,
 *               v3: value,
 *               currentVersion: 3
 *          }
 * }
 *
 * to get the latest version we will use the property currentVersion
 * and to set a new version we will simple add one to the currentVersion
 *
 * accessing the value of any version is o(1)
 * deletion is O(1)
 * and adding also is o(1)
 */

export class VersionedMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * Set the value of the map, the value is set as the latest version
     * if the key is added first time the value is set to version 1
     * @param key object key
     * @param value object value
     */
    set (key,value){
        if (!this.map.has(key))
            this.map.set(key, {
                'currentVersion': 0
            });
        let cv = this.map.get(key)['currentVersion'];
        this.map.get(key)[cv+1] = value;
        this.map.get(key)['currentVersion'] +=1;
    }

    /**
     * Gets the length of all the map
     * @returns {number}
     */

    get length(){
        return this.map.size;
    }

    /**
     * Gets the value of a key. If ver is not specified it returns the latest value of the key,
     * else the requested version
     * @param key
     * @param ver
     * @returns {*}
     */
    get(key, ver){
        if (!this.map.has(key))
            return null;
        if(typeof ver === 'undefined' || ver === null){
            ver = this.map.get(key)['currentVersion'];
        }
        return this.map.get(key)[ver];
    }

    /**
     * Removes a specific key of a specific version valued of a key
     * @param key
     * @param ver
     */
    remove(key,ver){
        this.hide(key,ver);
    }
    /**
     * Removes a specific key of a specific version valued of a key
     * @param key
     * @param ver
     */
    hide (key,ver){
        if (!this.map.has(key))
            return false;
        if(typeof ver === 'undefined' || ver === null)
            return this.map.delete(key);
        delete this.map.get(key)[ver];
        return true;
    }

    /**
     * Returns an iterator to iterate the keys
     * @returns {IterableIterator<any>}
     */
    keys(){
        return this.map.keys();
    }

    /**
     * Returns all versions of a specific key as a list
     * @param key
     * @returns {Array}
     */
    getValues(key){
        let values = [];
        if (!this.map.has(key))
            return values;
        let ver = this.map.get(key);
        Object.keys(ver).forEach(k=>{
            if (k !== 'currentVersion')
                values.push(ver[k]);
        });
        return values;
    }

    /**
     * Returns all versions of a key as an object list
     * [{
     *    ver: <ver>>,
     *    value: <value>
     * }]
     * @param key
     * @returns {[]}
     */
    getVerValues(key){
        let values = [];
        if (!this.map.has(key))
            return values;
        let allValues = this.map.get(key);
        Object.keys(allValues).forEach(key => {
            if(key !== 'currentVersion')
                values.push({
                    ver: key,
                    value: allValues[key]
                });
        });
        return values;
    }
}