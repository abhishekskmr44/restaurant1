import React from 'react';
import style from './Restaurant.module.css';
import { Button } from './Button';


function RestaurantCard({rating,voteCount,cost,reviewCount,name,payment,imageUrl,addToFav}){
    const payload = {
        "cost":cost,
        "voteCount":voteCount,
        "reviewCount":reviewCount,
        "paymentMethods":payment,
        "rating":rating,
        "name":name,
        "imageUrl":imageUrl
    }
    return(
        <div className={style.mainCard}>
            <div className={style.mainCardUpper}>
                <div className={style.mainCardUpperLeft}>
                    <img src={imageUrl} alt={name} />
                </div>
                <div className={style.mainCardUpperMiddle}>
                    <p>{name}</p>
                    <p>cost ₹{cost} for one</p>
                    <p>Min ₹50  •  Up to 30 min</p>
                    <p>Accepts {payment.card==="true"?"Online":"Cash"} payment only</p> 
                </div>
                <div className={style.mainCardUpperRight}>
                    <div>{rating}</div>
                    <div>{voteCount} Votes</div>
                    <div>{reviewCount} reviews</div>
                </div>
            </div>
            <div className={style.mainCardLower}>
                <div>Order Online</div>
                <Button 
                title="ADD TO FAV"
                color="red"
                handleClick={() => addToFav(payload)}
                />
            </div>
        </div>
    )
}

export {RestaurantCard}