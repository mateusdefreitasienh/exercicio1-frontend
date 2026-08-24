export default function TitleDescription(props: {
    title: string;
    description: string;
}) {
    return(
        <div 
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "12p",
            width: "100%",
        }}
        >
            <h1
            style={{
                fontSize: "42px",
                fontWeight: "400px",
                margin: "0",
            }}
            >
                {props.title} 
            </h1>

            <p 
            stule={{
                fontSize: "18px",
                color: "gray",
                margin: "0"
            }}
            >
                {props.description}
            </p>
        </div>
    );
}