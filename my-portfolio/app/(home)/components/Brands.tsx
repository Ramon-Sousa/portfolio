import React from 'react'

export default function Brands() {
  return (
<section className="mx-auto w-full py-8 sm:py-12 lg:py-40">
      <div className="mx-auto sm:pb-12 lg:pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-slate-200 text-[80px] font-black  bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text">
          Brands who trust me
          </div>
          <div className="text-center text-slate-400 text-sm font-semibold ">
          I craft amazing digital experiences through a selection of sought after services and offerings.
          </div>
        </div>
      </div>
      <div className="px-0 mx-0 w-full sm:justify-between sm:mt-0 grid auto-cols-max grid-cols-9 grid-rows-2">
        <div className="col-span-1 border border-l-0 border-gray-900"></div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
        <img src="/assets/company/company-06.png" alt="suflex-logo" className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"/>
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img src="/assets/company/company-05.png" alt="achei-terapia-logo" className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"/>
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
        <img src="/assets/company/company-03.png" alt="saint-gobain-logo" className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"/>
        </div>
        <div className="col-span-2  border border-r-0 border-gray-900 text-gray-300"></div>

        <div className="col-span-2 border border-l-0 border-gray-900"></div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
        <img src="/assets/company/company-04.png" alt="parceiro-da-construcao-logo" className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"/>
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
        <img src="/assets/company/company-02.png" alt="branco-motores-logo" className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"/>
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
        <img src="/assets/company/company-01.png" alt="ib-system-logo" className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"/>
        </div>
        <div className="col-span-1 border border-r-0 border-gray-900"></div>
      </div>
    </section>
  )
}
