<template>
  <div class="w-full max-w-xs">
    <div class="bg-white rounded-b shadow-xl">
      <nav class="bg-orange-500 px-8 py-2 rounded-t flex justify-center">
        <img src="https://vuejs.org/images/logo.png" alt="logo" class="mr-2" width="30" />
        <p class="text-sm font-bold text-white text-center">Login</p>
      </nav>
      <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent="onSubmit(user, password)">
            <fieldset class="form-group mb-10 ">
              <input
                class="appearance-none border-b w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                v-model="user"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group mb-6">
              <input
                class="appearance-none border-b border-gray-300 w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign in</button>
          </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginView',
  data() {
    return {
      user: null,
      password: null,
    };
  },
  methods: {
    onSubmit(user, password) {
      if (user === 'admin' && password === '12345') {
        sessionStorage.setItem('user', JSON.stringify({ username: user }));
        sessionStorage.setItem('token', 'your auth token here');
        window.history.pushState(null, null, '/');
      } else {
        this.$toastr.e('Invalid credentials');
      }
    },
  },
};
</script>

<style>
</style>
