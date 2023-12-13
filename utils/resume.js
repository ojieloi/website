import { firestore } from "./firebase";

const getResume = async () => {
  const snapshot = await firestore.collection("workExperiences").get();
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export { getResume };
