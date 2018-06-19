'use strict';

describe('myApp.person module', function() {

  beforeEach(module('myApp.person'));

  describe('person controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var personCtrl = $controller('PersonCtrl');
      expect(personCtrl).toBeDefined();
    }));

  });
});