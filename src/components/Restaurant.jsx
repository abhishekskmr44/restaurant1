import React,{useState} from 'react';
import data from '../assets/db.json'
import style from './Restaurant.module.css';
import { Button } from './Button';
import { RestaurantCard } from './RestaurantCard';


function Restaurant() {

    const [state,setState] = useState([...data])
    const [fav,setFav] = useState([])

    function starBtnClick(e){
        
        switch (e.target.name) {
            case "1 Star":
                setState([...data.filter(ele => ele.rating>=1)])
                break;
            case "2 Star":
                setState([...data.filter(ele => ele.rating>=2)])
                break;
            case "3 Star":
                setState([...data.filter(ele => ele.rating>=3)])
                break;
            case "4 Star":
                setState([...data.filter(ele => ele.rating>=4)])
                break;
            case "Cash Only":
                setState([...data.filter(ele => ele.paymentMethods.card==="false")])
                break;
            case "Card Only":
                setState([...data.filter(ele => ele.paymentMethods.cash==="false")])
                break;
            case "Show all":
                setState([...data])
                break;
            case "Show Fav":
                setState([...fav])
                break;
            case "Sort H to L":
                setState([...state.sort((a,b) => b.cost-a.cost)])
                break;
            case "Sort L to H":
                setState([...state.sort((a,b) => a.cost-b.cost)])
                break;
        
            default:
                break;
        }
    }

    function addToFav(object){
        setFav([...fav,object])
        alert("Added to favourite")
    }
    return (
        <div style={{"marginTop":"10px"}}>
            <div className={style.mainHeader}>
                <Button 
                title="1 Star" 
                color="crimson"
                handleClick={starBtnClick}
                />
                <Button 
                title="2 Star" 
                color="red" 
                handleClick={starBtnClick}
                />
                <Button 
                title="3 Star" 
                color="orange" 
                handleClick={starBtnClick}
                />
                <Button 
                title="4 Star" 
                color="green" 
                handleClick={starBtnClick}
                />
                <Button 
                title="Cash Only" 
                color="blue" 
                handleClick={starBtnClick}
                />
                <Button 
                title="Card Only" 
                color="black" 
                handleClick={starBtnClick}
                />
                <Button 
                title="Show all" 
                color="grey" 
                handleClick={starBtnClick}
                />
                <Button 
                title="Show Fav" 
                color="skyblue" 
                handleClick={starBtnClick}
                />
                <Button 
                title="Sort H to L" 
                color="darkblue" 
                handleClick={starBtnClick}
                />
                <Button 
                title="Sort L to H" 
                color="rgb(6, 91, 250)" 
                handleClick={starBtnClick}
                />
            </div>
            <div className={style.cardContainer}>

            {state.map(function (ele){
                return(
                    <RestaurantCard
                    key={ele.name}
                    rating={ele.rating}
                    voteCount={ele.voteCount}
                    reviewCount = {ele.reviewCount}
                    cost={ele.cost}
                    name={ele.name}
                    payment={ele.paymentMethods}
                    imageUrl={ele.imageUrl}
                    addToFav = {addToFav}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export {Restaurant}