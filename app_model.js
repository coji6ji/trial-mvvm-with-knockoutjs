var AppModel = (function () {
  function AppModel() {
    this.gists = ko.observableArray();
  }

  AppModel.prototype.search = function (user) {
    var endpoint = "https://api.github.com/users/" + user + "/gists?callback=?";
    $.ajax({
      url: endpoint,
      type: "GET",
      context: this,
      dataType: "jsonp",
      success: function (response) {
        var data = response.data;
        if (data.message) return;
        this.gists(data);
      },
    });
  };

  return AppModel;
})();
