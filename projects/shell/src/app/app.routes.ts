import { Routes } from '@angular/router';
import { loadRemoteModule as loadNativeFederationRemote } from '@angular-architects/native-federation';


export const routes: Routes = [
    {
        path: 'mfe-1',
        loadComponent: () => loadNativeFederationRemote('mfe-1', './Component').then(m => m.App),
    },
    {
        path: '**',
        redirectTo: 'mfe-1'
    }
];
