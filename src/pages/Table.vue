<template>
  <div class="container">
    <b-button v-b-modal.modal-prevent-closing class="float-end" style="margin-top: 10px">Adicionar Exame</b-button>
    <div>
       <b-table striped hover :items="items">

      Produto

    </b-table>
    
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
          label-for="name-input"
          :state="clearState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="clearState"
            required
          ></b-form-input>
        </b-form-group>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clearState: null,
        items: [
          { name: 'aa ', quantidade: '',  preco: '' },
        ]       
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.clearState = valid
        return valid
      },
      resetModal() {
        this.name = {
          
        }
        this.clearState = null
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      handleSubmit() {
        if (!this.checkFormValidity()) {
          return
        }
        this.items.push({name: this.name, quantidade: '000', preco:'453'})
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>