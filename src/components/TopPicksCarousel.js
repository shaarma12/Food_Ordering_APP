import React, { useState } from 'react'
import { CAROUSEL_IMG } from '../utils/constant'
import PriceBanner from './PriceBanner'
import { addItems, removeItems, resClose } from '../utils/cartSlice'
import ChangeRestruantBanner from './ChangeRestruantBanner'
import { useDispatch, useSelector } from 'react-redux'

const TopPicksCarousel = ({ inform, cuis }) => {
    const { creativeId } = inform
    const { price, imageId, name, description, id, defaultPrice } = inform?.dish?.info;
    console.log("shiv", inform);
    console.log("omkar", cuis);
    const restro = {
        card: {
            info: {
                id: id,
                price: price,
                defaultPrice: defaultPrice,
                imageId: imageId,
                name: name,
                description: description,
            }
        }
    }
    console.log("restrocvbn", restro);
    const [banner, setBanner] = useState();
    const [changeRestruant, setchangeRestruant] = useState();
    const dispatch = useDispatch();
    const restruantName = useSelector((store) => store.cart.restruantName);
    const restruantBannerClose = useSelector(
        (store) => store.cart.restruantBannerClose
    );
    const count = useSelector(
        (store) =>
            store.cart.items.find((item) => item?.card?.info?.id === restro?.card?.info?.id)
                ?.count || 0
    );
    return (
        <div>
            <img src={CAROUSEL_IMG + creativeId} className='h-[28rem] w-[26rem] mx-[30rem] -ml-0' />
            <div className='flex justify-between text-white relative bottom-12 left-4 opacity-100'>
                <div className='flex font-semibold'>
                    <p className='mr-[0.07rem]'>₹</p>
                    <p>{defaultPrice ? defaultPrice / 100 : price / 100}</p>
                </div>
                {count > 0 ? (
                    <button className="w-24 h-9 bg-white text-green-600 relative right-24 bottom-2 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100 hover:drop-shadow-[5px_5px_10px_rgba(255,255,255,1)]">
                        <div className="flex justify-between ml-10">
                            <p
                                className="-ml-7 mb-2 text-2xl"
                                onClick={() => {
                                    dispatch(removeItems(restro));
                                }}
                            >
                                -
                            </p>
                            <p className="mt-2">{count}</p>
                            <p
                                className="mr-2 mb-2 text-2xl"
                                onClick={() => {
                                    if (
                                        cuis?.data?.cards[0]?.card?.card?.info?.name ===
                                        restruantName[0]?.name
                                    ) {
                                        dispatch(addItems(restro));
                                    } else {
                                        setchangeRestruant(
                                            <ChangeRestruantBanner
                                                cuis={cuis?.data?.cards[0]?.card?.card?.info}
                                                restro={restro}
                                            />
                                        );
                                        dispatch(resClose(true));
                                    }
                                    setBanner(<PriceBanner />);
                                }}
                            >
                                +
                            </p>
                        </div>
                    </button>
                ) : (
                    /* Add button without count */
                    <button
                        className="w-24 h-9 bg-white text-green-600 relative right-24 bottom-2 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100 hover:drop-shadow-[5px_5px_10px_rgba(255,255,255,1)]"
                        onClick={() => {
                            if (
                                cuis?.data?.cards[0]?.card?.card?.info?.name ===
                                restruantName[0]?.name
                            ) {
                                dispatch(addItems(restro));
                            } else {
                                setchangeRestruant(
                                    <ChangeRestruantBanner
                                        cuis={cuis?.data?.cards[0]?.card?.card?.info}
                                        restro={restro}
                                    />
                                );
                                dispatch(resClose(true));
                            }
                            setBanner(<PriceBanner />);
                        }}
                    >
                        ADD
                    </button>
                )}
            </div>
            {count > 0 && banner}
            {restruantBannerClose == true && count == 0 && changeRestruant}
            {/* <button className='px-9 py-2 bg-white text-green-600 z-10 relative right-24 bottom-2 rounded-md text-sm font-medium hover:scale-y-105 transition-all duration-100 hover:drop-shadow-[5px_5px_10px_rgba(255,255,255,1)]'>ADD</button> */}
        </div>
    )
}

export default TopPicksCarousel
