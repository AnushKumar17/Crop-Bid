import React from 'react'

function SellingCard({post}) {
    return (
        <div className='mx-16'>

            <div class="my-8 max-w-screen-lg mx-auto rounded-3xl overflow-hidden shadow-lg border-[#b2ccf2]  border-l-4">
                <div class="px-6 py-4">
                    <div class="font-bold text-3xl mb-2">{post.title}</div><hr />
                    <p class="text-gray-500 text-base mb-2 italic">{post.place}</p>
                    <p class="text-gray-700 text-base mb-2"><span className='font-bold'>Quality :</span> {post.quality}</p>
                    <p class="text-gray-700 text-base mb-2"><span className='font-bold'>Quantity :</span> {post.quantity}</p>
                    <p class="text-gray-700 text-base mb-2"><span className='font-bold'>Description :</span> {post.description}</p>
                    <p class="text-gray-700 text-base mb-2"><span className='font-bold'>Price :</span> {post.price}</p>
                    <p class="text-gray-700 text-base mb-2"><span className='font-bold'>Phone Number :</span> {post.number}</p>
                </div>
            </div>

        </div>
    )
}

export default SellingCard