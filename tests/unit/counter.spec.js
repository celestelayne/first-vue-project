import { render, fireEvent } from '@testing-library/vue'
import Counter from '@/components/AppCounter.vue'

test('It correctly responds to button clicks', async () => {
  const { getByText } = render(Counter);
  // Check initial state
  getByText('Count: 1');
  // Get buttons
  const incrementBtn = getByText('+');
  const decrementBtn = getByText('-');
  // Click the increment button
  await fireEvent.click(decrementBtn);

  // Counter should be updated
  getByText('Count: 0');

  // Additional clicks
  await fireEvent.click(incrementBtn);
  await fireEvent.click(incrementBtn);
  await fireEvent.click(incrementBtn);
  await fireEvent.click(incrementBtn);
  getByText('Count: 4');
  await fireEvent.click(decrementBtn);
  await fireEvent.click(decrementBtn);
  getByText('Count: 2');
});

test('It does not decrement count when count equals 1', async () => {

})