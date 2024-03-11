import axios from "axios";
import { ref, set } from "firebase/database";
import { database } from "./firebase.config";

export function writeUserData(
  userId: string,
  nom: string,
  prenom: string,
  email: string,
  telephone: string,
  civilite: string
) {
  const dateEtHeure = new Date().toISOString();
  return new Promise((resolve, reject) => {
    set(ref(database, "contactsCambuim/" + userId), {
      nom,
      prenom,
      email,
      telephone,
      civilite,
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

export function writeCRMUserData(
  nom: string,
  prenom: string,
  email: string,
  telephone: string,
  civilite: string
) {
  const dateEtHeure = new Date().toISOString();

  // Structure des données pour l'API
  const contactData = {
    nom: nom,
    prenom: prenom,
    email: email,
    telephone_mobile: telephone,
    civilite: civilite,
    code_postal: "17000",

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
