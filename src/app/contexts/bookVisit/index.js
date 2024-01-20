// Context Create:
import {createContext, useContext, useState} from 'react';
import {Modal} from 'antd';
import BookVisitForm from './components/BookVisitForm';
import BookVisitSuccess from './components/BookVisitSuccess';

const bookVisitContext = createContext({});

const BookVisitProvider = ({children}) => {
  const [bookVisitOpen, setBookVisitOpen] = useState(false);
  const [bookVisitSuccessOpen, setBookVisitSuccessOpen] = useState(false);
  
  return (
    <bookVisitContext.Provider value={{bookVisitOpen, setBookVisitOpen, bookVisitSuccessOpen, setBookVisitSuccessOpen}}>
      {children}
      
      <Modal
        open={bookVisitOpen}
        footer={null}
        onCancel={() => setBookVisitOpen(false)}
        title="رزرو زمان بازدید"
        className="--customModal"
        width="55%"
        style={{
          top: 10
        }}
        destroyOnClose
      >
        <div>
          <BookVisitForm
            handleCloseBookVisitModal={() => setBookVisitOpen(false)}
            handleOpenBookVisitSuccessModal={() => setBookVisitSuccessOpen(true)}
          />
        </div>
      </Modal>
      
      <Modal
        open={bookVisitSuccessOpen}
        footer={null}
        onCancel={() => setBookVisitSuccessOpen(false)}
        className="--customModalBlurred"
        width="50%"
        styles={{
          mask: {
            backgroundColor: 'rgba(0, 0, 0, 0.10)'
          }
        }}
        style={{
          top: '30%'
        }}
      >
        <BookVisitSuccess />
      </Modal>
    < /bookVisitContext.Provider>
  );
};

export const useBookVisit = () => {
  const getBookVisitContext = useContext(bookVisitContext);
  
  const bookVisitOpen = getBookVisitContext?.bookVisitOpen; // get current bookVisitOpen
  const setBookVisitOpen = getBookVisitContext?.setBookVisitOpen; // dispatch bookVisitOpen
  
  const bookVisitSuccessOpen = getBookVisitContext?.bookVisitSuccessOpen; // get current bookVisitSuccessOpen
  const setBookVisitSuccessOpen = getBookVisitContext?.setBookVisitSuccessOpen; // dispatch bookVisitSuccessOpen
  
  return {bookVisitOpen, setBookVisitOpen, bookVisitSuccessOpen, setBookVisitSuccessOpen};
};

export default BookVisitProvider;
