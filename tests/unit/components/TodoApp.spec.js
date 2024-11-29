import { shallowMount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp'
describe('TodoApp.vue', () => {
  test('Se muestra la descripción de la tarea', () => {
    const wrapper = shallowMount(TodoApp)
    const todo = wrapper.get('[data-test="tarea"]')
    expect(todo.text()).toBe('Description toDo 1')
  }),
    //Nueva prueba (pero es síncrona y falla. Como una modificación en el DOM toma algo de tiempo, no captura el resultado)

    /* test('Deberá agregar una nueva tarea', () => {
    const wrapper = shallowMount(TodoApp)
    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1)
    wrapper.get('[data-test="nueva-tarea"]').setValue('Nueva tarea')
    wrapper.get('[data-test="form"]').trigger('submit')
    expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(2)
    }) */

    // Test modificado para hacerlo asincrónico

    test('Deberá agregar una nueva tarea', async () => {
      const wrapper = shallowMount(TodoApp)
      expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(1)
      await wrapper.get('[data-test="nueva-tarea"]').setValue('Nueva tarea')
      await wrapper.get('[data-test="form"]').trigger('submit')
      expect(wrapper.findAll('[data-test="tarea"]')).toHaveLength(2)
    }),

    // Nuevo test que evalúa el cambio de estado de la tarea con la presencia de una clase definida como completed.
    test('Se deberá marcar como tarea completada', async () => {
        const wrapper = shallowMount(TodoApp)
        await wrapper.get('[data-test="checkbox"]').setValue(true)
        expect(wrapper.get('[data-test="tarea"]').classes()).toContain('completed')
        }),


    // Nueva prueba para validar que el título H1 es enviado  mediante props
    
    test('Se deberá mostrar el título enviado mediante props', async () => {
      const wrapper = shallowMount(TodoApp, {
        propsData: {
          title: 'Mi primera tarea'
        }
      })
      expect(wrapper.get('h1').text()).toBe('Mi primera tarea')
    })

})

