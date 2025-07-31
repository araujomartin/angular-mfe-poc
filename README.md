# Angular Micro Frontend Example (MFE) with Native Federation

This repository demonstrates a micro frontend architecture using Angular 20 and `@angular-architects/native-federation`. It includes:

- **Shell (Host App):** The main application that loads remote modules.
- **mfe-1:** A remote Angular 20 application integrated via native federation.

## Getting Started

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Run the shell and mfe-1 apps:**
   ```bash
   ng s shell --port 4200
   ng s mfe-1 --port 4300
   ```
   By default, the shell loads `mfe-1` as a remote module.

## Integrating Remotes

- If you want to import other Angular applications with a different version, or applications built with other frameworks, you must expose them as **Web Components**.
- The shell uses a wrapper component to load such remotes. You need to configure the remote to export a web component and provide its details (remote name, exposed module, element name, remote entry URL) in the shell’s route configuration.

For Angular applications with versions lower than 16, Module Federation is used to load the remote application.

## Example

To load a remote Angular app (version different from 20) or another framework:
- Configure the remote to expose a web component.
- Add its configuration to the shell’s routes (see `app.routes.ts`).

```typescript
{
  path: 'angular-19-mfe',
  loadComponent: () => import('./components/wrapper/wrapper').then(m => m.Wrapper),
  data: {
    config: {
      exposedModule: './web-component',
      remoteName: 'angular-19-mfe',
      elementName: 'angular-19-mfe',
      kind: 'native-federation',
      remoteEntry: 'http://localhost:5000/remoteEntry.json',
    }
  }
}
```

## Notes


- For native federation, both shell and remote should use compatible Angular versions.
- For different versions or frameworks, use web components for integration.

For Angular versions 16 and above, you can import the web component using Native Federation. For older Angular versions, you need to use Module Federation.

## Example Remote Repositories

- [angular-15-remote (Web Component, Angular 15, Module Federation)](https://github.com/araujomartin/angular-15-remote)
- [angular-19-remote (Web Component, Angular 19, Native Federation)](https://github.com/araujomartin/angular-19-remote)
