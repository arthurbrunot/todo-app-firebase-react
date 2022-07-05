# Another TODO App

C'est une application boostrappé avec create-react-app.

L'application permet d'ajouter, via un compte, des tâches quotidiennes.
Une page permet d'ajouter les tâches ( et de les marquer comme terminées ), une autre permet de les restaurer ou bien de les supprimer définitivement.

Une démo de l'application est hébergée [ici](https://todo.arthurbrunot.fr)

Pour utiliser l'application il faut obligatoirement créer un compte.

## Lancer le projet

Pour lancer le projet 

### `npm install`
### `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Technologies utilisées

 - Firebase Auth pour l'auth via email/password ou par google 
 - FireStore pour le stockage des tâches reliées à l'utilisateur
 - ReactHookForm pour la gestion des formulaires
 - StyledComponents pour le CSS
 - Framer Motion pour l'animation
 - Mui pour le theming
 - Typescript
