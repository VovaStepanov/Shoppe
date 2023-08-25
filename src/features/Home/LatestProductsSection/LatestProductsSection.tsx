import Link from "next/link";
import {CardList} from "@/components/CardList";

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

export const LatestProductsSection = () => {


    return (
        <div className={"pt-10"}>
            <div className={"flex justify-between items-center"}>
                <p className={"heading-1"}>
                    Shop The Latest
                </p>
                <Link href={"/shop"} className={"heading-4 text-accent"}>
                    View All
                </Link>
            </div>
            <div className={"mt-10"}>
                <CardList cardList={cards}/>
            </div>
        </div>
    );
}