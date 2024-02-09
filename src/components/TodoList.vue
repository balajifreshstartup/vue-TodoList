<template>
  <ul class="list-group mb-0">
    <li v-for="todolist,index in todolists" :key="index"
      class="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
    >
      <div class="d-flex align-items-center">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          aria-label="..."
          :checked="todolist.status"
          @change="updateTodoListStatus(index, $event)"
        />
        <span>{{ todolist.todo }}</span>
      </div>
      <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
        <i class="fas fa-times text-primary"></i>
      </a>
    </li>
  </ul>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: "TodoList",
    props: {
      todolists:Array
    },
    methods:{
      ...mapActions([
        'changeTodoListStatus'
      ]),
      updateTodoListStatus(index){
        this.changeTodoListStatus({
          id: index,
        });
      }
    },
    data() {
    
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
