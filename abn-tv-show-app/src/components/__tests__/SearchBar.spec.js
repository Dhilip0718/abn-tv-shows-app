import { expect, vi, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBar from '../SearchBar.vue'; // Replace with your component path
import ShowCard from '../ShowCard.vue';
import { nextTick } from 'vue';


describe('SearchBar', () => {
    // Mock tvShowsService.getFilteredShows
    vi.mock('../../services/tvShowsService', () => ({
        default: {
            getFilteredShows: vi.fn().mockResolvedValue([
                {
                    show: {
                        id: 1,
                        name: 'The Office',
                        image: { original: 'https://example.com/image.jpg' },
                        summary: 'A mockumentary sitcom following the everyday',
                    },
                },
                {
                    show: {
                        id: 2,
                        name: 'Breaking Bad',
                        image: { original: 'https://example.com/image2.jpg' },
                        summary: 'A high school chemistry teacher diagnosed with terminal',
                    },
                },
            ]),
        },
    }));

    it('renders search input and button', () => {
        const wrapper = mount(SearchBar);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true)// Adjust based on IconSearch rendering
    });

    it('fetches and displays TV shows on search', async () => {
        const wrapper = mount(SearchBar);
        const searchInput = wrapper.find('input');
    
        // Simulate user input and search
        await searchInput.setValue('office');
        await searchInput.trigger('keypress.enter');
    
        // Wait for asynchronous rendering to finish
        await nextTick();
    
        // Find all rendered ShowCard components
        const showCards = wrapper.findAllComponents(ShowCard);
    
        // Assert the number of ShowCard components
        expect(showCards).toHaveLength(2);
        const firstCardTitle = wrapper.find('.search-results .card-title').text();
        expect(firstCardTitle).toContain('The Office'); // Replace with expected title
    });
    

    
});
