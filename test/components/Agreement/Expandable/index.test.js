import React from 'react';
import { cleanup, renderIntoDocument } from 'react-testing-library';
import Expandable from '../../../../src/components/Agreement/Expandable';

afterEach(cleanup);

test('renders empty', () => {
  const { container } = renderIntoDocument(<Expandable />);
  // check content is rendered empty
  expect(container.firstChild).toBeNull();
});

test('renders something inside', () => {
  const title = 'test';
  const content = 'test text';
  const {
    getByTestId,
    queryByTestId,
  } = renderIntoDocument(<Expandable title={title} content={content} />);
  expect(getByTestId('title').textContent).toEqual(title);
  expect(queryByTestId('content')).toBeNull();
});
test('does expand', () => {
  const title = 'test';
  const content = 'test text';
  const {
    getByTestId,
  } = renderIntoDocument(<Expandable title={title} content={content} />);
  getByTestId('title').click();
  expect(getByTestId('content').textContent).toEqual(content);
});
