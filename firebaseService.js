import { collection, addDoc,serverTimestamp } from 'firebase/firestore';
import {firestore} from './firebase'

const uploadFormData = async (formData) => {
  try {
    const jobsCollectionRef = collection(firestore, 'jobs');
    
    // Add form data to the 'jobs' collection in Firestore
    formData = {
      ...formData,
      postedOn : serverTimestamp(),
    };
    const docRef = await addDoc(jobsCollectionRef, formData);
    console.log('Form data uploaded successfully with ID:', docRef.id);
    return docRef.id; // Return the ID of the newly added document
  } catch (error) {
    console.error('Error uploading form data:', error.message);
    throw error;
  }
};
export {uploadFormData};