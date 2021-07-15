import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', ()=> {
    test('by default, randomNumber data value should be 0', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })

    test('If button is clicked, randomNumber should be between 1 and 10', async () => {
        const wrapper = mount(RandomNumber)
        wrapper.find('button').trigger('click')
      
        // Wait for any reactivity changes to appear in the DOM
        await wrapper.vm.$nextTick()
      
        // This is now a random number instead of 0
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
    })

    test('If button is clicked, randomNumber should be bettween 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
            propsData: {
                min:200,
                max:300
            }
        })
        wrapper.find('button').trigger('click') 

        await wrapper.vm.$nextTick()
        const randomNumber = parseInt(wrapper.find('span').element.textContent)
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(RandomNumber).toBeLessThanOrEqual(300)
    })
})