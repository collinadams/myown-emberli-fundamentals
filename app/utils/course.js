import Ember from 'ember';

const Course = Ember.Object.extend({
    title: 'No Title',
    description: '',
    init() {
        this._super(...arguments);
        this.set('tags', []);
        this.set('languages', []);
    },
});

Course.reopenClass({
    _langHash: {
        js: 'JavaScript',
    },
    languageName(codeStr) {
        return this._langHash[codeStr] || 'Unknown';
    },
});

export default Course;