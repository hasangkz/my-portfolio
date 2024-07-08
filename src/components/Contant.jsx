// import { CONTACT } from '../constants/index';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
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
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-5xl font-thin'>Get in Touch</h1>
      <Flex align={'center'} justify={'center'}>
        <VStack align='stretch' spacing={20}>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                w={400}
                h={30}
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
            <br />
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                w={400}
                h={30}
                p={5}
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
            <br />
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                w={400}
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
            <br />
            <div className='flex items-center justify-center align-middle'>
              <Button
                className='send-button'
                leftIcon={<MdEmail />}
                loadingText='Sending...'
                size='lg'
                type='submit'
                colorScheme='pink'
                variant='solid'
              >
                Send me!
              </Button>
              <ToastContainer />
            </div>
          </form>
        </VStack>
      </Flex>
    </div>
  );
};

export default Contant;
