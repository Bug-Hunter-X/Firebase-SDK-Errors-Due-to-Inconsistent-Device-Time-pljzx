To solve this issue, avoid relying solely on the client's device time for critical operations. Instead, leverage server-side timestamps provided by Firebase. Here’s an example illustrating how to use server timestamps when adding data to Firestore:

```javascript
// Get a reference to the Firestore collection
const db = firebase.firestore();
const usersRef = db.collection('users');

// Add a new document with a server timestamp
usersRef.add({
  // ... other data ...
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
}).then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
}).catch((error) => {
  console.error("Error adding document: ", error);
});
```

By using `firebase.firestore.FieldValue.serverTimestamp()`, you ensure that Firebase's server provides the accurate timestamp, eliminating the possibility of time-related errors.  This approach applies to other Firebase services as well.  You should always favor server timestamps for security-sensitive operations and data that needs consistent ordering.