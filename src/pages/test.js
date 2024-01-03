const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random() < 0.5; // 50%의 확률로 성공 또는 실패를 결정

    if (isSuccess) {
      resolve("작업이 성공했습니다.");
    } else {
      reject("작업이 실패했습니다.");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // 작업이 성공했습니다.
  })
  .catch((error) => {
    console.error(error); // 작업이 실패했습니다.
  });
