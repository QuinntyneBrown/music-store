import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AlbumActionCreator } from "./album.actions";

@Component({
    template: require("./album.component.html"),
    styles: require("./album.component.css"),
    selector: "album",
    viewProviders: ["albumActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent {
    constructor(private albumActionCreator: AlbumActionCreator) { }
  
}
