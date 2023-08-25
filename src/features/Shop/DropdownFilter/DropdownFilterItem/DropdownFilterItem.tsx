interface DropdownFilterItemProps {
    chidren: string | React.ReactNode,
    onClick: () => void,
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