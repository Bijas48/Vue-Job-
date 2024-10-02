<script setup>
import { onMounted, ref } from 'vue'
const name = ref('John Doe')
const status = ref('active')
const tasks = ref(['task 1', 'task 2', 'task 3'])
const newTask = ref(['masukan task anda'])

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.log('Error Fetching Tasks')
  }
})
</script>

<template>
  <h1>{{ name }}</h1>
  <h1 v-if="status === 'active'">User is Active</h1>
  <h2 v-else-if="status === 'pending'">User is Pending</h2>
  <p v-else>User is Inactive</p>

  <form @click.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h6>Task :</h6>
  <ul>
    <!-- <li v-for="task in tasks" :key="task">{{ task }}</li> -->
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
        <button @click="deleteTask(index)">x</button>
      </span>
    </li>
  </ul>

  <!-- <a v-bind:href="link">Click Here</a> -->
  <a :href="link">Click Here</a>
  <br />

  <!-- <button v-on:click="toggleStatus">Click Me to Change Status</button> -->
  <button @click="toggleStatus">Click Me to Change Status</button>
</template>
