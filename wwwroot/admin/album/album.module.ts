require("../core/core.module");

import { AlbumEditorComponent } from "./album-editor.component";
import { AlbumListComponent } from "./album-list.component";
import { AlbumComponent } from "./album.component";
import { AlbumsContainerComponent } from "./albums-container.component";
import { AlbumActionCreator } from "./album.actions";
import { AlbumService } from "./album.service";
import *  as reducers from "./album.reducers";

var app = (<any>angular.module("app.album", [
    "app.core"    
]));

app.service("albumActionCreator",["$location","dispatcher","albumService","guid",AlbumActionCreator]);
app.service("albumService",["$q","apiEndpoint","fetch",AlbumService]);
app.component(AlbumEditorComponent);
app.component(AlbumListComponent);
app.component(AlbumComponent);
app.component(AlbumsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
