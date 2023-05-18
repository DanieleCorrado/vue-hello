const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: 'Hello World!',
        image: 'https://picsum.photos/500/500',
        myId: 'title'
      }
    }
  }).mount('#app');