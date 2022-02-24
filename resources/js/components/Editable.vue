<template>
  <div>
    <input type="text"
           v-if="edit"
           ref="inputValue"
           :value="valueLocal"
           @blur.prevent="valueLocal = $event.target.value; edit = false; $emit('input', valueLocal);"
           @keyup.enter.prevent="valueLocal = $event.target.value; edit = false; $emit('input', valueLocal);"
           autofocus
           @click="inputFocus()"
             />
        <p v-else @click="edit = true;">
          {{valueLocal}}
        </p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    props:['value'],
    setup (props) {
      
        const edit = ref(false)
        const valueLocal = props.value
        const inputValue = ref(null)
        const inputFocus = () => {
          inputValue.value.focus()
          console.log(inputValue.value)
        }
        

      onMounted(() => {
        // the DOM element will be assigned to the ref after initial render
        console.log(inputValue.value) // <div>This is a root element</div>
      })
        return {
            edit,
            valueLocal,
            inputFocus,
            inputValue
        }
    },
}
</script>

<style>
input {
  /* width: 100%; */
  /* font-family: 'Caveat', cursive;
  margin: 1rem 0;
  border: 1px solid black;
  font-size: 1rem; */
}
</style>