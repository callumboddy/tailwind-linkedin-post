import React from 'react';
import { BiWorld, BiCommentDetail } from 'react-icons/bi'
import { GrMore } from 'react-icons/gr'
import { FiThumbsUp } from 'react-icons/fi'
import { RiShareForwardLine } from 'react-icons/ri'
import { TiLocationArrowOutline } from 'react-icons/ti'

function App() {
  return (
    <div className='flex items-center h-screen'>
      <Post /> 
    </div>
  );
}

function Post() {
  return (
    <div className='bg-white m-8 rounded shadow-md border border-gray-400 max-w-lg mx-auto'>
      <div className='p-4 flex items-start'>
        <div className='relative mt-1'>
          <img className='rounded-full w-12 h-12' src="https://media-exp1.licdn.com/dms/image/C4D03AQE-8CJDfHufRw/profile-displayphoto-shrink_100_100/0?e=1603324800&v=beta&t=uOsgSSGgam9vduxaKJCZs_A4os6pOH9pB3LbwDTq7Ko" alt="Profile"/>
          <div className='-mb-1 -mr-2 absolute rounded-full border-2 border-white bg-green-700 bottom-0 right-0 h-5 w-5' />
        </div>
        <div className='ml-4 flex flex-col flex-1'>
          <h5 className='text-gray-900 font-medium'>Callum Boddy <span className='text-gray-700 font-medium'>• 1st</span></h5>
          <h5 className='-mt-1 text-sm text-gray-700'>Senior Software Engineer</h5>
          <div className='flex'><h5 className='-mt-1 text-sm text-gray-700'>Now • &nbsp;</h5><BiWorld className='text-gray-700' /></div>
        </div>
        <GrMore className='-mt-1' size={24} color={"#666666"} />
      </div>
      <p className='px-4 text-sm text-gray-800'>
      This is a LinkedIn Post about me making a LinkedIn post in React using Tailwind. Its pretty great and really quick to make React components.
      You can find the code on <span className='text-blue-700 font-semibold'>Github</span>. Thanks for watching :)
      </p>
      <img className='mt-4' src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2243&q=80" alt="React"/>
      <div className='px-4 flex items-center' >
        <div className='flex py-2 space-x-2'>
          <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="likes"/>         
          <img src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="loves"/>         
          <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="OMGS" /> 
        </div>
        <p className='ml-2 text-sm text-gray-700 font-light'>1000 • 50 comments</p>
      </div>
      <div className='h-px bg-gray-300 mx-4' />
      <div className='flex space-x-6 px-2 py-2'>
        <div className='px-2 py-2 rounded-md flex items-center hover:bg-gray-200'>
          <FiThumbsUp className='text-gray-700' style={{transform: "scaleX(-1)"}} size={24} />
          <h6 className='ml-1 mt-1 font-medium text-gray-700'>Like</h6>
        </div>
        <div className='px-2 py-2 rounded-md mt-1 flex items-center hover:bg-gray-200'>
          <BiCommentDetail className='text-gray-700' style={{transform: "scaleX(-1)"}} size={24} />
          <h6 className='ml-1 font-medium text-gray-700'>Comment</h6>
        </div>
        <div className='px-2 py-2 rounded-md mt-1 flex items-center hover:bg-gray-200'>
          <RiShareForwardLine className='text-gray-700' size={28} />
          <h6 className='ml-1 font-medium text-gray-700'>Share</h6>
        </div>
        <div className='px-2 py-2 rounded-md mt-1 flex items-center hover:bg-gray-200'>
          <TiLocationArrowOutline className='text-gray-700' size={28} />
          <h6 className='ml-1 font-medium text-gray-700'>Send</h6>
        </div>
      </div>
    </div>
  )
}

export default App;
