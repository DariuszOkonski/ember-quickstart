import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Marie Curie', 'Mea Jemison', 'Albert Hofmann'];
  }
}
