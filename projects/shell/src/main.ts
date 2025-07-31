import { initFederation as initNativeFederation } from '@angular-architects/native-federation';
import { initFederation as initModuleFederation } from '@angular-architects/module-federation';


(async () => {
  // 1. initFederation
  await initNativeFederation({
    'mfe-1': 'http://localhost:4300/remoteEntry.json',
    'angular-19-mfe': 'http://localhost:5000/remoteEntry.json',
  }).then((importMap) => {
    console.log('Native Federation initialized');
  });

  await initModuleFederation({
    'angular-15-mfe': {
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      type: 'module',
    },
  });

  // bootstrap
  await import('./bootstrap').catch(err => console.error(err));

})()

