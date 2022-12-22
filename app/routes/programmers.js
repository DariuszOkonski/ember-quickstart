import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Larry Page', 'Linus Torvalds', 'Bill Getes', 'Ada Lovelace'];
  }
}
