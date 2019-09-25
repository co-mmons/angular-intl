import * as tslib_1 from "tslib";
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
IntlValuePipe = tslib_1.__decorate([
    Pipe({
        name: "intlValue"
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
], IntlValuePipe);
export { IntlValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJ2YWx1ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBTXRDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFdEIsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNKLENBQUE7O1lBTmdDLFdBQVc7O0FBRi9CLGFBQWE7SUFIekIsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLFdBQVc7S0FDcEIsQ0FBQzs2Q0FHK0IsV0FBVztHQUYvQixhQUFhLENBUXpCO1NBUlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcbmltcG9ydCB7SW50bFZhbHVlfSBmcm9tIFwiQGNvLm1tb25zL2pzLWludGxcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFZhbHVlXCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bFZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogSW50bFZhbHVlPGFueT4pOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnZhbHVlKHZhbHVlKTtcbiAgICB9XG59Il19