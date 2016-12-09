function ContactController() {
  var vm = this;

  vm.name = 'Bobo';
  vm.email = 'bobo@clown.com';
  vm.phone = '818-334-5869';

  vm.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
