import { Icon } from '@iconify/react';
import React from 'react';
import ImageUploading from 'react-images-uploading';

const ImageUpload = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className='upload__image-wrapper'>
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className='py-2 px-3 border-0 bg-primary rounded-3 text-white '
            >
              Click or Drop here
            </button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button onClick={onImageRemoveAll} className='py-2 px-3 border-0 bg-danger rounded-3 text-white'>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className='image-item my-3 d-flex gap-3 border-1'>
                <img src={image['data_url']} alt='' width='100' />
                <div className='image-item__btn-wrapper d-flex flex-column gap-2'>
                  <button onClick={() => onImageUpdate(index)} className='py-2 px-3 border-0 bg-primary rounded-3 text-white'><Icon icon='mdi:pencil' /></button>
                  <button onClick={() => onImageRemove(index)} className='py-2 px-3 border-0 bg-danger rounded-3 text-white'><Icon icon='mdi:trash-can' /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default ImageUpload;
