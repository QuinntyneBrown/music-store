import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AlbumActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, albumService, guid) {
        super($location,albumService,dispatcher,guid,AddOrUpdateAlbumAction,AllAlbumsAction,RemoveAlbumAction,SetCurrentAlbumAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAlbumSuccessAction(options.entity));

	currentAlbumRemoved = () => this.dispatcher.dispatch(new CurrentAlbumRemovedAction());
}


export class AddOrUpdateAlbumAction { constructor(public id, public entity) { } }

export class AllAlbumsAction { constructor(public id, public entities) { } }

export class RemoveAlbumAction { constructor(public id, public entity) { } }

export class AlbumsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAlbumAction { constructor(public entity) { } }

export class AddOrUpdateAlbumSuccessAction { constructor(public entity) { } }

export class CurrentAlbumRemovedAction { constructor() { } }
