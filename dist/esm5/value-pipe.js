import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlValuePipe = /** @class */ (function () {
    function IntlValuePipe(service) {
        this.service = service;
    }
    IntlValuePipe.prototype.transform = function (value) {
        return this.service.value(value);
    };
    IntlValuePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlValuePipe = __decorate([
        Pipe({
            name: "intlValue"
        })
    ], IntlValuePipe);
    return IntlValuePipe;
}());
export { IntlValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJ2YWx1ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBTXRDO0lBRUksdUJBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFxQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQUw0QixXQUFXOztJQUYvQixhQUFhO1FBSHpCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxXQUFXO1NBQ3BCLENBQUM7T0FDVyxhQUFhLENBUXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IHtJbnRsVmFsdWV9IGZyb20gXCJAY28ubW1vbnMvanMtaW50bFwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsVmFsdWVcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsVmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBJbnRsVmFsdWU8YW55Pik6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UudmFsdWUodmFsdWUpO1xuICAgIH1cbn0iXX0=