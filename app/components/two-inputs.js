import Ember from 'ember';

function upCase(k) {
    return Ember.computed(k, {
        get() {
            return this.get(k).toUpperCase();
        },
        set(key, newValue) {
            this.set(k, newValue.toLowerCase());
            return newValue;
        },
    })
}

export default Ember.Component.extend({
    upStr: upCase('str'),
});
