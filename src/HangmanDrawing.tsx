const HEAD = (
    <div
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px",
        }}
    />
)

const BODY = (
    <div
        style={{
            width: "10px",
            height: "100px",
            background: "black",
            position: "absolute",
            top: "120px",
            right: "0",
        }}
    />
)

const RIGTH_ARM = (
    <div
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "150px",
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
    />
)

const LEFT_ARM = (
    <div
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "100px",
            right: "-4px",
            rotate: "30deg",
            transformOrigin: "rigth bottom",
        }}
    />
)

const RIGTH_LEG = (
    <div
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "210px",
            right: "-90px",
            rotate: "60deg",
            transformOrigin: "left bottom",
        }}
    />
)

const LEFT_LEG = (
    <div
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "295px",
            right: "-50px",
            rotate: "-60deg",
            transformOrigin: "rigth bottom",
        }}
    />
)


//con esta funcion construimos el dibujo de la horca
export function HangmanDrawing() {
    return <div style={{position: "relative"}}> 
        {HEAD}
        {BODY}
        {RIGTH_ARM}
        {LEFT_ARM}
        {RIGTH_LEG}
        {LEFT_LEG}
        <div
            style={{
                height: "50px",
                width: "10px",
                background: "black",
                marginLeft: "120px", 
                position: "absolute",
                top: 0,
                right: 0,
            }}   
        />
        <div
            style={{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft: "120px", 
            }}   
        />
        <div
            style={{
                height: "400px",
                width: "10px",
                background: "black",
                marginLeft: "120px", 
            }}   
        />
        <div style={{height: "10px", width: "250px", background: "black"}}/>
    </div>
}