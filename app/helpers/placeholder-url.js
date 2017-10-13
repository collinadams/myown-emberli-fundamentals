import Ember from 'ember';

export function placeholderUrl(params = [], { w, h } = {}) {
  if (params.length) {
    return params;
  } else {
    const baseUrl = 'http://placekitten.com/';
    const width = w ? Math.max(w, 10): 100;
    const height = h ? Math.max(h, 10) : 120;
    return `${baseUrl}${width}/${height}`;
  }
}

export default Ember.Helper.helper(placeholderUrl);
