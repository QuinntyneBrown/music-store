import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./album-list.component.html"),
    styles: [require("./album-list.component.css")],
    selector: "album-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumListComponent {
    constructor() { }     
}
