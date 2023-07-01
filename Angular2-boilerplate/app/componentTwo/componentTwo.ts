import { Component } from "@angular/core";

@Component({
    selector: 'component-two',
    templateUrl: 'app/componentTwo/two.template.html'
})
export class ComponentTwo {
    private imageSrc: string = "app/image/earth.jpg";

    private changeColor: boolean = true;

    private colorProp: string = "blue";
}