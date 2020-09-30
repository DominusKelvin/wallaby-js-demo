import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

test('App renders correctly', () => {
  render(<App />);
});

it('Vote count starts at 0', () => {
  const { getByTitle } = render(<App />);
  const voteElement = getByTitle('vote count');
  expect(voteElement).toHaveTextContent(/^0$/);
});

it('Vote count increments by 1 when upVote button is pressed', () => {
  const { getByTitle } = render(<App />);
  const upVoteButtonElement = getByTitle('upVote');
  const voteElement = getByTitle('vote count');
  fireEvent.click(upVoteButtonElement);
  expect(voteElement).toHaveTextContent(/^1$/);
});

it('Vote count decrements by 1 when downVote button is pressed', () => {
  const { getByTitle } = render(<App />);
  const downVoteButtonElement = getByTitle('downVote');
  const voteElement = getByTitle('vote count');
  fireEvent.click(downVoteButtonElement);
  expect(voteElement).toHaveTextContent(/^-1$/);
});

afterEach(cleanup);
