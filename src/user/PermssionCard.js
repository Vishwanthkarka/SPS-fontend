import React,{useState} from "react";

export default function PermssionCard() {
const [buttonActive,setButtonActive] = useState(true)
console.log(buttonActive)
  return (
    <>
      <div className="flex flex-wrap md:flex-row justify-center md:justify-between text-[#000000] text-center  md:px-[5rem] py-3 pb-[30px]">
        <p className=" w-[100%] md:w-[200px]">MLR- Hackaton</p>
        <p className="text-[#606F7B] w-[50%] md:w-[100px]">Event</p>
        <p className=" text-primary w-[50%] md:w-[100px]">2 Days</p>
        <p className=" w-[100px] text-[green] flex justify-center  items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="21" viewBox="0 0 27 21">
  <rect id="Rectangle_16" data-name="Rectangle 16" width="27" height="21" rx="8" fill="#85baad"/>
  <path id="Icon_feather-check" data-name="Icon feather-check" d="M17.806,9,9.689,16.5,6,13.091" transform="translate(2.096 -2.25)" fill="none" stroke="#1a8e72" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</svg>
          Approved
        </p>
        <p className=" cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="30"
            viewBox="0 0 33 30"
            onClick={()=>setButtonActive(!buttonActive)}
           
          >
            <rect
              id="Rectangle_17"
              data-name="Rectangle 17"
              width="33"
              height="30"
              rx="8"
              fill="#cdd0d3"
            />
             {buttonActive?( <path
              id="Icon_ionic-ios-arrow-down"
              data-name="Icon ionic-ios-arrow-down"
              d="M12.2,16.067,16.74,11.5a.852.852,0,0,1,1.213,0,.873.873,0,0,1,0,1.222L12.805,17.9a.854.854,0,0,1-1.184.025l-5.183-5.2a.87.87,0,0,1,0-1.222.852.852,0,0,1,1.213,0Z"
              transform="translate(3.304 0.303)"
            />):(
            <path
              id="Icon_ionic-ios-arrow-up"
              data-name="Icon ionic-ios-arrow-up"
              d="M11.867,13.856l4.293,5.72a.676.676,0,0,0,1.146,0,1.353,1.353,0,0,0,0-1.53l-4.865-6.481a.674.674,0,0,0-1.119-.032l-4.9,6.508a1.355,1.355,0,0,0,0,1.53.676.676,0,0,0,1.146,0Z"
              transform="translate(5.591 -0.572)"
            />)}

          </svg>
        </p>
      </div>
      <div>
        <div className={buttonActive ? "hidden":"block"}>
          <h3 className="pb-[20px]">
            Description:
            <span className="font-[Avenir-regular] text-[#8795a1] pb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates fugit officiis, ab voluptate cumque quidem quaerat
              maiores cupiditate cum praesentium dolores quas officia natus
              optio quo ipsum suscipit voluptatum quam!
            </span>
          </h3>
          <h3 className="pb-[20px]">
            Date:{" "}
            <span className="font-[Avenir-regular] text-[#8795a1]">
              {" "}
              12/03/2022 - 14/03/2022
            </span>
          </h3>
        </div>
      </div>
      <hr className="text-[#dae1e7]" />
    </>
  );
}
