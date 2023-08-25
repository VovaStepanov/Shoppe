import {DropdownFilterLayout} from "@/features/Shop/DropdownFilter/DropdownFilterLayout";
import {DropdownFilterItem} from "@/features/Shop/DropdownFilter/DropdownFilterItem";

interface DropdownFilterProps {
    placeholder: string,
    items: any[],
    onChange: () => void
}

export const DropdownFilter: React.FC<DropdownFilterProps> = (props) => {
    const {placeholder, items, onChange: clickHandler} = props;

    return (
        <DropdownFilterLayout
            content={items.map((item, idx) => (
                <DropdownFilterItem
                    key={idx}
                    onClick={clickHandler}
                    slug={item.slug}
                >
                    {item.text}
                </DropdownFilterItem>
            ))}
        />
    );
};