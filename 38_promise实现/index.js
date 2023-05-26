const STATUS_PADDING = "pending";
const STATUS_FULFILLED = "fulfilled";
const STATUS_REJECTED = "rejected";
function execFunctionWithCathchError(execFn, value, resolve, reject) {
  try {
    if (!execFn) return;
    let resault = execFn(value);
    resolve(resault);
  } catch (err) {
    console.log("===");

    reject(err);
  }
}
class TPromise {
  constructor(executor) {
    this.onFulfilledFns = [];
    this.onRejectedFns = [];
    this.value = undefined;
    this.reason = undefined;
    this.status = STATUS_PADDING;
    const resolve = (value) => {
      queueMicrotask(() => {
        if (this.status !== STATUS_PADDING) return;
        this.status = STATUS_FULFILLED;
        this.value = value;
        this.onFulfilledFns &&
          this.onFulfilledFns.forEach((item) => item(value));
      });
    };
    const reject = (reason) => {
      queueMicrotask(() => {
        if (this.status !== STATUS_PADDING) return;
        this.status = STATUS_REJECTED;
        this.reason = reason;
        this.onRejectedFns &&
          this.onRejectedFns.forEach((item) => item(reason));
      });
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    onRejected =
      onRejected ||
      ((err) => {
        throw new Error(err);
      });
    return new TPromise((resolve, reject) => {
      if (this.status === STATUS_PADDING) {
        this.onFulfilledFns.push(() => {
          execFunctionWithCathchError(onFulfilled, this.value, resolve, reject);
        });

        this.onRejectedFns.push(() => {
          execFunctionWithCathchError(onRejected, this.reason, resolve, reject);
        });
      }
      if (this.status === STATUS_FULFILLED) {
        execFunctionWithCathchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === STATUS_REJECTED) {
        execFunctionWithCathchError(onRejected, this.reason, resolve, reject);
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }
}
let promise = new TPromise((resolve, reject) => {
  reject(456);
  resolve(123);
});
// promise
//   .then((res) => {
//     console.log("===");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
promise
  .then((res) => {
    // console.log(res, "RES");
  })
  .then(
    (res1) => {},
    (err) => {
      console.log(err);
    }
  );

// setTimeout(() => {
//   promise
//     .then(
//       (res) => {
//         console.log(res);
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//     .then((res) => {
//       console.log(res, "===");
//     });
// }, 1000);
// new Promise().catch();
