<template>
  <div class="container">
    <b-button
      v-b-modal.modal-prevent-closing
      class="float-end"
      id="buttonAdd"
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
            <select class="form-select" id="name-input" v-bind:key="exam" :state="clearState" v-model="exam" required>
              <option value="Hemograma">Hemograma</option>
              <option value="Hemoglobina">Hemoglobina</option>
              <option value="Teste de gravidez(hcg)">Teste de gravidez(hcg)</option>
              <option value="Teste de covid-19">Teste de covid-19</option>
            </select>
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
              type="number" min=0 
              :state="clearState"
              required
            ></b-form-input>
          </b-form-group>
          <!-- data -->
          <b-form-group
            label="Data de entrega"
            label-for="data-input"
            :state="clearState"
          >
            <b-form-input
              id="data-input"
              v-bind:key="data"
              v-model="data"
              :state="clearState"
              type="date" 
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
      items: [{ Exame: "#", Quantidade_de_Exame: "#", Data_desejada: "#" }],
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
      this.data = "";
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
        Exame: this.exam,
        Quantidade_de_Exame: this.quantidade,
        Data_desejada: this.data,
      });
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style scoped>
#buttonAdd{
  background-color: rgb(255, 255, 255);
  color:aqua;
  font-weight: bold;
  border: azure;
  border-radius: 25px;

}
</style>