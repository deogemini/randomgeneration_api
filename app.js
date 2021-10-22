const app = Vue.createApp({
  data() {
    return {
            title: "Mr",
      firstname: "Deogratias",
      lastname: "Gemini",
      email: "geminideogratias8@gmail.com",
      country: "Tanzania",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/47.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      this.title = results[0].name.title
      this.firstname = results[0].name.first
      this.lastname = results[0].name.last
      this.email = results[0].email
      this.country = results[0].location.country
      this.gender = results[0].gender
      this.picture = results[0].picture.large   
    },
  },
});

app.mount("#app");
