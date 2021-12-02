<template>
  <div class="container-fluid">
    <div class="row" style="margin-top:10px">
      <div class="col-m2-12">
        <h3>Escolha os exames que deseja comprar</h3>
        <b-button v-b-modal.modal-prevent-closing class="btn btn-primary float-end">Adicionar item</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col.exame">Exame</th>
      <th scope="col.quantidade">Quantidade</th>
      <th scope="col.unidade">Preço Unitario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
          <!-- modal -->
  <div class="mt-3">
      <div v-if="submittedNames.length === 0"></div>
      <ul v-else class="mb-0 pl-3">
       <li v-for="name in submittedNames" :key="name">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>

        </b-form-group>
      </form>
    </b-modal>
  </div>  
</template>

<script>
export default{
  name:'Table',
  data(){
    return{
      name: '',
      nameState: 'null',
      submittedNames: [],       
    }
  },
  components: {

  },
     methods: {
       dados(col){
         console.log(col)
       },

      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  
}
</script>

<style scoped>
  h3{
    font-family: sans-serif;
    justify-content: center;
    display: flex;
  }
</style>

