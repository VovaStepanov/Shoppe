import {DropdownFilter} from "@/features/Shop/DropdownFilter";
import {RangeFilter} from "@/features/Shop/RangeFilter";

export const Filters = () => {
    return (
        <div>
            <DropdownFilter items={[]}/>
            <DropdownFilter items={[]}/>
            <RangeFilter/>
        </div>
    );
};