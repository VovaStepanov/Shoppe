import {DropdownFilter} from "@/features/Shop/DropdownFilter";
import {RangeFilter} from "@/features/Shop/RangeFilter";

export const Filters = () => {
    return (
        <div>
            <DropdownFilter items={[]} onChange={() => {}}/>
            <DropdownFilter items={[]} onChange={() => {}}/>
            <RangeFilter/>
        </div>
    );
};