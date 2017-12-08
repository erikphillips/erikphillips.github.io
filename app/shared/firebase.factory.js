/**
 * Created by Erik on 4/1/17.
 */


app.factory("fire", function () {
    var service = {};

    service.userLogin = function (user) {
        $log.debug("logining in user...");

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then( function (res) {
                $log.debug("user login successful");
                currentUserWatcher();
            })
            .catch(function(error) {
                $log.error("login user error: " + error);
            });
    };

    service.createNewUser = function (user) {
        $log.debug("creating new user...");

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(function (res) {
                $log.debug("firebase user creation successful");
                currentUserWatcher();
            })
            .catch(function (error) {
                $log.error("firebase user creation error: " + error);
            });
    };

    function currentUserWatcher() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                $log.debug("fire auth: current user is signed in: " + user);
                // User is signed in.
            } else {
                // No user is signed in.
                $log.debug("fire auth: no current user is signed in");
            }
        });
    }

    return service;
});
