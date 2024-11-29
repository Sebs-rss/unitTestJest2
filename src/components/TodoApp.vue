<!-- <template>
  <div>
    <h1>Lista de tareas</h1>
    <div>
      <li v-for="todo in todoList" :key="todo.id" data-test="tarea">
        {{ todo.description }}
      </li>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      todoList: [{ id: 1, description: 'Description toDo 1', completed: false }],
    }
  },
}
</script>
-->

<!-- Componente modificado v2-->
<template>
  <div class="container">
    <h1>Lista de tareas</h1>
    <!-- <div>
      <li v-for="todo in todoList" :key="todo.id" data-test="tarea">
        {{ todo.description }}
      </li>
    </div> -->
    <form data-test="form" @submit.prevent="crearTarea">
      <input data-test="nueva-tarea" v-model="nuevaTarea" />
    </form>
    <br>
    <!-- Componente modificado para completar tareas v3 -->
    <div class="todo">
      <li
        v-for="todo in todoList"
        :key="todo.id"
        data-test="tarea"
        :class="[todo.completed ? 'completed' : '']"
      >
        {{ todo.description }}
        <input type="checkbox" v-model="todo.completed" data-test="checkbox" />
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      nuevaTarea: '',
      todoList: [{ id: 1, description: 'Description toDo 1', completed: false }],
    }
  },
  methods: {
    crearTarea() {
      this.todoList.push({
        id: 2,
        description: this.nuevaTarea,
        completed: false,
      })
    },
  },
}
</script>

<!-- Estilo para marcar la tarea como completada -->
<style scoped>
.completed {
  text-decoration: line-through;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
</style>
