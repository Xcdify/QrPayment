
function Header() {

  return (
    <div className="bg-gray-100 mb-10">
      <div className="container">
        <div className='flex' style={{ height: "80px" }} >
          <div className="flex justify-center align-center items-center" >
            <h2 className="text-primary-100 font-lg mx-10">Orange Shop</h2>
          </div>
          <div className="flex w-25 align-items-center justify-content-center flex-direction-column">
            
          </div>
          <div className="flex align-items-center justify-content-center">
          </div>
          <p className="text-center" id="status"> </p>
        </div>
      </div>
    </div>
  );
}

export default Header;