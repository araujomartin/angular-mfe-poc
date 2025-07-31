export type WrapperKind = 'module-federation' | 'native-federation';

export interface WrapperConfig {
    remoteEntry?: string;
    remoteName: string;
    exposedModule: string;
    elementName: string;
    kind: WrapperKind;
}
