export default function Product({image, title, price}) {
    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{price} €</p>
            <button>Add to cart</button>
        </div>
    )
}