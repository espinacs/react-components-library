import React from 'react';
import { renderIntoDocument, render, cleanup } from 'react-testing-library';
import InstallSteps from '../index';


const testData = [
  {
    title: 'Extension Installed',
    content: 'A new prompt will show that the installation process is complete.',
    imgSrc: 'http://10.102.138.11:3001/assets/images/chrome/tracker-add.png',
  },
  {
    title: 'Add Extension',
    content: 'When you click the install button above, A browser prompt will appear when you click the install button',
    imgSrc: 'http://10.102.138.11:3001/assets/images/chrome/tracker-installed.png',
  },
];

afterEach(cleanup);

test('mounts empty, renders null', () => {
  const { container } = render(<InstallSteps />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with valid props and data is displayed', () => {
  const {
    getByTestId, queryByText, getByText,
  } = renderIntoDocument(<InstallSteps steps={testData} />);
  // check content is rendered
  expect(getByTestId('step-content').textContent).toEqual(testData[0].content);
  // check previous button is not available
  expect(queryByText('Previous')).toBeNull();
  // check no done button is available
  expect(queryByText('Done')).toBeNull();
  // check next button is available
  expect(getByText('Next').textContent).toEqual('Next');
});

test('renders with valid props and moves forward', () => {
  const {
    getByTestId, queryByText, getByText,
  } = renderIntoDocument(<InstallSteps steps={testData} />);
  try {
    getByTestId('button-next').click();
  } catch (e) {
    throw new Error(e);
  }
  // check proper content is rendered
  expect(getByTestId('step-content').textContent).toEqual(testData[1].content);
  // check all buttons are available except for next
  expect(getByText('Previous').textContent).toEqual('Previous');
  expect(queryByText('Next')).toBeNull();
  expect(getByText('Done').textContent).toEqual('Done');
});

test('renders with valid props and moves backward', () => {
  const {
    getByTestId, queryByText, getByText,
  } = renderIntoDocument(<InstallSteps initialStep={1} steps={testData} />);
  getByTestId('button-prev').click();

  // check we are back to square 0
  expect(getByTestId('step-content').textContent).toEqual(testData[0].content);
  expect(queryByText('Previous')).toBeNull();
  expect(queryByText('Done')).toBeNull();
  expect(getByText('Next').textContent).toEqual('Next');
});

test('renders with valid props and gets to the end', () => {
  const {
    getByTestId, queryByText, getByText,
  } = renderIntoDocument(<InstallSteps initialStep={1} steps={testData} />);
  getByTestId('button-done').click();

  // check we are at final step
  expect(getByTestId('step-content').textContent).toEqual(testData[1].content);
  expect(getByText('Previous').textContent).toEqual('Previous');
  expect(queryByText('Next')).toBeNull();
  expect(getByText('Done').textContent).toEqual('Done');
});

test('renders with valid props and calls onFinish when gets to the end', () => {
  const handleFinish = jest.fn()
  const { getByTestId } = renderIntoDocument(<InstallSteps
    steps={testData}
    initialStep={1}
    onFinish={handleFinish}
  />);
  getByTestId('button-done').click();
  // check function onFinish has been called
  expect(handleFinish).toHaveBeenCalledTimes(1);
});


test('renders with valid props and uses top navigation', () => {
  const {
    getByTestId, queryByText, getByText,
  } = renderIntoDocument(<InstallSteps initialStep={1} steps={testData} />);

  getByText(testData[0].title).click();
  // check we are back to square 0
  expect(getByTestId('step-content').textContent).toEqual(testData[0].content);
  expect(getByText('Next').textContent).toEqual('Next');
  expect(queryByText('Previous')).toBeNull();
  expect(queryByText('Done')).toBeNull();
});

