import Navbar from 'src/components/admin/Navbar';
import React, { useEffect, useState } from 'react';

import ImageUpload from 'src/components/Blog/ImageUpload';
import SelectComponent from 'src/components/Blog/SelectComponent';
import { useQuery } from 'react-query';
import { get_category } from 'src/api/index';

const CreateBlogPage = () => {
  const [dataServer, SetDataServer] = useState(null);

  const {data, status, error} = useQuery({
    queryKey: ['category'],
    queryFn: () => get_category(),
  })

  useEffect(() => {
    SetDataServer(data?.data);
    status ==='success'? (
        SetDataServer(data?.data)
    ) : status === 'loading'? (
      <div>loading...</div>
    ) : (
      <div>{error}</div>
    );
  }, [data, status, error] )

  const options = [];

  dataServer?.content?.map((item,index) => (
    options.push(
      { value: item.name, label: item.name}
    )
  ))


  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];

  console.log("🚀 ~ CreateBlogPage ~ data:", data)
  return (
    <div className='w-75 h-100 d-flex mx-auto px-5'>
      <div className='w-50 px-5 '>
        <div className='w-75 d-flex flex-column mx-auto py-3'>
          <label htmlFor='Title'>Title</label>
          <input type='text' name='Title' id='Title' className='py-2 border-1 rounded-3 ' />
        </div>
        <div className='w-75 d-flex flex-column mx-auto py-3'>
          <ImageUpload />
        </div>
      </div>
      <div className='w-50 px-5'>
        <div className='w-75 d-flex flex-column mx-auto py-3'>
          <label htmlFor='Content'>Content</label>
          <input type='text' name='Content' id='Content' className='py-2 border-1 rounded-3 '/>
        </div>
        <div className='w-100 d-flex flex-column mx-5 px-3'>
          <label htmlFor='Content'>Category</label>
          <SelectComponent options={options} />
        </div>
        <div className='w-75 d-flex flex-column mx-auto py-3'>
          <label htmlFor='Content'>Description</label>
          <textarea type='text' name='Content' id='Content' className='py-2 border-1 rounded-3 '></textarea>
        </div>
        <div className='w-75 d-flex flex-column mx-auto py-3'>
            <button className='py-2 rounded-2 border-0 bg-primary text-white '>Save</button>
        </div>
      </div>
    </div>
  );
  //     <div className='App'>
  //       <div className='mx-5 w-50 d-flex justify-content-center mx-auto my-3'>
  //         <div className='d-flex w-100'>
  //           <div className='d-flex w-50 flex-column mx-5 '>
  //             <label htmlFor='Title' className='w-50'>
  //               Title
  //             </label>
  //             <input
  //               type='text'
  //               name='Title'
  //               id='Title'
  //               className='w-75 d-flex justify-content-center '
  //             />
  //           </div>
  //           <div className='d-flex w-50 flex-column mx-5'>
  //             <label htmlFor='Content' className='w-50 '>
  //               Content
  //             </label>
  //             <input
  //               name='Content'
  //               id='Content'
  //               className='w-75 d-flex justify-content-center '
  //             ></input>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='mx-5 w-50 d-flex justify-content-center mx-auto my-3'>
  //         <div className='d-flex w-100'>
  //           <div className='d-flex w-50 mx-5'>
  //             <ImageUpload />
  //           </div>
  //           <div className='d-flex w-50 flex-column mx-5'>
  //             <SelectComponent options={options} />
  //           </div>
  //         </div>
  //       </div>
  //       <div>

  //       </div>
  //     </div>
  //   );
};

export default CreateBlogPage;
