import Controller from '@ember/controller';
import { match, not, empty, or } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  headerMessage: 'Comming Soon',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabledEmail: not('isValid'),
  isDisabledMessage: empty('messageContent'),
  isBothTrue: or('isDisabledMessage', 'isDisabledEmail'),

  actions: {

    sendMessage() {
      alert(`Sending message: ${this.get('messageContent')} to emailAddress: ${this.get('emailAddress')} is in progress`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('messageContent', '');
    }
  }

});
