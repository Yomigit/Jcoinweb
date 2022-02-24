

type MProps = {
    title : string;
}


const Header = ({title}: MProps): JSX.Element => {

    return ( 
        <div>{title}</div>
    )
}

export default Header;