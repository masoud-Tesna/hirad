export default () => {
  return (
    <>
      <div className="text-center">
        <div className="text-black text-captionXxl">
          همکاران تجاری هیراد
        </div>
        
        <div className="text-gray-40 text-captionXl">
          Hirad Partners
        </div>
      </div>
      
      <div className="mt-[30px] grid grid-cols-2 md:grid-cols-5 gap-[16px]">
        {(new Array(10).fill(2))?.map((_, index) => (
          <div key={index} className="bg-gray-20 h-[143px]">
          
          </div>
        ))}
      </div>
    </>
  );
}
