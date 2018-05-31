import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Card from '../../../src/components/Card';

afterEach(cleanup);

test('mounts empty, renders null', () => {
  const { container } = render(<Card />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders something inside', () => {
  const expected = 'test';
  const { container } = render(<Card><span>{expected}</span></Card>);
  expect(container.firstChild).toMatchSnapshot();
});

test('does apply light style', () => {
  const expected = 'test';
  const { container } = render(<Card type="contrast"><span>{expected}</span></Card>);
  expect(container.firstChild).toMatchSnapshot();
});
