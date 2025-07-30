import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'mfe-1': 'http://localhost:4300/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
