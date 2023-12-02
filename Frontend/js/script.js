const app = Vue.createApp({
    data: function () {
      return {
        title: 'NutriMade',
        nutri_info_1: 'Dieta Wegańska',
        nutri_info_2: 'Dieta Wegetariańska',
        nutri_info_3: 'Bez Laktozy',
        nutri_info_4: 'Cukrzyca',
        nutri_info_5: 'Kalorie',
        text: '',
        loading: false,
        vegan_diet: false,
        vegetarian_diet: false,
        no_lactose: false,
        Diabetes: true,
        Calories: '',
        Meal_type: '',
        Preferences: '',
      }
    },
    methods: {
      async sendNutriForm() {
          // Data to be sent in the request body (if any)
          // Data to be sent in the request body (if any)
          const requestData = {
            vegan_diet: this.vegan_diet,
            vegetarian_diet: this.vegetarian_diet,
            no_lactose: this.no_lactose,
            Diabetes: this.Diabetes,
            Calories: this.Calories,
            Meal_type: this.Meal_type,
            Preferences: this.Preferences,
        };

          this.loading = true;

          // method post
          const response = await fetch(`http://127.0.0.1:8000/generate-dish-propositions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'accept': 'application/json',
              // You may need to include additional headers such as authentication tokens
            },
            body: JSON.stringify(requestData), // Convert the data to JSON format
            }
            );

            this.loading = false;

            setTimeout(() =>  {
              window.location.href = 'propozycje.html'
            }, 500)

            // ;
      },
      getData() {
        return this.text
      },
      // Method to handle toggle clicks
      handleToggleClick(property) {
        this[property] = !this[property];
        console.log(this[property]);
      },
    }, 
    computed: {
      // Computed property to dynamically select the toggle image based on the data property
      toggleImage() {
          return this.vegan_diet ? 'assets/img/toggleOn.svg' : 'assets/img/toggleOff.svg';
      },
  },
  }); 
  