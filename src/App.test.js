import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './StoreContext'; 
import { shallow, mount } from 'enzyme';

test('renders My Travel Journal heading', () => {
  render(<StoreProvider><App /></StoreProvider>);
  const h1 = screen.getByText(/My Travel Journal/i);
  expect(h1).toBeInTheDocument();
});

test('renders Add trip button', () => {
  render(<StoreProvider><App /></StoreProvider>);
  const button = screen.getByText(/Add new trip/i);
  expect(button).toBeInTheDocument();
});

test('change modalOpen to true when button is clicked', () => {
  const wrapper = render(<StoreProvider><App /></StoreProvider>);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('openModal')).toEqual(true);
});