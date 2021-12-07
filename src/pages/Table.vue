<template>
  <div class="container">
    <b-button
      v-b-modal.modal-prevent-closing
      class="float-end"
      style="margin-top: 10px"
      >Adicionar Exame</b-button
    >
    <div>
      <b-table striped hover :items="items"> Produto </b-table>
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
          <!-- Exame -->
          <b-form-group
            label="Exame"
            label-for="name-input"
            :state="clearState"
          >
            <b-form-input
              id="name-input"
              v-bind:key="exam"
              v-model="exam"
              :state="clearState"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Quantidade -->
          <b-form-group
            label="Quantidade"
            label-for="quantidade-input"
            :state="clearState"
          >
            <b-form-input
              id="quantidade-input"
              v-bind:key="quantidade"
              v-model="quantidade"
              :state="clearState"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Preço -->
          <b-form-group
            label="Preço"
            label-for="preco-input"
            :state="clearState"
          >
            <b-form-input
              id="preco-input"
              v-bind:key="preco"
              v-model="preco"
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
      items: [{ exam: "aa", quantidade: "bb", preco: "cc" }],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.clearState = valid;
      return valid;
    },
    resetModal() {
      this.exam = "";
      this.quantidade = "";
      this.preco = "";
      this.clearState = null;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.items.push({
        exam: this.exam,
        quantidade: this.quantidade,
        preco: this.preco,
      });
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>