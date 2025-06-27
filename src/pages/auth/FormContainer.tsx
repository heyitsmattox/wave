interface FormContainerProps {
  children: any;
  //come back and fix this
}

const FormContainer = (props: FormContainerProps) => {
  const { children } = props;
  return (
    <>
      <div className="bg-stone-100 flex items-center justify-center">
        <div className="w-[1200px] relative hidden md:flex ">
          <img
            className="bg-black object-cover h-screen w-full"
            src="public/images/homescreenwave.JPG"
            alt="wave"
          />
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
