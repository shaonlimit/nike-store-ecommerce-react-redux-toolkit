import React from 'react';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice';

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const onAddToggle = () => {
    onAddToCart(), onCartToggle();
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? 'justify-items-start' : 'justify-items-center'
        }  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`item-description grid items-center ${
            ifExists ? 'justify-items-start' : 'justify-items-center'
          }`}
        >
          <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
            {title}
          </h1>
          <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>
            {text}
          </p>
          <div className='item-price-rating flex items-center justify-between w-28 my-2'>
            <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'>
              <h1 className='text-black text-sm font-medium'>${price}</h1>
            </div>
            <div className='flex items-center gpa-1'>
              <StarIcon className='icon-style text-slate-100 w-5 h-5 md:w-4 md:h-4' />
              <h1 className='md:text-sm font-normal text-teal-100'>{rating}</h1>
            </div>
          </div>
          <div className='item-btn flex items-center gap-3'>
            <button
              type='button'
              onClick={() => onAddToCart()}
              className='bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200'
            >
              <ShoppingBagIcon className='icon-style text-slate-900' />
            </button>
            <button
              type='button'
              onClick={() => onAddToggle()}
              className='bg-white/90 blur-effect-theme button-theme px-2 shadow shadow-slate-200 text-black'
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? 'absolute top-5 right-1' : 'justify-center'
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={` transition-theme hover:-rotate-12 duration-700 ${
              ifExists
                ? 'h-auto w-48 p-3 lg:w-56 lg:p-3 md:w-44 md:p-3 sm:p-3 -rotate-[35deg]'
                : 'h-auto w-44 mt-2'
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
