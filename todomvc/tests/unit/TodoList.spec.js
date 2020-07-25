import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList';

describe('Todo list', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(TodoList, {
            propsData: {
                data: [
                    { id: 1, name: 'Todo', completed: false },
                    { id: 2, name: 'Todo B', completed: false }
                ]
            }
        });
    });

    it('render correctly', () => {
        let todoList = wrapper.find('.todo-list');

        expect(todoList.html()).toContain('Todo');
        expect(todoList.html()).toContain('Todo B');
    });

    it('delete correctly', async () => {
        let todoList = wrapper.find('.todo-list');
        await todoList.findAll('.destroy').at(0).trigger('click');

        expect(wrapper.find('.todo-list').findAll('li').length).toBe(1);
    });
});
