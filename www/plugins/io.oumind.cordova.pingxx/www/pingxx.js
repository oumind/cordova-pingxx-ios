cordova.define("io.oumind.cordova.pingxx.pingxx", function(require, exports, module) { module.exports = {
  createPayment: function(name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Pingxx", "createPayment", [name]);
  }
};

});
