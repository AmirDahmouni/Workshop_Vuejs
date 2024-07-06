const vueApp = {
  data() {
    return {
      societe: "ESN Consulting",
      nom: "We involve",
      nbClients: 4,
      Projects: [
        "Développement et maintenance",
        "Infrastructure et Devops",
        "It & data center"
      ]
    }
  },
  methods: {
    getNbClients() {
      if (this.nbClients === 0) {
        return `aucun client`
      } else if (this.nbClients === 1) {
        return `${this.nbClients} client`
      }
      else {
        return `${this.nbClients} clients`
      }
    },
    enter() {
      this.nbClients++;
    },
    leave() {
      if (this.nbClients <= 0) return;
      this.nbClients--;
    },
    displayBox(msg) {
      console.log(msg)
    }
  }
};
const APP = Vue.createApp(vueApp)
APP.mount('#app');