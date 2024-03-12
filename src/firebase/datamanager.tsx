import axios from "axios";
import { ref, set } from "firebase/database";
import { database } from "./firebase.config";

export function writeUserData(email: string, userId: string) {
  const dateEtHeure = new Date().toISOString();
  return new Promise((resolve, reject) => {
    set(ref(database, "contactsMultitProgramme/" + userId), {
      email,
      dateEtHeure,
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function writeCRMUserData(email: string) {
  const dateEtHeure = new Date().toISOString();

  // Structure des données pour l'API
  const contactData = {
    email: email,

    demande: {
      date: dateEtHeure,
      id_programme: 28,
      id_provenance: 22,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post("https://api.leizee.com/contacts", contactData, {
        auth: {
          username: "signaturepromotion-castera",
          password: "o53ifo07ox56511qv1m2473jijcg8d",
        },
      })
      .then((success) => {
        console.log(success);
        resolve("success");
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
