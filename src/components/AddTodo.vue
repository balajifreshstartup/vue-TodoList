<template>
  <h6 class="mb-3">Awesome Todo List</h6>
  <form class="d-flex justify-content-center align-items-start mb-4" v-on:submit.prevent="addTodo">
    <div class="form-outline flex-fill">
      <input v-model="newTodo" type="text" id="form3" class="form-control form-control-lg" />
      <label class="form-label" for="form3"
        >What do you need to do today?</label
      >
    </div>
    <button type="button" v-on:click="addTodo" class="btn btn-primary btn-lg ms-2">Add</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: "AddTodo",
    data() {
      return {
        newTodo: ''
      }
    },
    props: {},
    methods:{
      ...mapActions([
        'addTodoAction'
      ]),
      addTodo(e){
        e.preventDefault();
        if(this.newTodo.trim() === '') return
        this.addTodoAction({
          todo: this.newTodo,
          status:false
        })
        this.newTodo = '';
      }
    },
    computed:{
      
    }
  };
</script>
