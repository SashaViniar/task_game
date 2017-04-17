System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Content;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Content = (function () {
                function Content() {
                    this.names = [
                        { name_challenge: "football Dengo PS Fifa17", challenge: "football", count_people: "9" }
                    ];
                }
                Content.prototype.onAddName = function (nam_i_c_n, nam_i_c, nam_i_c_p) {
                    this.names.push({ name_challenge: nam_i_c_n.value, challenge: nam_i_c.value, count_people: nam_i_c_p.value });
                };
                Content = __decorate([
                    core_1.Component({
                        selector: 'my-content',
                        templateUrl: "app/Content/content.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content);
                return Content;
            }());
            exports_1("Content", Content);
        }
    }
});
//# sourceMappingURL=content.component.js.map