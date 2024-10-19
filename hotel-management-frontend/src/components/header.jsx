import User from "./userdata.jsx";

function Header()
{

    return(
        <>
        <header>
        <h1>Hotel Management</h1>
        <User imgLink="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" name="Amal"/>
        <User imgLink="https://images.pexels.com/photos/15200412/pexels-photo-15200412/free-photo-of-a-bearded-man-in-blue-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Kamal"/>
        <User imgLink="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" name="Nimali"/>
        <User imgLink="https://images.pexels.com/photos/1624548/pexels-photo-1624548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Yomal"/>
        </header>
        </>
    )
}

export default Header;