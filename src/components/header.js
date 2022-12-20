

export const Header=(props)=>{
    const {info} = props
    console.log(props)
    
    return(
        <div className="head_foot_conteiner">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Symbol_from_Marvel%27s_The_Avengers_logo.svg/1754px-Symbol_from_Marvel%27s_The_Avengers_logo.svg.png" />
            <div>
                <h1>{info.Project_name}</h1>
                <h3>League of Heroes, desenvolvido por {info.my_name}</h3>
                <h1>Top-3 Heróis</h1>
            </div>
        </div>
    )

}
