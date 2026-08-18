export default function PersonalData(props) {
    return (
        <div style={{
            width: "100%",
            padding: "8px 48px"
        }}>

            <div style={{marginBottom: "30px"}}>
                <input type="text" placeholder="Nome"
                style={{
                    width: "100%",
                    height: "168px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "48px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "36px",
                }}>O erro ocoerre aqui</p>
            </div>

            <div style={{marginBottom: "30px"}}>
                <input type="text" placeholder="Sobrenome"
                style={{
                    width: "100%",
                    height: "168px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "48px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "36px",
                }}>O erro ocoerre aqui</p>
            </div>

            <div style={{marginBottom: "30px"}}>
                <input type="email" placeholder="Email"
                style={{
                    width: "100%",
                    height: "168px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "48px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "36px",
                }}>O erro ocoerre aqui</p>
            </div>

            <div style={{marginBottom: "30px"}}>
                <input type="text" placeholder="Celular"
                style={{
                    width: "100%",
                    height: "168px",
                    border: "3px solid",
                    borderRadius: "10px",
                    padding: "0 48px",
                    fontSize: "48px",
                    outline: "none",
                }} />
                <p
                style={{
                    margin: "16px 0 0 40px",
                    fontSize: "36px",
                }}>O erro ocoerre aqui</p>
            </div>

            
                <button style={{
                    width:"100%",
                    height: "100px",
                    backgroundColor: "white",
                    border: "3px solid",
                    borderRadius: "9px",
                    fontSize: "40px"

                }}>Botao</button>

        </div>
    )
}