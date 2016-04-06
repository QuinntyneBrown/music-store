import { CanActivate, Component, ChangeDetectionStrategy } from "./";

@Component({
    template: "<div data-ng-view=''></div>",
    selector: "router-outlet"
})
export class RouterOutletComponent { }
