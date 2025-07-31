import { Routes } from '@angular/router';
import { loadRemoteModule as loadNativeFederationRemote, } from '@angular-architects/native-federation';
import { WrapperConfig } from './components/wrapper/interfaces/wraper-config';


export const routes: Routes = [
    {
        path: 'mfe-1',
        loadComponent: () => loadNativeFederationRemote('mfe-1', './Component').then(m => m.App),
    },
    {
        path: 'angular-19-mfe',
        loadComponent: () => import('./components/wrapper/wrapper').then(m => m.Wrapper),
        data: {
            config: {
                exposedModule: './web-component',
                remoteName: 'angular-19-mfe',
                elementName: 'angular-19-mfe',
                kind: 'native-federation',
                // You need this project running on port 5000 (https://github.com/araujomartin/angular-19-remote)
                remoteEntry: 'http://localhost:5000/remoteEntry.json',
            } as WrapperConfig
        }
    },
    {
        path: 'angular-15-mfe',
        loadComponent: () => import('./components/wrapper/wrapper').then(m => m.Wrapper),
        data: {
            config: {
                exposedModule: './web-component',
                remoteName: 'angular-15-mfe',
                elementName: 'angular-15-mfe',
                kind: 'module-federation',
                // You need this project running on port 3000 (https://github.com/araujomartin/angular-15-remote)
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
            } as WrapperConfig
        }
    },
    {
        path: '**',
        redirectTo: 'mfe-1'
    }
];
