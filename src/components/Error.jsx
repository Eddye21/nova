import { PacmanLoader } from "react-spinners"

export function Error () {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 style={{color: "white", textAlign: "center", paddingTop: "15rem", paddingBottom: "2rem"}}> 404 Not Found </h1>
            <PacmanLoader/>
        </div>
    )
    
}