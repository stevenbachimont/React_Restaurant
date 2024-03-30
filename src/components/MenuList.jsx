import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
      <>
        {foodItems.map((item, index) => (
            <MenuItem
                key={index}
                itemName={item.itemName}
                description={item.description}
                foodImage={item.foodImage}
                price={item.price}
                isFavorite={item.isFavorite}
            />
        ))}
      </>
  );
}

export default MenuList;
