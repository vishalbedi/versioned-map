import {VersionedMap} from './VersionedMap';
describe('Create a Map', ()=>{
   it('Create a new Map', ()=>{
       let map = new VersionedMap();
       expect(map).to.be.a('object');
   });
   it('Add data to map', ()=>{
       let map = new VersionedMap();
       map.set('animal','dog');
       map.set('vehicle','car');
       expect(map.length).to.equal(2);
   });
});

describe('Get Content',()=>{
    it('Return the latest Value of a key', ()=>{
        let map = new VersionedMap();
        map.set('animal','dog');
        map.set('animal', 'cat');
        map.set('animal', 'mouse');
        map.set('animal', 'elephant');
        expect(map.get('animal')).to.equal('elephant');
    });

    it('Return the 2 version Value of a key', ()=>{
        let map = new VersionedMap();
        map.set('animal','dog');
        map.set('animal', 'cat');
        map.set('animal', 'mouse');
        map.set('animal', 'elephant');
        expect(map.get('animal', 2)).to.equal('cat');
    });

    it('Return undefined if ver is not int', ()=>{
        let map = new VersionedMap();
        map.set('animal','dog');
        map.set('animal', 'cat');
        map.set('animal', 'mouse');
        map.set('animal', 'elephant');
        expect(map.get('animal', 2.1)).to.equal(undefined);
    });
});



describe('Delete Content',()=>{
    it('Remove a key thats present in map', ()=>{
        let map = new VersionedMap();
        map.set('animal','dog');
        map.set('animal', 'cat');
        map.set('animal', 'mouse');
        map.set('animal', 'elephant');
        expect(map.hide('animal')).to.equal(true);
    });

    it('Remove specific version of key', ()=>{
        let map = new VersionedMap();
        map.set('animal','dog');
        map.set('animal', 'cat');
        map.set('animal', 'mouse');
        map.set('animal', 'elephant');
        map.hide('animal', 2);
        expect(map.get('animal',2)).to.equal(undefined);
    });
});

describe('Multiple Keys and Values', ()=>{
    it('Get all keys', ()=>{
        let map = new VersionedMap();
        map.set('cat',4);
        map.set('dog', 5);
        map.set('mouse', 3);
        map.set('elephant', 9);
        expect([...map.keys()].length).to.equal(4);
    });
    it('All Versions of a key', ()=>{
        let map = new VersionedMap();
        map.set('animal','dog');
        map.set('animal', 'cat');
        map.set('animal', 'mouse');
        map.set('animal', 'elephant');
        expect(map.getValues('animal').length).to.equal(4);
    });
});