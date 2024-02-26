// TvShowsList.spec.ts (or your desired filename)

import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import MovieList from '../MovieList.vue'; // Assuming your component's path



vi.mock('../../services/tvShowsService', () => ({
  default: {
    fetchAllTvShowsData: vi.fn().mockResolvedValue([
      {
        id: 1,
        name: 'The Office',
        genres: ['Comedy', 'Mockumentary'],
        image: { medium: 'https://example.com/image.jpg' },
        summary: 'A mockumentary sitcom following the everyday',
      },
      {
        id: 2,
        name: 'Breaking Bad',
        genres: ['Crime', 'Drama', 'Thriller'],
        image: { medium: 'https://example.com/image2.jpg' },
        summary: 'A high school chemistry teacher diagnosed with terminal',
      },
    ]),

  },

}));

describe('TvShowsList.vue', () => {
  let wrapper;
  wrapper = mount(MovieList);


  it('renders correctly on load', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.container')).toBeTruthy();
    expect(wrapper.findAll('.genre-container')).toHaveLength(5); // No genres when data is empty
  });

  // Add more test cases to cover different scenarios and edge cases
});
