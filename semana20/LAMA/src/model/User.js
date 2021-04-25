"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Band = exports.UserRole = exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    User.stringToUserRole = function (input) {
        switch (input) {
            case "NORMAL":
                return UserRole.NORMAL;
            case "ADMIN":
                return UserRole.ADMIN;
            default:
                throw new Error("Invalid user role");
        }
    };
    User.toUserModel = function (user) {
        return new User(user.id, user.name, user.email, user.password, User.stringToUserRole(user.role));
    };
    return User;
}());
exports.User = User;
var UserRole;
(function (UserRole) {
    UserRole["NORMAL"] = "NORMAL";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var Band = /** @class */ (function () {
    function Band(id, name, music_genre, responsible) {
        this.id = id;
        this.name = name;
        this.music_genre = music_genre;
        this.responsible = responsible;
    }
    Band.prototype.getBandId = function () {
        return this.id;
    };
    Band.prototype.getName = function () {
        return this.name;
    };
    Band.prototype.getMusic_genre = function () {
        return this.music_genre;
    };
    Band.prototype.getResponsible = function () {
        return this.responsible;
    };
    Band.toUserModel = function (band) {
        return new Band(band.id, band.name, band.music_genre, band.responsible);
    };
    return Band;
}());
exports.Band = Band;
