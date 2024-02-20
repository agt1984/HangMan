//defin la letas que se usaran
const KEYS = [
    "a",
    "b",
    "c", 
    "d", 
    "e", 
    "f", 
    "g", 
    "h", 
    "i", 
    "j", 
    "k", 
    "l", 
    "m", 
    "n", 
    "o", 
    "p", 
    "q", 
    "r", 
    "s", 
    "t", 
    "u", 
    "v", 
    "w", 
    "x", 
    "y", 
    "z"
]
export function Keyboard() {
    return (
        <div 
            style={{ //le doy estilo al div que contiene el teclado
                display: 'grid',
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
                gap: ".5rem",
            }}
        >
            {KEYS.map(key => { //aqui rendereo el mapeonde todas la letrs definidas en key
                return <button key={key}>{key}</button>
            })}
        </div>)
}