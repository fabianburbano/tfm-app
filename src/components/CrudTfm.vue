<template>
  <Toast />
  <div style="margin: 0 auto; width: 80%">
    <Panel header="Crud Tfm">
      <Menubar :model="items" />
      <DataTable
        :value="users"
        paginator
        selectionMode="single"
        :rows="10"
        dataKey="username"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 50rem"
        v-model:selection="selectedUser"
      >
        <Column field="username" header="Username" style="width: 25%"></Column>
        <Column field="name" header="Name" style="width: 25%"></Column>
        <Column field="lastName" header="Last Name" style="width: 25%"></Column>
        <Column field="email" header="email" style="width: 25%"></Column>
      </DataTable>
    </Panel>
    <Dialog
      v-model:visible="displayModal"
      header="Create user"
      :style="{ width: '40vw' }"
      :modal="true"
    >
      <Toast />
      <span class="p-float-label">
        <InputText
          id="username"
          v-model="user.username"
          :class="{ 'p-invalid': errorMessage }"
          class="w100"
          aria-describedby="text-error"
        />
        <label for="username">Username</label>
        <small class="p-error" id="text-error">{{
          errorMessage || "&nbsp;"
        }}</small>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="name" v-model="user.name" class="w100" />
        <label for="name">Name</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="lastName" v-model="user.lastName" class="w100" />
        <label for="lastName">Last name</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="email" v-model="user.email" class="w100" />
        <label for="email">Email</label>
      </span>
      <br />
      <span class="p-float-label">
        <Password id="pass" v-model="user.password" toggleMask class="w100" />
        <label for="pass">Password</label>
      </span>
      <br />
      <template #footer>
        <Button label="Save" icon="pi pi-check" @click="save" autofocus />
        <Button
          label="Cancel"
          icon="pi pi-remove"
          @click="closeModal"
          class="p-button-secondary"
        />
      </template>
    </Dialog>
  </div>
</template>
<script>
import UserService from "../service/UserService";

export default {
  name: "TfmApp",
  data() {
    return {
      users: null,
      user: {
        name: null,
        lastName: null,
        username: null,
        email: null,
        password: null,
        createdAt: null,
      },
      selectedUser: {
        name: null,
        lastName: null,
        username: null,
        email: null,
        password: null,
        createdAt: null,
      },
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            this.showSaveModal();
          },
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          command: () => {
            this.showEditModal();
          },
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          command: () => {
            this.delete();
          },
        },
        {
          label: "Refresh",
          icon: "pi pi-fw pi-refresh",
          command: () => {
            this.getAll();
          },
        },
      ],
      displayModal: false,
    };
  },
  usuarioService: null,
  created() {
    this.userService = new UserService();
  },
  mounted() {
    this.getAll();
  },
  methods: {
    showSaveModal() {
      this.displayModal = true;
    },
    getAll() {
      this.userService.getAll().then((data) => {
        this.users = data.data;
        console.log(this.users);
      });
    },
    showEditModal() {
      this.user = this.selectedUser;
      this.displayModal = true;
    },
    save() {
      this.userService
        .save(this.user)
        .then((data) => {
          console.log(data);
          if (data.status === 200 || data.status === 201) {
            this.getAll();
            this.closeModal();
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.status === 400) {
            console.log("lanzar mensaje");
            this.$toast.add({
              severity: "error",
              summary: "Error",
              detail: "ha ocurrido un error al crear el registro!!",
              life: 3000,
            });
          }
        });
    },
    delete() {
      if (confirm("Are you sure about deleting the registry?")) {
        var idDelete = this.selectedUser.username;
        this.userService.delete(this.selectedUser.username).then((data) => {
          console.log(data);
          if (data.status === 200 || data.status === 201) {
            this.$toast.add({
              severity: "info",
              summary: "Info",
              detail: "has eliminado el registro " + idDelete + "!!",
              life: 3000,
            });
            this.getAll();
          }
        });
      }
    },
    closeModal() {
      this.displayModal = false;
    },
  },
};
</script>
<style></style>
