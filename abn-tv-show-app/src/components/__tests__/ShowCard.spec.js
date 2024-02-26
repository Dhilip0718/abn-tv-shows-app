import { mount } from '@vue/test-utils';
import ShowCard from '../ShowCard.vue'; // Assuming your component is named Card.vue
import { expect, describe, it } from 'vitest';

describe('Card.vue', () => {
  it('renders the card with provided props', () => {
    const wrapper = mount(ShowCard, {
      props: {
        cardHeader: 'This is a card header',
        imageUrl: 'https://example.com/image.jpg',
        cardDescription: 'This is a very long description that exceeds the character limit and should be truncated.This is a very long description that exceeds the character limit and should be truncated and which is available for triming',
      },
    });

    // Assert that the card exists
    expect(wrapper.find('.card')).toBeTruthy();

    // Assert the card header
    expect(wrapper.find('.card-title').text()).toBe('This is a card header');

    // Assert the truncated card description
    expect(wrapper.find('.card-description').text()).toBe('This is a very long description that exceeds the character limit and should be truncated.This is a very long description that exceeds the character limit and should be truncated and which is ...');

    // Assert the image source
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg');
  });

  it('limits the card description to 190 characters', () => {
    const longDescription = 'This is a very long description that exceeds the character limit and should be truncated.This is a very long description that exceeds the character limit and should be truncatedaadadadadadadadadasdadddd';
    const wrapper = mount(ShowCard, {
      props: {
        cardHeader: 'Another card',
        imageUrl: 'https://example.com/image2.jpg',
        cardDescription: longDescription,
      },
    });

    expect(wrapper.find('.card-description').text()).toBe('This is a very long description that exceeds the character limit and should be truncated.This is a very long description that exceeds the character limit and should be truncatedaadadadadadad ...');
  });
});
