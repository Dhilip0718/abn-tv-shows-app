import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import MovieList from '../MovieList.vue'; 



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

describe('MovieList', () => {
  let wrapper;
  wrapper = mount(MovieList);


  it('should render correctly on load', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.container')).toBeTruthy();
    expect(wrapper.findAll('.genre-container')).toHaveLength(5); 
  });

});
