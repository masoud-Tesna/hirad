import {Button, Divider} from 'antd';
import {useState} from 'react';

const BookVisitSuccess = ({visitLink, handleCloseBookVisitSuccessModal}) => {
  
  const [isLoading, setIsLoading] = useState(false);
  
  const downloadAndOpenImage = async () => {
    try {
      await setIsLoading(true);
      // Fetch image data
      const response = await fetch(visitLink);
      const blob = await response.blob();
      
      // Create a blob URL for the image data
      const blobUrl = URL.createObjectURL(blob);
      
      // Create a dummy link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.target = '_blank'; // Open in a new tab
      
      // Get current date in 'YYYY-MM-DD' format
      const currentDate = new Date().toISOString().slice(0, 10);
      
      // Append current date to the file name
      // Set the download attribute
      link.download = `visit_${currentDate}.jpg`;
      
      // Trigger a click event on the link to initiate the download
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      
      link.dispatchEvent(clickEvent);
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      await setIsLoading(false);
      await handleCloseBookVisitSuccessModal();
    }
  };
  
  return (
    <>
      <div>
        زمان بازدید با موفقیت ثبت شد، منتظر دیدارتان هستیم!
      </div>
      
      <Divider />
      
      <div className="!font-normal d-ltr">
        We are waiting to meet you!
      </div>
      
      <div className="mt-[48px]">
        <Button type="primary" block onClick={downloadAndOpenImage} loading={isLoading}>
          مشاهده و دانلود دعوتنامه
        </Button>
      </div>
    </>
  );
};

export default BookVisitSuccess;
