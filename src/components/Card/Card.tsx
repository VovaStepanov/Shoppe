import Image from "next/image";

export interface CardProps {
    id: number,
    name: string,
    price: number,
    image: string,
}

export const Card: React.FC<CardProps> = (props) => {
    const {id, name, price, image} = props;

    return (
        <div className={"max-w-[400px]"}>
            <Image
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                alt={"Product img"}
                className={"w-full h-auto aspect-square rounded"}/>
            <p className={"card-text card-text-margin"}>{name}</p>
            <p className={"card-text text-accent"}>$ {price}</p>
        </div>
    );
};