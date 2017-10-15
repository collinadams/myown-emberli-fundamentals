import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.modelFor('application').filterBy('title', params.id)[0];
    },
});
