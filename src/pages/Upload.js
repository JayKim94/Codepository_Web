import { FirestoreMutation } from '@react-firebase/firestore';
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import utils from '../utils/utils';

function Upload({ user }) {
  const history = useHistory()
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const urlRef = useRef(null);

  const header = () => (
    <div
      className='flex flex-col gap-3 mb-5'>
      <p
        className='text-2xl font-semibold'>
        New Resource
      </p>
      <p
        className='w-96'>
        Upload your new resource to the server, but make sure it does not violate any copyrights!
      </p>
    </div>
  )

  const inputFields = () => (
    <div
      className='mb-5 gap-5'>
      <TextBox
        ref={titleRef}
        type="text"
        label="Title"
        placeholder="Title of the resource"
      />
      <span
        className='text-sm text-red-300'>
      </span>
      <TextBox
        ref={authorRef}
        type="text"
        label="Author"
        placeholder="Author of the resource"
      />
      <span
        className='text-sm text-red-300'>
      </span>
      <TextBox
        ref={urlRef}
        type="text"
        label="URL"
        placeholder="URL to the resource"
      />
      <span
        className='text-sm text-red-300'>
      </span>
    </div>
  )

  function validate() {
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const url = urlRef.current.value;

    if (utils.isEmptyOrSpaces(title)) {
      titleRef.current.focus();
      return null;
    } else if (utils.isEmptyOrSpaces(author)) {
      authorRef.current.focus();
      return null;
    } else if (utils.isEmptyOrSpaces(url)) {
      urlRef.current.focus();
      return null;
    }

    return {
      title,
      author,
      url
    }
  }

  useEffect(() => {
    if (!user) {
      history.push('/')
    }
  })

  return (
    <div
      className='pt-20'>
      <FirestoreMutation
        type='add'
        path='/youtube/'>
        {({ runMutation }) => {
          return (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const data = validate()
                if (!user || !data) return;
                runMutation({
                  title: data.title,
                  author: data.author,
                  url: data.url,
                  uploadedBy: user.displayName,
                  createAt: Date.now()
                })
                history.push('/')
              }}
              className='w-full flex flex-col items-center justify-center gap-5'>
              {header()}
              {inputFields()}
              <Button
                width='w-96'>
                <p
                  className="text-center">
                  Upload
                </p>
              </Button>
            </form>
          )
        }}
      </FirestoreMutation>
    </div>
  )
}

export default Upload
