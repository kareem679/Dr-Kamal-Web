"use server" 
import CardPart from "./Parts/CardPart";

const CardsCom = async ({ CardsList }) => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  justify-items-center xl:px-32 mx-auto  gap-8 sm:gap-10 ">
        {CardsList.map((Item,Index)=>(
            <CardPart key={Index} ItemName = {Item.Name} ItemImage={Item.Image} ItemInfo ={Item.Info}/>
        ))}

    </div>
  );
};

export default CardsCom;
