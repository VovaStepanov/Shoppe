import {Card} from "../Card";

interface CardProps {
    id: number,
    name: string,
    price: number,
    image: string
}

interface CardListProps {
    cardList: CardProps[]
}

export const CardList: React.FC<CardListProps> = (props) => {
    const {cardList} = props;

    return (
        <div className={"grid card-list-grid-columns justify-between"}>
            {cardList.map(card => (
                <Card key={card.id} name={card.name} price={card.price} image={card.image}/>
            ))}
        </div>
    );
};