import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";
import MenuItemPriceProps from "@/components/layout/MenuItemPriceProps"


export default function MenuItemForm({ onSubmit, menuItem, Save }) {
    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [category, setCategory] = useState(menuItem?.category || '');
    const [categories, setCategories] = useState([]);
    const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);

    useEffect(() => {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            });
        });
    }, []);

    return (
        <form className="mt-8 max-w-lg"
            onSubmit= {ev =>
            onSubmit(ev, {
              image,name,description,basePrice,category,sizes,extraIngredientPrices
            })}
        >
            <div
                className="grid items-start gap-2"
                style={{ gridTemplateColumns: '.3fr .7fr' }}>
                <div>
                    <EditableImage link={image} setLink={setImage} />
                </div>
                <div className="grow">
                    <label className="text-sm">
                        Menu item name
                    </label>
                    <input className="placeholder-transparent h-10 w-full bg-gray-200 rounded-lg border-gray-300 text-gray-900 p-1" type="text"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                    />

                    <label className="text-sm">
                        Description
                    </label>
                    <input className="placeholder-transparent h-10 w-full bg-gray-200 rounded-lg border-gray-300 text-gray-900 p-1" type="text"
                        value={description}
                        onChange={ev => setDescription(ev.target.value)}
                    />

                    <label>Category</label>
                    <select className="placeholder-transparent h-10 w-full bg-gray-200 rounded-lg border-gray-300 text-gray-900 p-1" value={category} onChange={ev => setCategory(ev.target.value)}>
                        {categories?.length > 0 && categories.map(c => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                    </select>

                    <label className="text-sm">
                        Base Price
                    </label>
                    <input className="placeholder-transparent h-10 w-full bg-gray-200 rounded-lg border-gray-300 text-gray-900 p-1" type="text"
                        value={basePrice}
                        onChange={ev => setBasePrice(ev.target.value)}
                    /><br />

                    <MenuItemPriceProps name={'Sizes'}
                              addLabel={'Add item size'}
                              props={sizes}
                              setProps={setSizes} />


                    <MenuItemPriceProps name={'Extra ingredients'}
                              addLabel={'Add ingredients prices'}
                              props={extraIngredientPrices}
                              setProps={setExtraIngredientPrices}/>

                    <button className="bg-primary text-white w-full mt-4 hover:bg-red-300 rounded-lg px-4 py-2">{Save}</button>
                </div>
            </div>
        </form>
    )
}