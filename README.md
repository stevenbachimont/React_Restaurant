# Quête : Exercise React : Props and State

### Rappel des étapes du challenge :

1. Dans le composant App, passez la variable foodItems (contenant un tableau d'objets) au composant MenuList, en tant que props;

2. Dans le composant MenuList, rendez le composant MenuItem autant de fois qu'il y a d'objets dans le tableau, en utilisant une boucle. Il faudra donner à MenuItem toutes les propriétés (props) des objets.

3. Dans le composant MenuItem, créez une variable d'état (un state) dont le nom sera isFavorite, et qui sera initialisé à false (ou à props.isFavorite, ça reviendra au même).

4. Dans le composant MenuItem, accédez à chaque props afin d'afficher les éléments demandés en commentaires (soit les lignes commentées dans le return).

5. Créez une fonction handleClickFavorite, qui permutera l'état du state isFavorite de faux à vrai, et vice-versa.

6. Dans le bouton favoris, appelez la fonction handleClickFavorite quand un click se produit. 

7. Dans le même bouton, changez de façon conditionnelle le contenu ("🖤" si le state est false, "❤️" si le state est true).