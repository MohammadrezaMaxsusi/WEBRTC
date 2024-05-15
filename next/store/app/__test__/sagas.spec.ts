import { expectSaga } from "redux-saga-test-plan";
import { initSaga } from "../../rootSaga";

describe("root sagas", () => {
  it("Initial Saga", () => {
    return expectSaga(initSaga)
      .returns({ hello: "xxx" })
      .run();
  });
});
