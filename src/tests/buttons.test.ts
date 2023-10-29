import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Button } from '../components/buttons';

describe('Given Button component', () => {
  describe('When we instantiate', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
      container = document.createElement('div');
      container.id = 'buttons';
      document.body.appendChild(container);

      new Button('#buttons');
    });

    afterEach(() => {
      container.remove();
    });

    test('Then it should be in the document', () => {
      const prevButton = screen.getByText('Retroceder');
      const nextButton = screen.getByText('Avanzar');

      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    test('Then it should have the correct IDs', () => {
      const prevButton = screen.getByText('Retroceder');
      const nextButton = screen.getByText('Avanzar');

      expect(prevButton).toHaveAttribute('id', 'prev-button');
      expect(nextButton).toHaveAttribute('id', 'next-button');
    });
  });
});
