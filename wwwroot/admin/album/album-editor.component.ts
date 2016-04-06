import { CanActivate, ChangeDetectionStrategy, Component } from "../../core";

@Component({
    template: require("./album-editor.component.html"),
    styles: [require("./album-editor.component.css")],
    selector: "album-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumEditorComponent {}


