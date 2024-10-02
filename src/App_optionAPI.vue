<script>
export default {
  data() {
    return {
      name: 'Adrian',
      status: 'active',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      link: 'https://google.com'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <h1 v-if="status === 'active'">User is Active</h1>
  <h2 v-else-if="status === 'pending'">User is Pending</h2>
  <p v-else>User is Inactive</p>
  <h6>Task :</h6>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">Click Here</a> -->
  <a :href="link">Click Here</a>
  <br />

  <!-- <button v-on:click="toggleStatus">Click Me to Change Status</button> -->
  <button @click="toggleStatus">Click Me to Change Status</button>
</template>
