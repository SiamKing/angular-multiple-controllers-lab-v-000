function StaffController() {
  this.name = 'John'
  this.email = 'john@funnyguy.com'
  this.phone = '485-238-4994'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
