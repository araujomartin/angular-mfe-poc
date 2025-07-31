import { ChangeDetectionStrategy, Component, input, viewChild, ViewContainerRef } from '@angular/core';
import { WrapperConfig } from './interfaces/wraper-config';
import { loadRemoteModule as loadNativeFederationRemote } from '@angular-architects/native-federation';
import { loadRemoteModule as loadModuleFederationRemote } from '@angular-architects/module-federation';


@Component({
    selector: 'app-wrapper',
    imports: [

    ],
    templateUrl: './wrapper.html',
    styleUrl: './wrapper.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Wrapper {
    // readonly #elementRef = inject(ElementRef);
    // readonly #vcr = inject(ViewContainerRef);

    protected readonly mfePlaceholder = viewChild('mfePlaceholder', { read: ViewContainerRef })

    // Don't forget to call withComponentInputBinding()
    // in your app.config.ts
    protected readonly config = input.required<WrapperConfig>();

    async ngOnInit() {
        const { exposedModule, remoteName, elementName, remoteEntry, kind } = this.config();

        if (kind === 'native-federation') {
            await loadNativeFederationRemote(
                remoteName,
                exposedModule
            ).then(
                (m) => {
                    m.defineWebComponent()
                    console.log('Loaded Native Federation Remote')
                }
            );
        } else {
            try {
                await loadModuleFederationRemote({
                    remoteEntry,
                    remoteName,
                    exposedModule
                }).then((m)=> {
                    console.log('Loaded Module Federation Remote');
                });
            } catch (error) {
                console.error(error);
            }


        }
        // Create the element
        const mfePlaceholder = this.mfePlaceholder();
        const element = document.createElement(elementName);
        const container = mfePlaceholder?.element.nativeElement as Comment;

        container.parentNode?.insertBefore(element, container);

    }
}
