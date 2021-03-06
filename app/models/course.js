import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
    title: attr('string'),
    summary: attr('string'),
    slug: attr('string'),
    'image-info': attr(),

    stages: hasMany('course-stage'),
});
