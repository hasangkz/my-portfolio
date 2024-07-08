import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const Contant = () => {
  const form = useRef();
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const successNotify = () => toast('Email has been sent!');
  const errorNotify = (error) => toast(error?.text);

  const serviceKey = import.meta.env.VITE_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey,
      })
      .then(
        () => {
          successNotify();
        },
        (error) => {
          errorNotify(error);
        }
      );

    setInput({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-5xl font-thin'
      >
        Get in Touch
      </motion.h1>
      <motion.div
        className='flex flex-col '
        style={{ borderRadius: '30rem' }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <form
          className=' shadow-md rounded pt-6 pb-8 mb-4'
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                className='w-full'
                p={5}
                borderRadius={10}
                required={true}
                type='text'
                color={'black'}
                size={'lg'}
                value={input.name}
                name='name'
                onChange={(e) =>
                  setInput((input) => ({
                    ...input,
                    name: e.target.value,
                  }))
                }
              />
            </FormControl>
          </div>
          <br />
          <div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                p={5}
                className='w-full'
                borderRadius={10}
                required={true}
                type='email'
                name='email'
                color={'black'}
                size={'lg'}
                value={input.email}
                onChange={(e) =>
                  setInput((input) => ({
                    ...input,
                    email: e.target.value,
                  }))
                }
              />
            </FormControl>
          </div>
          <br />
          <div>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                className='w-full'
                h={200}
                p={5}
                borderRadius={10}
                required={true}
                type={'text'}
                name='message'
                color={'black'}
                size={'lg'}
                value={input.message}
                onChange={(e) =>
                  setInput((input) => ({
                    ...input,
                    message: e.target.value,
                  }))
                }
              />
            </FormControl>
          </div>
          <br />
          <div className='flex items-center justify-center align-middle'>
            <Button
              className='send-button'
              rightIcon={<MdEmail />}
              loadingText='Sending...'
              size='lg'
              type='submit'
              colorScheme='pink'
              variant='solid'
            >
              Send me
            </Button>
            <ToastContainer />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contant;
