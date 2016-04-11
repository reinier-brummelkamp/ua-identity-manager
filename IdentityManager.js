//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript

var IdentityManager = (function () {
    "use strict";

    // Instance stores a reference to the Singleton
    var identity_manager_instance;

    function identity_manager_init(getIdentityUrl) {
        // Private variables
        var _getIdentityUrl = getIdentityUrl;

        // Private methods

        return {
            // Public methods and variables
            identity: {},

            // Public methods and variables
            refreshIdentity: function () {
                var _th = this;
                return new Promise(function (resolve, reject) {
                    $.get(_getIdentityUrl, function (data) {
                        _th.identity = data;
                        resolve(_th.identity);
                    })
                    .fail(function () {
                        reject();
                    });
                });
            }
        };
    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't  
        getInstance: function (getIdentityUrl) {
            if (!identity_manager_instance)
                identity_manager_instance = identity_manager_init(getIdentityUrl);

            return identity_manager_instance;
        }
    }
}());