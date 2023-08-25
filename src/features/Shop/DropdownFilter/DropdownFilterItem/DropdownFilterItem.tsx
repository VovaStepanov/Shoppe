interface DropdownFilterItemProps {
    children: string | React.ReactNode,
    onClick: (slug: string) => void,
    slug: string
}

export const DropdownFilterItem: React.FC<DropdownFilterItemProps> = (props) => {
    const {children, onClick, slug} = props;

    return (
        <div onClick={() => onClick(slug)}>
            {children}
        </div>
    );
}