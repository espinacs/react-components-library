import React from 'react';
import { renderIntoDocument, cleanup } from 'react-testing-library';
import Button from '../../../src/components/Button';

const mockClick = jest.fn();
afterEach(cleanup);

test('mounts empty, renders null', () => {
  const { container } = renderIntoDocument(<Button onPress={mockClick} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders something inside', () => {
  const expected = 'test';
  const { container } = renderIntoDocument(<Button onPress={mockClick}>{expected}</Button>);
  expect(container.firstChild).toMatchSnapshot();
});


test('can be clicked', () => {
  const expected = 'test';
  const { getByText } = renderIntoDocument(<Button onPress={mockClick}>{expected}</Button>);
  getByText(expected).click();
  expect(mockClick).toHaveBeenCalledTimes(1);
});

test('does apply light style', () => {
  const expected = 'test';
  const { container } = renderIntoDocument(<Button onPress={mockClick} type="light">{expected}</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
