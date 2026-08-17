export default function PostCard(props) {
    return <div style={{
        width: "90%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        WebkitBoxShadow: "0px 0px 15px 5px #B8B8B8",
        boxShadow: "0px 0px 15px 5px #B8B8B8",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }}>
        <div style={{
            width: "56px",
            height: "56px",
            borderRadius: "100px"
        }}>
            <img style={{
                borderRadius: "100px"
            }} src={props.authorPicture} alt="" />
        </div>
            
        <div>

        </div>

    </div>
}