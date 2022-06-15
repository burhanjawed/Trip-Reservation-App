import React from 'react';
import useFetch from '../../hooks/useFetch';
import './PropertyList.scss';

const PropetyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');

  const images = [
    'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
  ];

  const capitalize = (strToCapitalize) => {
    let newString =
      strToCapitalize.charAt(0).toUpperCase() + strToCapitalize.slice(1);
    return newString;
  };

  return (
    <div className='pList'>
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          {data.length > 0 &&
            images.map((img, index) => (
              <div className='pList__item' key={img}>
                <img src={img} alt='Property' className='pList__item__img' />
                <div className='pList__item__titles'>
                  <h1>{capitalize(data[index]?.type)}</h1>
                  <h2>
                    {data[index]?.count}{' '}
                    {data[index].type === 1
                      ? capitalize(data[index]?.type)
                      : capitalize(data[index]?.type) + 's'}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropetyList;
