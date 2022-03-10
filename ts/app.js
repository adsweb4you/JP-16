var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var x = 'myname';
var y = 87;
var myarr = ["asd", "asdas", 8764];
var User = {
    name: "admin",
    age: 45,
    role: 87,
    moder: 'sad'
};
var request = {
    urls: 'tsafdasd',
    methods: "post",
    header: { aplication: 'aplication/json' },
    response: { succ: 1 },
    success: function () {
        return 1;
    },
    fail: function () {
        return 0;
    }
};
function myname() {
    // return აქ აქვს
}
function myage(g) {
    return g;
}
myage('45');
myage(1231);
myage({ obj: "asd" });
function component(myname) {
    return myname;
}
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.bark = function () {
        return "56465";
    };
    Animal = __decorate([
        component({
            name: "asdas"
        })
    ], Animal);
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    Dog.prototype.test = function () {
        return _super.prototype.bark.call(this);
    };
    return Dog;
}(Animal));
var anim = new Animal();
console.log(anim.bark());
