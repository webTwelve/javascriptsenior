//实例方法
//then catch finally
new Promise((resolve, reject) => {
  return "1111"; //返回为promise
})
  .then((res) => {
    //这里接到的是 return '1111' 的结果
  })
  .catch((err) => {
    //捕获异常
  })
  .finally(() => {
    //成功失败都会执行
  });

//类方法
Promise.resolve(1111);
Promise.reject(222);
Promise.all([new Promise(), new Promise()]).then((res) => {}); //全部resolve后then响应 有一个失败catch
Promise.allSettled([new Promise(), new Promise()]); //全部执行完成响应 有一个失败也会then 所有都失败则会catch
Promise.race([new Promise(), new Promise()]); //有一个先resolve后then响应 有一个失败catch
Promise.any([new Promise(), new Promise()]); //有一个先resolve后then响应 所有都失败则会catch
