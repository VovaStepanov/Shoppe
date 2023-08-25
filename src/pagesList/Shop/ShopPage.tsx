import {CardList} from "@/components/CardList";
import {Filters} from "@/features/Shop/Filters";
import {Pagination} from "@/components/Pagination";

const cards = [
    {
        id: 1,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 2,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 3,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 4,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 5,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 6,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 7,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 8,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 9,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 10,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 11,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 12,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 13,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 14,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 15,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        id: 16,
        name: "Product",
        price: 89.99,
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
]

export const ShopPage = () => {
    return (
        <div>
            <div>
                <Filters/>
                <CardList cardList={cards}/>
            </div>
            <Pagination/>
        </div>
    );
};