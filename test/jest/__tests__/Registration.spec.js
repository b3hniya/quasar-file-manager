import { mount, createLocalVue } from "@vue/test-utils";
import Registration from "components/Entry/RegisterComp";
import * as All from "quasar";
import Vuex from "vuex";

const { Quasar } = All;

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

describe("Mount Registration page", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(Quasar, { components }); // , lang: langEn

  const wrapper = mount(Registration, {
    localVue,
  });
  const vm = wrapper.vm;

  let emailField = wrapper.find("[data-test='email-field']");
  let passField = wrapper.find("[data-test='password-field']");
  let submitBtn = wrapper.find("[data-test='submit-btn']");

  async function fillEmailField(val) {
    emailField.setValue(val);
  }

  async function fillPasswordField(val) {
    passField.setValue(val);
  }

  describe("emailField Related Tests", () => {
    it("has email field.", () => {
      expect(emailField.element.value).toBe("");
    });

    it("email value will update after input.", async () => {
      await fillEmailField("test@test.com");
      expect(vm.email).toBe("test@test.com");
    });
  });

  describe("password related tests.", () => {
    it("has password field", () => {
      expect(passField.element.value).toBe("");
    });

    it("password value will update after input.", async () => {
      await fillPasswordField("testPassword");
      expect(vm.password).toBe("testPassword");
    });
  });

  describe("submit button related tests", () => {
    it("has a button", () => {
      expect(submitBtn.element.innerHTML).toContain("Register/Login");
    });

    it("after trigerring the button the submit btn password field will get empty", async () => {
      await fillEmailField("test@test1.com");
      await fillPasswordField("testPass1");
      await submitBtn.trigger("click");
      await timeout(300);
      expect(vm.password).toBe("");
    });

    it("after triggering the button email field should be empty", async () => {
      await fillPasswordField("testPass1");
      await fillEmailField("test@test1.com");
      await submitBtn.trigger("click");
      await timeout(300);
      expect(vm.email).toBe("");
    });

    // it("call the api and brings you the answere.", async () => {
    //   await fillPasswordField("testPass1");
    //   await fillEmailField("test@test1.com");
    //   await timeout(300);
    // })
  });
});
