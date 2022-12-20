
export const Content=(props)=>{

    const {info}=props
    
    return(
        <div>
            <div id="contentor_herois">
                <div className="heroi"> 
                    <img src={info[0].hero_img} alt={info[0].hero_name}/>
                    <h1>{info[0].hero_name}</h1>
                </div>
                <div className="heroi"> 
                    <img src={info[1].hero_img} alt={info[1].hero_name}/>
                    <h1>{info[1].hero_name}</h1>
                </div>
                <div className="heroi"> 
                    <img src={info[2].hero_img} alt={info[2].hero_name}/>
                    <h1>{info[2].hero_name}</h1>
                </div>
            </div>
        </div>
    )


}

export const Loading=()=>{
    return(
        <div className="Loading">
            <img src="https://cdn.dribbble.com/users/214929/screenshots/4967879/media/2882629854d56075fd86d61ddee25975.gif" />
        </div>
    )
}