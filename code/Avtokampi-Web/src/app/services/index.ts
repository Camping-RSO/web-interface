import * as fromRepos from './repositories';

export const services: any[] = [
  fromRepos.AvtokampiService,
  fromRepos.KampirnaMestaService,
  fromRepos.RezervacijeService,
  fromRepos.MnenjaService,
  fromRepos.ApiService,
  fromRepos.UserService,
];

export * from './guards';
export * from './repositories';
export * from './interceptors';
export * from './directives';
