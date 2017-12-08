/**
 * Created by Erik on 1/1/17.
 */

app.factory('userManagement', function () {
    var service = {};
    var _loggedIn = false;
    var _credentials = {
        username: '',
        password: '',
        admin: false
    };

    service.isLoggedIn = function () {
        console.log('login check: ' + _loggedIn);

        return _loggedIn;
    };

    service.getUsername = function () {
        console.log('getting username');

        return _credentials.username;
    };

    service.verifyPassword = function (password) {
        console.log('verifying password');

        return password == _credentials.password;
    };

    service.isAdmin = function () {
        console.log('verifying admin status');

        return _credentials.admin;
    };

    service.logout = function () {
        console.log('logging out user');

        _credentials.username = '';
        _credentials.password = '';
        _credentials.admin = false;

        _loggedIn = false;

        localStorage.removeItem('loggedIn');

        return true;
    };

    var adminLogin = function () {
        if (_loggedIn && _credentials.username == 'admin' && _credentials.password == 'admin') {
            _credentials.admin = true;
        } else {
            _credentials.admin = false;
        }
    };

    var getCache = function () {
        var cache = JSON.parse(localStorage.getItem('loggedIn'));
        if ( cache ) {
            console.log('using cached credentials');
            return {username: cache.username, password: cache.password};
        } else {
            return null;
        }
    };

    service.cachedLogin = function () {
        var cache = getCache();
        if ( cache ) {
            _credentials.username = cache.username;
            _credentials.password = cache.password;
            _loggedIn = true;
            adminLogin();
        } else {
            _loggedIn = false;
        }

        return _loggedIn;
    };

    service.login = function (username, password, useCache) {
        console.log('logging in user');

        var cache = getCache();
        if ( cache ) {
            _credentials.username = cache.username;
            _credentials.password = cache.password;
        } else {
            _credentials.username = username;
            _credentials.password = password;
        }

        _loggedIn = true;
        adminLogin();

        if (useCache) {
            localStorage.setItem('loggedIn', JSON.stringify(_credentials));
        }

        return _credentials.username;
    };

    return service;
});