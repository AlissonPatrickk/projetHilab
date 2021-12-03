<template>
  <div class="container">
    <b-button v-b-modal.modal-prevent-closing class="float-end" style="margin-top: 10px">Adicionar Exame</b-button>
    <div>
    <div class="mt-3">
      Produto
      <div v-if="produtos.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
      <b-table striped hover :items="items"></b-table>
        
        <li v-for="exame in produtos" :key="exame">{{ exame }}</li>
         
      </ul>
    </div>
</div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Escolha os seus exames"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div>  
        <b-form-group
          label="Exame"
          label-for="exame-input"
          :state="exameState"
        >
          <b-form-input
            id="exame-input"
            v-model="exame"
            :state="exameState"
            required
          ></b-form-input>
        </b-form-group>
        </div>

         <!-- <div>  
        <b-form-group
          label="Quantidade"
          label-for="exame-input"
          :state="exameState"
        >
          <b-form-input
            id="exame-input"
            v-model="exame"
            :state="exameState"
            required
          ></b-form-input>
        </b-form-group>
        </div>

         <div>  
        <b-form-group
          label="Valor"
          label-for="exame-input"
          :state="exameState"
        >
          <b-form-input
            id="exame-input"
            v-model="exame"
            :state="exameState"
            required
          ></b-form-input>
        </b-form-group>
        </div> -->
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        exame: '',
        exameState: null,
        produtos: [],
        
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.exameState = valid
        return valid
      },
      resetModal() {
        this.exame = ''
        this.exameState = null
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
        // Push the exame to submitted exames
        this.produtos.push(this.exame)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>