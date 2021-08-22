var AppViewModel = (function () {
  function AppViewModel(model) {
    this.user = ko.observable();
    this.gists = ko.observableArray();
    this.model = model;
    this.model.gists.subscribe(function (gists) {
      var newGists = $.map(gists, function (item, index) {
        return new GistViewModel(item.id, item.description, item.html_url);
      });
      this.gists(newGists);
    }, this);
  }

  AppViewModel.prototype.search = function () {
    this.gists.removeAll();
    this.model.search(this.user());
  };

  return AppViewModel;
})();
