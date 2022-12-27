import React, { useState } from "react";

export default function Test() {
  const [quota, setQuota] = useState(1000000);
  const [output, setOutput] = useState("");

  const quotaChange = event => {
    setQuota(event.target.value);
  };

  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }

  // 소수 랜덤하게 만드는 함수 (시간오래 걸려서 블락됨)
  const generatePrimes = quota => {
    return new Promise((resolve, reject) => {
      const MAX_PRIME = 1000000;
      const random = max => Math.floor(Math.random() * max);

      const primes = [];
      while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
          primes.push(candidate);
        }
      }
      resolve(primes);
    });
  };
  //소수 만들기 핸들러
  //   const generateClickHandler = () => {
  //     generatePrimes(quota).then(data => {
  //       setOutput(`Finished generating primes`);
  //       console.log(data.length);
  //     });
  //     console.log(1);
  //   };
  const generateClickHandler = async () => {
    const data = await generatePrimes(quota);
    console.log(data.length);
    console.log(1);
  };

  return (
    <div>
      <label for="quota">Number of primes:</label>
      <input
        type="text"
        id="quota"
        name="quota"
        value={quota}
        onChange={quotaChange}
      />

      <button id="generate" onClick={generateClickHandler}>
        소수만들기
      </button>
      <button id="reload" onClick={() => document.location.reload()}>
        Reload
      </button>

      <div id="output">{output}</div>
      <br />
      <textarea id="user-input" rows="5" cols="62">
        Generate primes 버튼누르고 타입핑 해보기
      </textarea>
    </div>
  );
}
