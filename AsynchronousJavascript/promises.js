function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "John Doe" });
      } else {
        reject(new Error("User not found."));
      }
    }, 1000);
  });
}

async function getUserData(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log("User data:", userData);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

getUserData(1); // Output: User data: { id: 1, name: 'John Doe' }
getUserData(2); // Output: An error occurred: User not found.

const fetchData = fetch("https://api.example.com/data");

fetchData
  .then((response) => {
    console.log("Data fetched successfully:", response);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
