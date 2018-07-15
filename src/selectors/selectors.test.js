import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formated for dropDown', () => {
      const authors = [
        {id: 'jason', firstName: 'Jason', lastName: 'Yang'},
        {id: 'lucy', firstName: 'Lucy', lastName: 'Shuai'}
      ];

      const expected = [
        {value: 'jason', text: 'Jason Yang'},
        {value: 'lucy', text: 'Lucy Shuai'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    })
  });
});
