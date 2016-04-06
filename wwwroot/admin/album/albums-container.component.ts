import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./album.actions";
import { pluck } from "../core/pluck";
import { Album } from "./album.model";

@Component({
    routes: ["/admin/albums","/admin/album/edit/:albumId"],
    template: require("./albums-container.component.html"),
    styles: [require("./albums-container.component.css")],
    selector: "albums-container",
    viewProviders: ["$location","$routeParams","albumActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "albumActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, albumActionCreator: actions.AlbumActionCreator) => {
    var albumId = $route.current.params.albumId;
    var promises = [invokeAsync(albumActionCreator.all)];
    if (albumId) { promises.push(invokeAsync({ action: albumActionCreator.getById, params: { id: albumId } })) };
    return $q.all(promises);
}])
export class AlbumsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private albumActionCreator: actions.AlbumActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.albums;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentAlbumAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/albums");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentAlbumAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/album/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveAlbumAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["albumId"]), items: this.entities }) as Album;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/albums"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["albumId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["albumId"]), items: this.entities }) as Album;
        } else {
            this.entity = new Album();
        }
    }

    edit = entity => this.albumActionCreator.edit(entity);
    remove = entity => this.albumActionCreator.remove(entity);
    create = entity => this.albumActionCreator.create();
    addOrUpdate = options => this.albumActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
