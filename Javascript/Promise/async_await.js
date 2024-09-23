function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "John", age: 30 });
        }, 2000);  // Simulate an API call delay
    });
}
async function fetchUserData() {
    try {
        let user = await fetchUser();       // Wait for fetchUser to resolve
        console.log(user);                  // { name: 'John', age: 30 }
        
        let age = user.age;
        console.log(`User's age is ${age}`); // User's age is 30
    } catch (error) {
        console.log(error);                 // Handle any potential errors
    }
}

fetchUserData();