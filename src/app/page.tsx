// 'use client'

import React from 'react'
import Image from 'next/image'


async function getBlogs() {

  // , { cache: 'no-store' } is say jb b ham new data add kren gay to wo hmay milta rhay ga...
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items`, { cache: 'no-store' });
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function page() {

  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <div className='bg-gray-700 grid grid-cols-4 p-5 gap-5'>

      {blogs.items.map((blog:any) =>(

      <div className=' bg-white p-5' key={blog.sys.id}>

        {blogs.includes.Asset.map((elem:any) =>(
        <div key={blog.fields.image.sys.id}>
          {blog.fields.image.sys.id == elem.sys.id?
        <Image src={"https:" + elem.fields.file.url} alt='' width={400} height={400} className='h-64 object-contain' />: <div></div>}
        </div>

        ))}


        <h1 className=' text-3xl font-semibold pt-2'>{blog.fields.title}</h1>
        <p className=' text-md text-justify'>{blog.fields.desc}</p>
        <h2 className='font-bold'>Avaliable In: {blog.fields.size}</h2>
        <h2 className='font-bold'>Rs: {blog.fields.price}</h2>
      </div>
      ))}


      {/* <div className=' bg-white p-5'>
        <Image src={'/blackShirt.webp'} alt='' width={400} height={400} />
        <h1 className=' text-3xl font-semibold pt-2'>Male Shirt</h1>
        <p className=' text-md text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At maiores odit aut voluptate veritatis animi libero voluptatibus necessitatibus quia, deleniti hic nihil unde sunt molestiae dicta quos earum dolorem accusantium?</p>
        <h2 className='font-bold'>$ 50.00</h2>
      </div>

      <div className=' bg-white p-5'>
        <Image src={'/blackShirt.webp'} alt='' width={400} height={400} />
        <h1 className=' text-3xl font-semibold pt-2'>Male Shirt</h1>
        <p className=' text-md text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At maiores odit aut voluptate veritatis animi libero voluptatibus necessitatibus quia, deleniti hic nihil unde sunt molestiae dicta quos earum dolorem accusantium?</p>
        <h2 className='font-bold'>$ 50.00</h2>
      </div>

      <div className=' bg-white p-5'>
        <Image src={'/blackShirt.webp'} alt='' width={400} height={400} />
        <h1 className=' text-3xl font-semibold pt-2'>Male Shirt</h1>
        <p className=' text-md text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At maiores odit aut voluptate veritatis animi libero voluptatibus necessitatibus quia, deleniti hic nihil unde sunt molestiae dicta quos earum dolorem accusantium?</p>
        <h2 className='font-bold'>$ 50.00</h2>
      </div> */}

    </div>
  )
}
