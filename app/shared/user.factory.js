/**
 * Created by Erik on 4/1/17.
 */

app.factory('User', function ($log, fire) {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    User.prototype.name = function () {
        return this.name;
    };

    User.prototype.email = function () {
        return this.email;
    };

    // TODO: Improve security
    User.prototype.password = function () {
        return this.password
    };

    // TODO: Implement
    User.prototype.changeName = function (newName) {

    };

    // TODO: Implement
    User.prototype.modifyWebsites = function (websites) {

    };

    return User;
});
