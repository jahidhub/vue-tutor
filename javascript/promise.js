// A student enroll a course and then progress it and get certificate

const paymentStatus = false;
const marks = 80;

function enroll() {
  console.log("Course enrollment is processing...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentStatus) {
        console.log("Course Payment Successfully Paid...");
        resolve();
      } else {
        reject("Your payment is panding !!!");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log("Your Course is progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (marks >= 70) {
        resolve();
      } else {
        reject("Your marks is less than 70 , you are failed !");
      }
    }, 2000);
  });

  return promise;
}

function getCertificate() {
  console.log("Certificate is preparing...");

  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve("Congrats!! you got the certificate.");
    }, 2000);
  });

  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
