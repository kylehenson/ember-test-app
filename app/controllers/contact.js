import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending your message in progress...');

      var responseMessage = 'From: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('message', '');
    }
  }
});
