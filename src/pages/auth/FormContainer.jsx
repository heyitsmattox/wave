import clsx from 'clsx';

const FormContainer = (props) => {
  const { children } = props;
  return (

    <>
      <div className="bg-stone-100 flex items-center justify-center">
        {/* <div className="w-full bg-blue-800 opacity-80 object-cover h-screen"></div> */}
        <div className='w-[1200px] relative hidden md:flex '>
          <img 
          className="bg-black object-cover h-screen w-full"
          src="/images/homescreen.png" 
          alt="wave"/>


        </div>

        <div className="w-full flex flex-col items-center h-screen justify-center">
          <div className="mt-10 my-4 flex items-center justify-center">
            <div className="text-4xl">Wave</div>
            <i className="text-2xl text-blue-700 fa-solid fa-wave-square pl-2"></i>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default FormContainer;
