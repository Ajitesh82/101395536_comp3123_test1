function resolvedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const success = { message: 'resolved promise success!' };
        resolve(success);
      }, 500);
    });
  }
  
  function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('rejected promise error!'));
      }, 500);
    });
  }
  
  async function main() {
    try {
      const resolvedResult = await resolvedPromise();
      console.log('Resolved:', resolvedResult.message);
    } catch (error) {
      console.error('Error:', error.message);
    }
  
    try {
      const rejectedResult = await rejectedPromise();
      console.log('Resolved:', rejectedResult.message);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  main();
  