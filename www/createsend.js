var CreateSend = function () {
    this._defaults = {};
};

CreateSend.prototype = {    
    subscribe: function (name, email, callback) {
        cordova.exec(callback, null, 'CreateSend', 'subscribe', [{name:name,email:email}]);
    } 
};

var plugin  = new CreateSend();
module.exports = plugin;
