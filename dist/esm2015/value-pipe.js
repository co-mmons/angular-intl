import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
let IntlValuePipe = class IntlValuePipe {
    constructor(service) {
        this.service = service;
    }
    transform(value) {
        return this.service.value(value);
    }
};
IntlValuePipe.ctorParameters = () => [
    { type: IntlService }
];
IntlValuePipe = __decorate([
    Pipe({
        name: "intlValue"
    })
], IntlValuePipe);
export { IntlValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJ2YWx1ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBTXRDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFdEIsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNKLENBQUE7O1lBTmdDLFdBQVc7O0FBRi9CLGFBQWE7SUFIekIsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLFdBQVc7S0FDcEIsQ0FBQztHQUNXLGFBQWEsQ0FRekI7U0FSWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IHtJbnRsVmFsdWV9IGZyb20gXCJAY28ubW1vbnMvanMtaW50bFwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsVmFsdWVcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsVmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBJbnRsVmFsdWU8YW55Pik6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UudmFsdWUodmFsdWUpO1xuICAgIH1cbn0iXX0=