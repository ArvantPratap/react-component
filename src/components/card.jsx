function Card(){
    const user = 'Arvant Pratap'
    const age = 19
    return (
    <div>
      <div className='card'> 
        <h1>{user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus? & I am {age} year old</p>
      </div>
    </div>
    )
}

export default Card;