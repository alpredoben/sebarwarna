import './cell.css'

export const Cell = ({ color, size }) => {
    let class_name = "cell-" + size + " " + color;
    return (
        <div className={class_name}></div>
    )
}