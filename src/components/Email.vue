<template>
    <div>
        <el-input v-model="email_input" placeholder="Please Enter Your Email"></el-input>
        <p> {{ email_input }} </p>
    </div>

</template>

<script>
    export default {
      data () {
        return {
          email_input: ''
        }
      }
    }
</script>


