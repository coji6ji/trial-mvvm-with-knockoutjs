var GistViewModel = (function () {
  function GistViewModel(id, description, html_url) {
    this.id = ko.observable(id);
    this.description = ko.observable(description);
    this.html_url = ko.observable(html_url);
    this.text = ko.computed(function () {
      return this.id() + " : " + this.description();
    }, this);
  }

  return GistViewModel;
})();
