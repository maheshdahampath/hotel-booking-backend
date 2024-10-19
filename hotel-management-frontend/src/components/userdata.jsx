

function User(props)
{

    return(
        <>
       <div>
        <img src={props.imgLink} />
        <h2>{props.name}</h2>
       </div>
        </>
    )
}

export default User;